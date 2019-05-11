import React, {
  useEffect,
  useState
} from "react";


export default function Todos() {

  const [todos, setTodos] = useState([]);
  const [action, setAction] = useState("Descending");

  useEffect(() => {
    fetch("http://localhost:3000/api/todos").then(response => {
      return response.json();
    }).then(data => {
      data.sort((a,b) => {return b.id-a.id});     
      setTodos(data);
    });
  }, []);

  function changeOrder(){
    let data = todos;
    if(action === "Descending"){
      data.sort((a,b) => {return a.id-b.id});     
      setTodos(data);  
      setAction("Ascending");
   }else {
      data.sort((a,b) => {return b.id-a.id});     
      setTodos(data);  
      setAction("Descending");
    }   
  };

  return <>
    <div className="info">
      <h1 className="total">Total of todos {todos.length}</h1>
      <h1 className="completed">Total of todos completed {todos.filter((x) => {return x.completed==true}).length}</h1>
    </div>
    <div className="actions">
      <button onClick={changeOrder} class="btn">{action}</button>
    </div>
    <div className="todos">
      {todos.map((todo, i) => {
        return <div key={i} className="todo-item"><p className="todo">{todo.title}</p></div>;
      })}
    </div>
  </>;
}