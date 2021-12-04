import React from 'react';
import { useState, useEffect } from 'react';
import UsersList from '../UsersList/index.js';

function UserFetch(){
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
          .then((response) => response.json())
          .then(({ results }) => setUsers(results))
          .then(() => setIsFetching(true))
          
      }, [page, setUsers]);

      const next = () => {
        setPage(page+1)
    }

    const prev = () => {
        if(page < 1){alert('Wrong')} else {setPage(page-1)}
        
    }

    const mapUsers = (u) => {
        return <UsersList key={u.login.md5} u={u} />
    }

  
    if(isFetching){
        return <>
            <h1>Users</h1>
            <h1>{page}</h1>
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


