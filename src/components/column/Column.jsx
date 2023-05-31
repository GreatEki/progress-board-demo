import { Droppable } from "react-beautiful-dnd";
import propTypes from "prop-types";
import Task from '../task/Task';
import styles from "./Column.module.css";

const Column = ({ title, id, tasks, bgColor }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.column_title}>{title}</h3>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
          className={styles.taskList}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isdraggingover={snapshot.isDraggingOver.toString()}
          >
            {/* provide your tasks */}
            {
              tasks && tasks.map((task, index) => (
                <Task key={index} task={task} index={index} />

              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

Column.propTypes = {
  title: propTypes.string,
  tasks: propTypes.any,
  id: propTypes.string,
  bgColor: propTypes.string
};
export default Column;
