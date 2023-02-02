import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {useState} from "react";
import Calendar from 'react-calendar';

function Task(){
    const [date, setDate] = useState(new Date());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <div className="container-task">
            <div className="task-row1">
                <div className="add-task">
                    <div className="task-title"><h1>Agregar tareas</h1></div>
                    <form>
                        <input type="text" name="name" id="name" placeholder="Nombre de tarea" required />
                            <input type="number" name="time-execute" id="time-execute" placeholder="Tiempo de ejecución" min="30" step="30" required />
                                <select id="priority" >
                                    <option disabled value="selected">Prioridad</option>
                                    <option>Alta</option>
                                    <option >Media</option>
                                    <option>Baja</option>
                                </select>
                        <br/>
                                <button className="send-task">Guardar tarea</button>
                    </form>
                </div>
                <div className="container-add-task">
                    <div className="task-add-title"><h1>Tareas agregadas</h1></div>
                    <table className="task-table">
                        <thead>
                        <tr className="tHead">
                            <th>Tarea</th>
                            <th>Tiempo</th>
                            <th>Prioridad</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Trabajar</td>
                            <td>8 horas</td>
                            <td>Alta</td>
                            <td>
                                <AiFillEdit className="edit-btn" />
                            </td>
                            <td>
                                <AiFillDelete className="delete-btn"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Trabajar</td>
                            <td>8 horas</td>
                            <td>Alta</td>
                            <td>
                                <AiFillEdit className="edit-btn" />
                            </td>
                            <td>
                                <AiFillDelete className="delete-btn"/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="task-row2">
                <div className="task-comodines">
                    <div className="task-title"><h1>Comodines</h1></div>
                    <div className="buttons-comodines">
                        <button className="button-comodin" id="Comodin_1">Gimnasio</button>
                        <button className="button-comodin" id="Comodin_2">Meditar</button>
                        <button className="button-comodin" id="Comodin_3">Yoga</button>
                    </div>
                </div>
                <div className="date-task">
                    <div className="date-title"><h1>Seleccionar semana</h1></div>
                    <div className='calendar-container'>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            selectRange={true}
                        />
                    </div>
                    {date.length > 0 ? (
                        <p className='text-center'>
                            <span className='bold'>Inicio:</span>{' '}
                            {date[0].toLocaleDateString('es-ES', options)}
                            &nbsp;-&nbsp;
                            <span className='bold'>Fin:</span> {date[1].toLocaleDateString('es-ES', options)}
                        </p>
                    ) : (
                        <p className='text-center'>
                            <span className='bold'>Seleciona una fecha</span>{' '}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Task;