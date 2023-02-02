import './App.css';
import 'react-calendar/dist/Calendar.css';
import Home from "./Components/Home";
import Task from "./Components/Task";
import Title from "./Components/Title";
import Schedule from "./Components/Schedule";
import SingleButton from "./Components/SingleButton";
import DobleButton from "./Components/DobleButton";
function App() {
  return (
      <div>
        <Home tiitle="Ingresa tus tareas, dales tiempo y prioridad, ahora espera la magia, tendrás un horario elaborado para poder seguir tu día a día,
                de manera organizada aprovechando el máximo de tu tiempo." />
        <Title title="Ingresa tus tareas" />
        <Task />
          <SingleButton />
        <Title title="Horario generado" />
        <Schedule />
          <DobleButton />
      </div>
  );
}

export default App;
