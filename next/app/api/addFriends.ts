export default async function addFriends(id: number, name: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,  {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret' : process.env.HASURA_ADMIN_SECRET as string
      },
      body: JSON.stringify({
        query: `mutation MyMutation {
          insert_friend(objects: {id: ${id}, name: ${name}}) {
            returning {
              id
              name
            }
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

  }