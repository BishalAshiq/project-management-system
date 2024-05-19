// components/TaskList.js
import Link from 'next/link';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks }) => {
  return (
    <div>
      
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <Link href={`/dashboard/${task.id}`}>
            <div
              className={`bg-white shadow-md p-4 mb-4 ${
                snapshot.isDragging && 'bg-gray-200'
              }`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
            </div>
            </Link>  
          )}
        </Draggable>
      ))}

       
      </div>
  );
};

export default TaskList;
