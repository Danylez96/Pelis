import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard"
import "../index.css";

function TaskList() {
  const { pelis } = useContext(TaskContext);
  if (pelis.length === 0) return <h1>No hay tareas aun</h1>;

  return (
    <div className="container list">
      <div className="row">
        
          {pelis.map((peli) => (
            <TaskCard key={peli.id} peli={peli} />
          ))}
        
      </div>
    </div>
  );
}

export default TaskList;
