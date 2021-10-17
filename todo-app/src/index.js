import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let ID = 0;
let number = 0
const App = () => {
  const[value,SetValue] = useState((""))
  const [task,SetTask] = useState([]);
  const SubmitHandle = (e) => {
    e.preventDefault();
    number++
    SetTask((old) => {
      SetValue("")
      return (
        [...old,{task:value,id:ID++}]
      )
    }
    )}
    const deleteItems = (ItemDelete) => {
      number--
      SetTask(old => old.filter(items => items.id !== ItemDelete))
    }
  return(
    <div className="container">
    <div className="title">
    <h1>TODO APP</h1>
    <h4 className="tasks">You have {number} tasks to accomplish..</h4>
    </div>
    <form onSubmit={(e) => SubmitHandle(e)} className="form">
      <div className="input">
      <input type="text" placeholder="Add Item" value={value} onChange={(e) => SetValue(e.currentTarget.value)}/>
      <button type="submit" className="btn">ADD ITEM</button>
    </div> 
    </form>
    <ul className="lists">
    {task.map((tasks) => {
      const {id,task} = tasks;
      return(
       <div className="todo">
       <li key={id} className="list"><h2>{task}</h2></li>
       <p className="delete" onClick={() => deleteItems(id)}><i class="fas fa-trash"></i></p>
       </div>
      )
    })}
    </ul>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

