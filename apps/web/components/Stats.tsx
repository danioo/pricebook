import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Example() {
  const supabase = createServerComponentClient({ cookies });

  const { data: prices } = await supabase
    .from("prices_view")
    .select()
    .limit(1);

  const stats = [
    { id: 1, name: "Prices", value: prices?.[0]?.pricescount, href: "/prices" },
    {
      id: 2,
      name: "Products",
      value: prices?.[0]?.productscount,
      href: "/products",
    },
    { id: 3, name: "Stores", value: prices?.[0]?.storescount, href: "/stores" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Welcome
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            You can verify what are the recent prices of products in many
            different stores
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Actually, in the database there are:
          </p>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  key={stat.id}
                >
                  <dt className="text-base leading-7 text-gray-600">
                    <Link href={stat.href}>{stat.name}</Link>
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
