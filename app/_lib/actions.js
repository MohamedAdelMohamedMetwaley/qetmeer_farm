"use server";

import { createClient } from "@/app/_lib/supabase/server";
import { redirect } from "next/navigation";
const supabase = createClient();

function generateRandomId(length = 12) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function createOrder(cartData, formData) {
  const order = await createOrderWithUniqueId(cartData, formData);

  const orderItems = cartData.items.map((item) => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.amount,
    price: item.price, // Price at the time of purchase
    discount: item.discount, // Discount at the time of purchase
  }));

  const { data: items, error: itemsError } = await supabase
    .from("order_items")
    .insert(orderItems);

  if (itemsError) {
    console.error("Error inserting order items:", itemsError);
    return;
  }
  redirect(`/order/${order.id}`);
  return order;
}
async function createOrderWithUniqueId(cartData, formData) {
  let orderId = generateRandomId();
  const newOrder = {
    id: orderId,
    user_id: null,
    total_price: cartData.total,
    discount: cartData.discount,
    order_status: "pending",
    customer_name: formData.get("customer"),
    customer_phone: formData.get("phone"),
    customer_address: formData.get("address"),
  };
  let success = false;
  const maxRetries = 5;
  for (let i = 0; i < maxRetries && !success; i++) {
    orderId = generateRandomId();
    try {
      const { data: order, error } = await supabase
        .from("orders")
        .insert({ id: orderId, ...newOrder })
        .select("*")
        .single();
      // const order = newOrder;
      // const error = false;

      if (error && error.code === "23505") {
        // 23505 is PostgreSQL's unique violation error code
        console.log("ID collision, retrying...");
      } else if (error) {
        throw error;
      } else {
        success = true;
        return order;
      }
    } catch (err) {
      console.error("Error inserting order:", err);
      throw err;
    }
  }

  if (!success) {
    throw new Error("Failed to insert order after multiple retries");
  }
}
