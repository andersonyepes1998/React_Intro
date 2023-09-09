import React from "react";
import './CreateButton.css';

function CreateButton() {

    const onClickButton = (e) => {
        alert(e);  //Aqui podemos crear un parametro dentro del arrow fuction para poder reutilizar el alert varias veces.
    }

    return(
        <>
            <div className="aumentar">

                <button onClick={() => onClickButton('Aqui deberia ir el modal')}>+</button>

            </div>
        </>
    );
}

export {CreateButton};