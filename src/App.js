import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import React, { useState } from "react";

function App() {

  const [userList,setUserList] = useState([]);

  const addUserHandler =(uName,uAge,uCname)=>{
    setUserList((preUserList)=>{
      return [...preUserList,{name:uName, age:uAge, cname:uCname, id:Math.random().toString()}]
    })
  }

  return (
    <React.Fragment> 
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;
