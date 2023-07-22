import React, { useEffect, useRef, useState } from "react";
import Contenido from "./Contenido";
import { v4 as uuid } from 'uuid';
import "./style.css"

function App() {
  const [nota, setNota] = useState([]);
  const tituloRef = useRef();
  const contenidoRef = useRef();
  const KEY = 'sticky-notes-sticky';
  const colorCheck = useRef();

  //recuperar datos del localStorage
  useEffect(() => {
    const misNotas = JSON.parse(localStorage.getItem(KEY));
    if (misNotas) {
      setNota(misNotas);
    }
  }, []);
  
  //almacenar datos en el localStorage
  useEffect(() => {
    const json = JSON.stringify(nota);
    localStorage.setItem(KEY, json);
  }, [nota]);

  //Agregar una nota con titulo y contenido.
  const agregarNota = () => {
    const titulo = tituloRef.current.value;
    const contenido = contenidoRef.current.value;
    const color = colorCheck.current.checked;
    if (contenido === '') return;
    setNota((prev) => {
      const nuevaNota = {
        id: uuid(),
        titulo: titulo,
        contenido: contenido,
        color: color
      
      };
      return [...prev, nuevaNota];
    });
  };


  //Ingreso de datos en el navegador
  return (
    <>
      <h2 className="sticky">Notas Adhesivas</h2>
      <div className="contenido">
        <div id="titulo" className="col-md-3 col-12">
          <input ref={tituloRef} className="form-control" placeholder="Titulo Nota" />
        </div>
        <div className="col-md-3 col-12">
          <input ref={contenidoRef} className="form-control" placeholder="Contenido Nota" />
        </div>
        <div className="col-md-3 col-12">
          <button className="btn btn-primary" onClick={agregarNota}>Agregar Nota</button>
        </div>
        <div className="form-check">
            <input
              ref={colorCheck}
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Importante
            </label>
          </div>
      </div>

      <Contenido props={nota} />
    </>
  );
}

export default App;


