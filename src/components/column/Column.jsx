import { Droppable } from "react-beautiful-dnd";
import propTypes from "prop-types";
import styles from "./Column.module.css";

const Column = ({ title, id }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.column_title}>{title}</h3>

      <Droppable droppableId={id}>
        {(provided) => {
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // className={{"dragging-over": snapshot.isDraggingOver}}
          >
            {/* provide your tasks */}
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
