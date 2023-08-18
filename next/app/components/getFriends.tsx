// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

type Props = {
}

type Data = {
    friend: Record<string, string>[]
  }

const GET_Friends = gql
`query MyQuery {
          friend {
             name
             id
           }
       }`;

export default function GetFriends({}: Props) {
    const { loading, error, data } = useQuery(GET_Friends);

    const friends:Data = data;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return friends.friend.map(({ name, id }) => (
      <div key={id}>
        <h3>{name}</h3>
      </div>
    ));
}
