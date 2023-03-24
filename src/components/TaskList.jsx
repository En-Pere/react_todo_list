function TaskList({ toDoList }) {
  return (
    <div>
      <ul>
        {toDoList.map((element, i) => {
          console.log(i);
          return (
            <li key={i} onChange={(e) => console.log(e.target.value)}>
              {element.taskName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
