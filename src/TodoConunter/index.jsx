import React from "react";
import './TodoConunter.css'

function TodoConunter({total, completed}) {

    return(
        <>
            <h2 className="texto">Has Completado {completed} de {total} PEDIDO</h2>
                <h4>Pedidos: 0</h4>
                <h4>Realizados: 0</h4>
        </>
    );
}

export {TodoConunter};