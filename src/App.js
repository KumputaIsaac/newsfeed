import React,{useState,useEffect} from 'react'
import Form from './components/Form'
import Todolist from './components/Todolist'
import './App.css'

export default function App() {
  const [inputText, setinputText] = useState('');
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState('all');
  const [filteredtodos, setfilteredtodos] = useState([]);
  const [show, setshow] = useState(false);

useEffect(()=>{
  const getlocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      settodos(todoLocal)
    }
  }

  getlocalTodos()
},[])

  useEffect(()=>{

    const filterhandler = () =>{
      switch(status){
        case 'completed':
          setfilteredtodos(todos.filter((todo) => todo.completed===true))
          break;
        case 'uncompleted':
          setfilteredtodos(todos.filter((todo) => todo.completed===false))
          break;
        default:
          setfilteredtodos(todos)
          break;
  
      }
    }

    const savelocaltodo=()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
     

    filterhandler();
    savelocaltodo();
  },[todos,status])

   const toggleDiv = () => {
    setshow(!show)
}

  
 
  return (
    <div className='App'>
      <div className='button'>
        <button onClick={toggleDiv } type="button">Create Post</button>
      </div>
      
      {show && (
        <div>
        <header>
            <h2>News Field</h2>
        </header>
        <div className='center'>
              <label>Type of waste:</label>
              <select>
                <option value="HouseHold">HouseHold</option>
                <option value="Metal">Metal</option>
                <option value="Electronics">Audi</option>
              </select>
        </div>
        <div className='center'>
          <label>Specify item:</label>
          <input type="item" />
        </div>
        <Form setstatus={setstatus} inputText={inputText} settodos={settodos} todos={todos} setinputText={setinputText}/>
        <Todolist filteredtodos={filteredtodos} todos={todos} settodos={settodos} />
      </div>
      ) }
      
      
    </div>
  )
}
 