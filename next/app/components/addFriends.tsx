
"use client"
import React from 'react'

type Props = {
    name:string,
    id: number
}

import { gql, useMutation } from '@apollo/client';

export default function AddFriends({name, id}: Props) {

    const ADD_FRIEND = gql`
        mutation MyMutation {
            insert_friend(objects: {id:${id}, name: "${name}"}) {
            returning {
                id
                name
            }
            }
        }
`;

    const [addTodo, { data, loading, error }] = useMutation(ADD_FRIEND);

    return (
      <div className='flex'>
          <button onClick={()=>addTodo()}>Add Friends</button>
      </div>
    );
}