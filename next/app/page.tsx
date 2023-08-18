"use client"
import GetFriends from "@/app/components/getFriends"
import AddFriends from "./components/addFriends"
import {useState} from "react"
type Data = {
  friend: Record<string, string>[]
}

// export async function getFriends() {
//   const res = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string , {
//   cache: 'no-store',
//     method: 'POST',
//     headers: {
//       'x-hasura-admin-secret' : process.env.HASURA_ADMIN_SECRET as string
//     },
//     body: JSON.stringify({
//       query: `query MyQuery {
//         friend {
//           name
//         }
//       }`

//     })
//   }, )
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   const result = await res.json()
//   const data: Data = result.data
//   const friends = data.friend

//   return friends
// }

export default function Home() {

  // const friends = await getFriends()
  // console.log(friends)
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <input className='p-4'
    type="text"
    value={name}
    onChange={e => { setName(e.currentTarget.value); }}
   
/>
<input className='p-4'
    type="number"
    value={id}
    onChange={e => { setId(e.currentTarget.value); }}
   
/>
      <AddFriends name={name} id={Number(id)}/>
      <GetFriends/>
    </main>
  )
}

