import {useState} from 'react';

const Form = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please add Todo')
            return 
        }
        addTodo({title})

        setTitle('')
    }

    return (
        <div className="Form-component" >
        

            <form onSubmit={handleSubmit} className="Form">
               <div className="Form-control">
                   <input 
                   type="text" 
                   name="title" 
                   autoComplete="off" 
                   placeholder="Your todo..."
                   value={title}
                   onChange ={ (e) => {
                    setTitle(e.target.value)
                   }}
                    />
                    <input type="submit" value="Add todo" className="btn" />
               </div>
            </form>
        </div>
    )
}

export default Form

