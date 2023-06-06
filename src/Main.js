import Item from './Item.js';
import Selector from './Selector.js';
import Editing from './Editing.js';
import NotEditing from './NotEditing.js';
import { useState, useEffect } from 'react';
import { Card, Col , Row , Space } from 'antd';

const TodoApp = () => {
    
    const [todos , setTodos] = useState(() => {
        const saveTodos = localStorage.getItem("todos"); 
    
        if(saveTodos){
          return JSON.parse(saveTodos);
        }
        else{
           return [];
        }
      });
      const [todo,setTodo] = useState("");
      const [isEditing , setIsEditing] = useState(false);
      const [currentTodo , setCurrentTodo] = useState({});
      const [selected , setSelected] = useState("all");
    
      useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todos))
        console.log(todos)
      } , [todos])
    
      const doneList = todos.reduce((acc, todo) => {
        if(!todo.isFinish){
          return acc + 1
        }
        else{
          return acc
        }
      }, 0)
      
      const getItem = (todo) => {
        return <Item todos={todos} todo={todo} setTodos={setTodos} setIsEditing={setIsEditing} setCurrentTodo={setCurrentTodo} />
      }

    return (
      <div>
        <h1>Todo App Main</h1>
        <Space direction="vertical" size="middle" >
        {isEditing ? (
          <Editing 
            todos={todos}
            setTodos={setTodos}
            setIsEditing={setIsEditing}
            setCurrentTodo={setCurrentTodo}
            currentTodo={currentTodo}
          />
        ):(
          <NotEditing 
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            setTodo={setTodo}
          />
        )}
        <Row justify="center">
          <Col>
            <Card title="Todo List" style={{ width: 800 }}>
              <ul className="todo-list">
                {todos.map((todo) => 
                  {
                    switch(selected){
                    
                      case "active" :
                        if(!todo.isFinish){
                          return getItem(todo)
                        }
                        break;
                      
                      case "finished" :
                        if(todo.isFinish){
                          return getItem(todo)
                        }
                        break;

                      default :
                        return getItem(todo)
                    }
                  }
                )}
              </ul>
            </Card>
          </Col>
        </Row>
        </Space>
        <div className="spacing">Task Left : {doneList}</div>
        <Selector setSelected={setSelected}/>
      </div>    
    )
        
}

export default TodoApp;