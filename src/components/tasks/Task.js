import { React } from "react";

export const TaskCard = ({taskObj}) => (
    <section>
        <input type= "checkbox" id={taskObj.id} value={true}></input>
        <label forhtml={taskObj.id} className="task__name">
        <div>{taskObj.name}
        Complete by: {taskObj.completedByDate}</div>
        </label>
    </section>
)
