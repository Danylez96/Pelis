import { Button, Card, CardGroup } from "react-bootstrap";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../index.css";

function TaskCard({ peli }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 ">
            <Card   style={{margin:5}}   >
              <Card.Body>
                <Card.Title className="text-center">{peli.name}</Card.Title>
                <Card.Text>{peli.sinapsis}</Card.Text>
                <Card.Img
                  variant="left"
                  src={peli.img}
                  width="185px"
                  height="276px"
                />
              </Card.Body>
              <Button variant="danger" onClick={() => deleteTask(peli.id)}>
                Eliminar
              </Button>
            </Card>
            </div>
  );
}

export default TaskCard;
