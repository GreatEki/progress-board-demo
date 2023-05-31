import { Droppable } from "react-beautiful-dnd";
import propTypes from "prop-types";
import Task from '../task/Task';
import styles from "./Column.module.css";

const Column = ({ title, id }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.column_title}>{title}</h3>

      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDragging={snapshot.isDraggingOver}
          >
            {/* provide your tasks */}
            <Task task={{id: 1, title: 'Make a progress board application'}} index='1' />
            {provided.placeholder}
          </div>;
        }}
      </Droppable>
    </div>
  );
};

Column.propTypes = {
  title: propTypes.string,
  task: propTypes.any,
  id: propTypes.string,
};
export default Column;
