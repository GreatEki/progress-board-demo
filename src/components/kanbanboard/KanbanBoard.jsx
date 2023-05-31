// import { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import styles from "./Kanbanboard.module.css";
import Column from "../column/Column";

const KanbanBoard = () => {
  // const [complete, setComplete] = useState(false);
  // const [incomplete, setIncomplete] = useState(false);

  return (
    <DragDropContext>
      <h1 className={styles.kanban_title}> Progress Board </h1>

      <div className={styles.kanban_content}>
        <Column id="1" title="Pending" task="Project Setup" />
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
