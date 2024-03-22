import Card from "../UI/Card";
import classes from'./AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props=>{

    const[enteredUserName, setEnteredUserName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[error,setError] = useState('');

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid Input!',
                message:'Please enter valid name and age (non-empty values)'
            })
            return;
        }
        if(enteredAge<0){
            setError({
                title:'Invalid age!',
                message:'Please enter valid name and age (non-empty values)'
            })
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const changeUsernameHandler = (event)=>{
        setEnteredUserName(event.target.value);
    }

    const changeAgeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>   
                <form onSubmit={addUserHandler}>
                <label htmlFor='name'>Username:</label>
                <input id='name' type='text' value={enteredUserName} onChange={changeUsernameHandler}></input>
                <label htmlFor='age'>Age (Years):</label>
                <input id='age' type='number' value={enteredAge} onChange={changeAgeHandler}></input>
                <Button type='submit'>Add User</Button>
                </form>
            </Card> 
        </div>
    );
}

export default AddUser;