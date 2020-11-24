import React from 'react';
import { validate } from "./rut";
import './App.css';

function refreshPage() {
    window.location.reload(false);
  }

export default function MiValidador(params) {

    
    
    const [rutIngresado, setRutIngresado] = React.useState(params.valor);

    const [clave, setClave] = React.useState("");

    const change = (e)=>{
        setRutIngresado(e.target.value);
    }
    const onChangePassword = (e)=>{
        setClave(e.target.value);
    }

     if(clave === "uvalpo") return (<p className="App-link">¡Bien Hecho!
     <div className="new-line">
         <input type="button" value="Reiniciar" className="btn" onClick={refreshPage}/>
    </div>
    </p>)

     return  (<div>
        <input type="text" value={rutIngresado} onChange={change}  />
       { validate(rutIngresado) &&
            <div className="new-line">
                <input type="password" value={clave} onChange={onChangePassword}  placeholder="uvalpo"/>
            </div>
       }
       </div>
       )
}