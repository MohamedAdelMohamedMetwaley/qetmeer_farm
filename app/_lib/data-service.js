import { notFound } from "next/navigation";
import { createClient } from "@/app/_lib/supabase/client";
const supabase = createClient();
/////////////
// GET

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getProductPrice(id) {
  const { data, error } = await supabase
    .from("products")
    .select("price, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getProducts = async function () {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, category, measuring_unit, image, price, discount, stock, sell_count"
    ) //delete {price} if you will fetch it individually
    .order("sell_count", { ascending: false }); // order by sell count in descending order

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));
  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
  return data;
};

export async function getOrder(id) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }

  return data;
}

export async function getCategories() {
  const { data: Categories, error } = await supabase
    .from("categories")
    .select("name");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }
  return Categories;
}
// Users are uniquely identified by their email address
// export async function getUser(email) {
//   const { data, error } = await supabase
//     .from("Users")
//     .select("*")
//     .eq("email", email)
//     .single();

//   // No error here! We handle the possibility of no guest in the sign in callback
//   return data;
// }

/////////////
// CREATE

// export async function createUser(newUser) {
//   const { data, error } = await supabase.from("Users").insert([newGuest]);

//   if (error) {
//     console.error(error);
//     throw new Error("User could not be created");
//   }

//   return data;
// }

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateUser(id, updatedFields) {
  const { data, error } = await supabase
    .from("Users")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("User could not be updated");
  }
  return data;
}
