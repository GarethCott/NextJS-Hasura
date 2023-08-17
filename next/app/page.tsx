type Data = {
  friend: Record<string, string>[]
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string, {
    method: 'POST',
    headers: {
      'x-hasura-admin-secret' : process.env.HASURA_ADMIN_SECRET as string
    },
    body: JSON.stringify({
      query: `query MyQuery {
        friend {
          name
        }
      }`

    })
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const result = await res.json()
  const data: Data = result.data
  const friends = data.friend

  return friends
}

export default async function Home() {

  const getFriends = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
       {getFriends.map(friend => (
        <p>{friend.name}</p>
       ))}
        <br />
      </div>
    </main>
  )
}

