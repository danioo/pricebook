import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { ReactElement } from "react";
import type { Database } from "../../database.types";

export default async function PricesPage(): Promise<ReactElement> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: prices } = await supabase
    .from("prices")
    .select("id, price, stores(name), products(name)");

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-gray-700 text-gray-50 uppercase">
          <tr>
            <th className="px-6 py-3" scope="col">
              Product name
            </th>
            <th className="px-6 py-3" scope="col">
              <div className="flex items-center">
                Store
                {/* <a href="#">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 ml-1.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a> */}
              </div>
            </th>
            <th className="px-6 py-3" scope="col">
              <div className="flex items-center">
                Price
                {/* <a href="#">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 ml-1.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </a> */}
              </div>
            </th>
            <th className="px-6 py-3" scope="col">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {prices?.map((price) => (
            <tr className="bg-gray-50 border-gray-700" key={price.id}>
              <th
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                scope="row"
              >
                {price.products?.name}
              </th>
              <td className="px-6 py-4">{price.stores?.name}</td>
              <td className="px-6 py-4">{price.price}</td>
              <td className="px-6 py-4 text-right">
                {/* <a
                  className="font-medium text-blue-500 hover:underline"
                  href="#"
                >
                  Edit
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
