import React from "react";
import './TodoBuscador.css';

function TodoBuscador({search, setSearch}) {


        const onBuscador = (e) => {
            console.log(e.target.value); //trabajndao con el buscador para poder buscar las personas que tenemos en nuestra aplicacion.
            setSearch(e.target.value);
        };
    return(
        <>
            <div className="ContenedorBuscador">
                <input placeholder="buscar..."
                value={search}
                onChange={onBuscador}
                />
            </div>
        </>
    );
}

export {TodoBuscador};