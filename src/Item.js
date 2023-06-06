import './App.css';
import { Button, Checkbox , Col, Row} from 'antd';

const Item = ({todos,todo,setTodos,setIsEditing,setCurrentTodo}) => {

    function handleTaskCheck() {
        if(todo.isFinish){
            setFinish(todo.id,false);
        }
        else{
            setFinish(todo.id,true);
        }
    }

    const setFinish = id => {
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, isFinish: !todo.isFinish };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
           return todo.id !== id
        }) 
        setTodos(removeItem);
    }
    
    function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({...todo});
    }

    return (
        <div className={todo.isFinish ? "finished" : "unfinished"}>
            <Row>
                <Col span={6} offset={0}>
                    <Checkbox className="checkbox" checked={todo.isFinish} onChange={handleTaskCheck}/>
                </Col>           
                <Col span={10} offset={0}>
                    <div className="text">{todo.text}</div>
                </Col>
                <Col span={2} offset={2}>
                    <Button className="editButton" size="small" onClick={() => handleEditClick(todo)}>Edit</Button>
                </Col>
                <Col span={1}>
                    <Button className="deleteButton" size="small" onClick={() => handleDeleteClick(todo.id)}>X</Button>
                </Col>
             </Row>       
        </div>
    )
        
}

export default Item;