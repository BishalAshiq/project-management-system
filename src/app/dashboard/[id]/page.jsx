// "use client"
import React from 'react';
// import { useRouter } from 'next/router';
import { tasks } from '../../../data'; // adjust the path as needed
import Link from 'next/link';

const TaskDetails = ({ params }) => {
    const { id } = params;
  
    // Find the task by ID
    let task;
    for (let key in tasks) {
      task = tasks[key].find(t => t.id === id);
      if (task) break;
    }
  
    // If the task is not found, display a message
    if (!task) {
      return <p>Task not found</p>;
    }
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Task details</h1>
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <p>{task.description}</p>
        {/* Add more task details here */}

        <Link href="/dashboard" className='ring-slate-900'>Back</Link>
      </div>
    );
  };
  
  export async function generateStaticParams() {
    // Generate static params for each task
    const params = [];
    for (let key in tasks) {
      tasks[key].forEach(task => {
        params.push({ id: task.id });
      });
    }
    return params;
  }
  
  export default TaskDetails;
