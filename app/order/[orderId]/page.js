import { getOrder, getOrders } from "@/app/_lib/data-service";

// now the page is statically generated
export async function generateStaticParams() {
  const orders = await getOrders();

  const ids = orders.map((order) => ({
    orderId: String(order.id),
  }));

  return ids;
}

async function Page({ params }) {
  const {
    id,
    customer_name,
    customer_phone,
    customer_address,
    total_price,
    order_status,
  } = await getOrder(params.orderId);

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        <p>الاسم: {customer_name}</p>
        <p>رقم التليفون: {customer_phone}</p>
        <p>العنوان: {customer_address}</p>
        <p>السعر: {total_price}</p>
        <p>رقم الطلب: {id}</p>
        <p>الحالة: جاري التوصيل ({order_status})</p>
      </div>
    </main>
  );
}

export default Page;
