import Card from "../UI/Card";
import classes from'./AddUser.module.css';
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props=>{

    const[enteredUserName, setEnteredUserName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[enteredCname, setEnteredCname] = useState('');
    const[error,setError] = useState('');

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length === 0 || enteredCname.trim().length === 0){
            setError({
                title:'Invalid Input!',
                message:'Please enter valid name, age and college name (non-empty values)'
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
        props.onAddUser(enteredUserName,enteredAge,enteredCname);
        setEnteredUserName('');
        setEnteredAge('');
        setEnteredCname('');
    }

    const changeUsernameHandler = (event)=>{
        setEnteredUserName(event.target.value);
    }

    const changeAgeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const changeCnameHandler = (event)=>{
        setEnteredCname(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>   
                <form onSubmit={addUserHandler}>
                <label htmlFor='name'>Username:</label>
                <input id='name' type='text' value={enteredUserName} onChange={changeUsernameHandler}></input>
                <label htmlFor='age'>Age (Years):</label>
                <input id='age' type='number' value={enteredAge} onChange={changeAgeHandler}></input>
                <label htmlFor="cname">College name:</label>
                <input id='cname' type='text' value={enteredCname} onChange={changeCnameHandler}></input>
                <Button type='submit'>Add User</Button>
                
                </form>
            </Card> 
        </Wrapper>
    );
}

export default AddUser;