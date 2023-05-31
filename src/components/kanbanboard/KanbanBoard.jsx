import { useState, useEffect, Suspense } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Kanbanboard.module.css";
import Column from "../column/Column";

const KanbanBoard = () => {
  const [completed, setCompleted] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(json => {
        setCompleted(json.filter(task => task.completed))
        setIncomplete(json.filter(task => !task.completed))
      })
  }, [])



  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId == destination.droppableId) return;

    //REMOVE FROM SOURCE ARRAY

    if (source.droppableId == 2) {
      setCompleted(removeItemById(draggableId, completed));
    } else {
      setIncomplete(removeItemById(draggableId, incomplete));
    }

    // GET ITEM
    const task = findItemById(draggableId, [...incomplete, ...completed]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      setCompleted([{ ...task, completed: !task.completed }, ...completed]);
    } else {
      setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
    }
  };

  function findItemById(id, array) {
    return array.find((item) => item.id == id)
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id)

  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h1 className={styles.kanban_title}> Progress Board </h1>

      <Suspense fallback={<div> Loading... </div> }>
      <div className={styles.kanban_content}>
        <Column id="1" title="Pending" tasks={incomplete} bgColor='purple' />
        <Column id="2" title="Completed" tasks={completed} bgColor='' />
        <Column id="3" title="Backlog" tasks={[]} />
      </div>
      </Suspense>

    </DragDropContext>
  );
};

export default KanbanBoard;
