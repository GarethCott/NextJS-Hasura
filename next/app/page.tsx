import addFriends from "@/app/api/addFriends"
import getFriends from "@/app/api/getFriends"

export default async function Home() {

  const friends = await getFriends()
  console.log(friends)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <form action=""></form>
       {friends.map(friend => (
        <p key={friend.id}>{friend.name}</p>
       ))}
        <br />
      </div>
    </main>
  )
}

