import React from 'react'

export default function Form({setinputText,todos,settodos,inputText,setstatus}) {
    const inputtexthandler=(e)=>{
        setinputText(e.target.value)
    }
    const submittodohandler=(e)=>{
        e.preventDefault();
        if(inputText.length>0){
            settodos([
            ...todos,
            {text: inputText,completed: false, id: Math.random()*1000}
        ]);
        }
        
        setinputText('')
    }


    // const setstatuss=(e)=>{
    //     setstatus(e.target.value)
    // }
    return (
        <div>
            <form >
                <input value={inputText} onChange={inputtexthandler} type="text" placeholder='your post' className="todo-input"/>
                <button onClick={submittodohandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                {/* <div className="select">
                    <select onChange={setstatuss} name="todo" className="filter-todo">
                        <option value="all">all</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div> */}
            </form>
        </div>
    )
}
