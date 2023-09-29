import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { ReactElement } from "react";
import type { Database } from "../../database.types";

export default async function StoresPage(): Promise<ReactElement> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: stores } = await supabase.from("stores").select();

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-gray-700 text-gray-50 uppercase">
          <tr>
            <th className="px-6 py-3" scope="col">
              Name
            </th>
            <th className="px-6 py-3" scope="col">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {stores?.map((store) => (
            <tr className="bg-gray-50 border-gray-700" key={store.id}>
              <th
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                scope="row"
              >
                {store.name}
              </th>
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
