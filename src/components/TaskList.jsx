function TaskList({ toDoList }) {
  return (
    <div>
      <ul>
        {toDoList.map((element, i) => {
          console.log(i);
          return (
            <div key={i}>
              <li>{element.taskName}</li>
              <button>Editar</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
