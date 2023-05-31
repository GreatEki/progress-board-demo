import styles from "./Task.module.css";
import propTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { Avatar } from "antd";
import classNames from "classnames";

const Task = ({ task, index }) => {
  const taskClass = classNames(
    styles.task,
    { [styles.pending]: !task.completed },
    { [styles.completed]: task.completed }
  );

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={taskClass}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isdragging={snapshot.isDragging.toString()}
        >
          <div className={styles.task_id}>
            <span>
              <small>#{task.id}</small>
            </span>
          </div>

          <div className={styles.task_title_box}>
            <h5 className={styles.title_content}>{task.title}</h5>
          </div>

          <div className={styles.icons}>
            <div>
              <Avatar src={"https://joesch.moe/api/v1/random?key=" + task.id} />
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: propTypes.any,
  index: propTypes.number,
};
export default Task;
