import { FaTimesCircle  } from "react-icons/fa";
const Todo = ({todo, id, complete, handleDelete, handleToggle}) => {
    return ( <section className="todo" >
        <article className={complete? 'todo-item complete' : "todo-item"} >
            <input
              type="checkbox"
              checked={complete}
              onClick={() => handleToggle(id)}
              
              
              />
            {todo}
        <FaTimesCircle style={{fontSize: '1.8em'}}
        onClick={() => handleDelete(id)} 
        className="btn btn-delete" />
        </article>
    </section> );
}
 
export default Todo;