import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { useState } from "react";

function App() {

  const [userList,setUserList] = useState([]);

  const addUserHandler =(uName,uAge)=>{
    setUserList((preUserList)=>{
      return [...preUserList,{name:uName, age:uAge,id:Math.random().toString()}]
    })
  }

  return (
    <div> 
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} />
    </div>
  );
}

export default App;
