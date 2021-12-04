import React from 'react';

function UsersList(props){
    const {u} = props;
        return(
            <li>
               <img src={u.picture.large} alt="Logo" />;
               <ul>{u.name.title} {u.name.first}</ul>
               <ul>{u.name.last}</ul>
               <ul>{u.email}</ul>
            </li>
        )};
export default UsersList;
