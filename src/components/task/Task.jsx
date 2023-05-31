import styles from  './Task.module.css';
import propTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd'
import { Avatar } from 'antd'

function bgColorChange(props) {
    return props.isDragging ? 'lighgreen' : props.isDraggable ? props.isBacklog ? '#F2D7D5' : '#DCDCDC' : props.isBacklog  ? '#F2D7D5' : '#ffada' 

}


const Task = ({task, index}) => {

  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <div className='task'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div className={styles.task_id}>
                        <span><small>#{task.id}</small></span>
                    </div>

                    <div className={styles.task_title}>
                        <h5 className={styles.title_content}>{task.title}</h5>
                    </div>

                    <div className={styles.icons}>
                      <div>
                        <Avatar  src={"https://joesch.moe/api/v1/random?key=" + task.id} />
                      </div>

                    </div>
                    {provided.placeholder}
                </div>
            )}
    </Draggable>
  )
}

Task.propTypes = {
    task: propTypes.any,
    index: propTypes.number
}
export default Task