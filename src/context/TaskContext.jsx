import { createContext, useState, useEffect } from "react";
import { pelis as data } from "../data/pelis";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    setPelis(data);
  }, []);

  function createTask(peli) {
    setPelis([
      ...pelis,
      {
        name: peli.name,
        id: pelis.length,
        sinapsis: peli.sinapsis,
        img: peli.img
      },
    ]);
  }

  function deleteTask(peliId) {
    console.log(pelis);
    setPelis(pelis.filter((peli) => peli.id !== peliId));
  }

  return (
    <TaskContext.Provider
      value={{
        pelis,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
