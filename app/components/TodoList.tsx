import React from "react";
import { ITask } from "@/types/tasks";
import Task from "./Tasks";


const TodoList = ({ tasks }) => {
  console.log(tasks)   
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {tasks.map((task) => 
      <Task key={task.id} task={task} />
      )};
      </tbody>
    </table>
  </div>
  );
};

export default TodoList;