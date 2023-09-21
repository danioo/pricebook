import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function StoresPage() {
  const supabase = createServerComponentClient({ cookies })

  const { data: stores, error } = await supabase.from("stores").select("")

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-gray-700 text-gray-50 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {stores?.map((store) => (
            <tr key={store.id} className="bg-gray-50 border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {store?.name}
              </th>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
