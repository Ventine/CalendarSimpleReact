import './App.css';
import 'react-calendar/dist/Calendar.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Task from "./Components/Task";
import Title from "./Components/Title";
function App() {
  return (
      <div>
          {/*Insercion de componentes*/}
        <Navbar />
        <Home tiitle="Ingresa tus tareas, dales tiempo y prioridad, ahora espera la magia, tendrás un horario elaborado para poder seguir tu día a día,
                de manera organizada aprovechando el máximo de tu tiempo." />
        <Title title="Ingresa tus tareas" />
        <Task />
      </div>
  );
}

export default App;
