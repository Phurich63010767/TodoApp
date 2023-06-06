import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { Button, Input , Space , Form } from 'antd';

const NotEditing = ({todos,todo,setTodos,setTodo}) => {
    
    function handleInputChange(e) {
        setTodo(e.target.value); 
    }
    
    function handleFormSubmit(e) {
        
        if(todo){
          setTodos([
            ...todos,
            {
              id: uuidv4() ,
              text: todo.trim(),
              isFinish: false,
            }]
          )
        }
        setTodo("");
    }

    return (
        <Form onFinish={handleFormSubmit}>         
            <label htmlFor="todo">Todo : </label>
            <Space.Compact
              style={{
                width: '50%',
              }}
            >
              <Input type="text" 
              name="todo" 
              placeholder="What needs to be done?" 
              value={todo}
              onChange={handleInputChange}/>
              <Button type="primary" onClick={handleFormSubmit}>Add</Button>
            </Space.Compact>  
        </Form>
    )
        
}

export default NotEditing;