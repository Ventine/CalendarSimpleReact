import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
function App() {
  return (
      <div>
        <Navbar />
        <Home tiitle="Ingresa tus tareas, dales tiempo y prioridad, ahora espera la magia, tendrás un horario elaborado para poder seguir tu día a día,
                de manera organizada aprovechando el máximo de tu tiempo." />
      </div>
  );
}

export default App;
