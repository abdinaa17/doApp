import Todo from "./Todo";

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return ( <div className="todolist" >
        {todos.map((todo) => {

            const {id, title, complete} = todo
           return < Todo key={id} id={id} todo={title} complete={complete} handleDelete={handleDelete} handleToggle={handleToggle} />
})}

    </div> );
}
 
export default TodoList;