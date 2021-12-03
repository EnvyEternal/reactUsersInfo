import React from 'react';
import { useState, useEffect } from 'react';
import UsersList from '../UsersList/index.js';

function UserFetch(){
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?inc=name,login,email&results=10`)
          .then((response) => response.json())
          .then(({ results }) => setUsers(results))
          .then(() => setIsFetching(true))
      }, [setUsers]);

      const next = () => {
        window.location.reload(); 
    }

    const prev = () => {
        window.location.reload(); 
        
    }

    const mapUsers = (u) => {
        return <UsersList key={u.login.md5} u={u} />
    }

  
    if(isFetching){
        return <>
            <h1>Users</h1>
            <ul className='list'>{users.map(mapUsers)}</ul>
            <div>
                <button onClick={prev}>Prev</button>   
                <button onClick={next}>Next</button>
            </div>      
            </>
    }else{
        return <div>Load</div>
    }
}

export default UserFetch;


