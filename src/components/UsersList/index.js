import React from 'react';

function UsersList(props){
    const {u} = props;
        return(
            <li>
               <ul>{u.name.title} {u.name.first}</ul>
               <ul>{u.name.last}</ul>
               <ul>{u.email}</ul>
            </li>
        )};
export default UsersList;
