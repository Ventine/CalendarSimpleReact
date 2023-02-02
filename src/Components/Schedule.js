function Schedule(){
    return(
        <div className="container-schedule">
            <div className="lunes day-schedule">
                <div className="lunes-title"><h1>lunes</h1></div>
                <div className="schedule.task">
                    <table className="lunes-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="martes day-schedule">
                <div className="martes-title"><h1>Martes</h1></div>
                <div className="schedule.task">
                    <table className="martes-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="miercoles day-schedule">
                <div className="miercoles-title"><h1>Miercoles</h1></div>
                <div className="schedule.task">
                    <table className="miercoles-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="jueves day-schedule">
                <div className="jueves-title"><h1>Jueves</h1></div>
                <div className="schedule.task">
                    <table className="jueves-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="viernes day-schedule">
                <div className="viernes-title"><h1>Viernes</h1></div>
                <div className="schedule.task">
                    <table className="viernes-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="fds day-schedule">
                <div className="fds-title"><h1>Fin de semana</h1></div>
                <div className="schedule.task">
                    <table className="fds-table">
                        <thead>
                            <tr>
                                <th>Tarea</th>
                                <th>Tiempo estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejercicio</td>
                                <td>30 minutos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Schedule;