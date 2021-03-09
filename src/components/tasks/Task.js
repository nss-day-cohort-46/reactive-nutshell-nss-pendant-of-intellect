import { React } from "react";
import { TaskContext } from "./TaskProvider";

export const TaskCard = ({taskObj}) => {
    const {addTask} = useContext(TaskContext)

    const [task, setTask] = useState({
        complete: false
    })

    const handleChange = (event) => {
        const newTask = {...task}
        newTask[event.target.id]=event.target.value
        setTask(newTask)
    }

    return(
        <>
            <div>Complete by: {taskObj.completedByDate}</div>
            <section>
                <input type= "checkbox" id={taskObj.id} value={true} onClick={handleChange}></input>
                <label forhtml={taskObj.id} className="task__name">
                <div>{taskObj.name}</div>
                
                </label>
            </section>
        </>

    )
}
