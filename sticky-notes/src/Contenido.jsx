import React from "react";
import "./style.css"

//Definir si la nota es importante o no
function Contenido({props}) { 
    return (
        <div className="row">
         {props.map((nota) => {
            return (
              <div className="col-md-3" key={nota.id}>
                {nota.color ? 
                  <ul> 
                     <li className="lista_importante"> 
                         <h2>{nota.titulo}</h2> 
                         <p>{nota.contenido}</p> 
                         
                     </li>
                    </ul>  
               :
               <ul> 
                    <li className="lista"> 
                        <h2>{nota.titulo}</h2> 
                        <p>{nota.contenido}</p> 
                    </li>
                </ul>
               }
              </div>
            )
         })}
        </div>
        
      );
}

export default Contenido;