import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from "react";

const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = props=>{
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>);
}

const ErrorModal=props=>{
    return(
    <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('modal-root'))}
    </Fragment>);
}

export default ErrorModal;