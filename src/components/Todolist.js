import React from 'react'
import Todo from './Todo'

export default function Todolist({todos,filteredtodos,settodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredtodos.map(todo=>(
                        <Todo 
                            key={todo.id} 
                            settodos={settodos} 
                            todo={todo} 
                            todos={todos} 
                            text={todo.text}
                        />
                    ))}
                </ul>
                        
            </div>
        </div>
    )
}
