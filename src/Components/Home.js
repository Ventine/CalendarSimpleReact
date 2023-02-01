function Home (props) {
    return(
     <div className="container-home">
          <div className="container-home-elemnts">
             <div className="container-title-principal">
                 <h1 className="titulo-principal">{props.tiitle}</h1>
             </div>
             <div className="container-buton-principal">
                 <button className="buton-principal">Ingresar mis tareas</button>
             </div>
         </div>
     </div>

    );
}
export default Home;