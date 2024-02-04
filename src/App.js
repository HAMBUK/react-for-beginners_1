
import {useState ,useEffect} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onDelete = (index) => {
    setToDos((currentArray) => {
      const updatedToDos = currentArray.filter((_, i) => i !== index);
      return updatedToDos;
    });
  }
  const onChange = (event) => {setToDo(event.target.value)}
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo ])
    setToDo("");
    
  };

  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
      <button>Add</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => <li key={index}>{item} <button onClick={()=>onDelete(index)}>❌</button></li>)}
      </ul>
    </div>
  );
}

export default App;
