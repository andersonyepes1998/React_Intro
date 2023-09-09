import React from "react";
import './TodoItem.css';

function TodoItem(props) {

   /* const onCompleted = () => {
        alert('ya completastes el TODO ' + props.text);
    }
    

    const onDele = () => {
        alert('Borrastes el TODO ' + props.text);
    }
    */

    return(
        <>
            <div className="contenedorLista">
                <li>
                    <span className={`verdadero ${props.completed && 'verdadero-icon'}`} onClick={props.onCompleted}>
                    ✔
                    </span>
                    <p className={`parrafo-p ${props.completed && 'parrafo-p-complete'}`}>
                        {props.text}
                    </p>
                    <span className="falso" onClick={props.ondele}>❌</span >
                </li>
            </div>
        </>
    );
}

export  {TodoItem};