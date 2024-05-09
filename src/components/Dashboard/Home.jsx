// components/Home.js
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import { tasks } from '../../data';

const Home = () => {
  const [taskData, setTaskData] = useState(tasks);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    // If the drag is cancelled or dropped outside a droppable area, return early
    if (!destination) return;
  
    const updatedTaskData = { ...taskData };
  
    // If the task is dropped in the same list
    if (destination.droppableId === source.droppableId) {
      const list = updatedTaskData[source.droppableId];
      const [removed] = list.splice(source.index, 1);
      list.splice(destination.index, 0, removed);
    } else {
      // If the task is dropped in a different list
      const sourceList = [...updatedTaskData[source.droppableId]];
      const destList = [...updatedTaskData[destination.droppableId]];
      const [removed] = sourceList.splice(source.index, 1);
      destList.splice(destination.index, 0, removed);
      updatedTaskData[source.droppableId] = sourceList;
      updatedTaskData[destination.droppableId] = destList;
    }
  
    setTaskData(updatedTaskData);
  };
  

  return (
    <DragDropContext onDragEnd={onDragEnd} disableWarnings={true}>
      <div className="flex justify-between">
        {Object.entries(taskData).map(([status, taskList]) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className="p-4 flex-1"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-lg font-bold mb-4">{status}</h2>
                <TaskList tasks={taskList} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Home;
