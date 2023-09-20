import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Page(): JSX.Element {
  const supabase = createServerComponentClient({ cookies })

  const { data: prices, error } = await supabase.from("prices").select()

  return (
    <ul>
      {prices?.map((price) => (
        <li key={price.id}>{price.product} - {price.price}</li>
      ))}
    </ul>
  )
}
