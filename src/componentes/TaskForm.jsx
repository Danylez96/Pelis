import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [name, setName] = useState("");
  const [sinapsis, setSinapsis] = useState("");
  const { createTask } = useContext(TaskContext);
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      name,
      sinapsis,
      img,
    });
    setName("");
    setSinapsis("");
    setImg("")
  };

  const handleImgChange = (e) => {
    console.log(e.target);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result)
    };
  };

  return (
    <div className="container bg-dark">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            placeholder="Titulo de la película"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Sinapsis</Form.Label>
          <Form.Control
            type="textarea"
            rows="3"
            placeholder="Escriba la Sinapsis"
            onChange={(e) => setSinapsis(e.target.value)}
            value={sinapsis}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" onChange={(e) => handleImgChange(e)} />
        </Form.Group>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default TaskForm;
