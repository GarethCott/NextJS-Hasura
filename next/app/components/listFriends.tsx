"use client"
import getFriends from "@/app/api/addFriends"

type Props = {
    id:number,
    name: string
}

export default function listFriends({id, name}: Props) {
  return (
    <div>listFriends</div>
  )
}