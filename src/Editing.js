import './App.css';
import { Button, Input , Space , Form } from 'antd';

const Editing = ({todos,setTodos,setIsEditing,setCurrentTodo,currentTodo}) => {
    
    function handleEditFormSubmit(e) {
        handleUpdateTodo(currentTodo.id , currentTodo); 
    }

    function handleUpdateTodo(id , updatedTodo) {
        const updatedItem = todos.map((todo) =>{
          return todo.id === id ? updatedTodo : todo;
        });
    
        setIsEditing(false);
        setTodos(updatedItem);
    }

    function handelEditInputChange(e) {
        setCurrentTodo({...currentTodo , text: e.target.value})
    }

    return (
      <Form onFinish={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">Edit todo: </label>
          <Space.Compact
            style={{
              width: '50%',
            }}
          >
            <Input type="text"
            name="editTodo"
            placeholder="Edit Todo" 
            value={currentTodo.text}
            onChange={handelEditInputChange}/>
            <Button type="primary" onClick={handleEditFormSubmit}>Update</Button>
          </Space.Compact>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
      </Form>
    )      
}

export default Editing;