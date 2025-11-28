import { FaRegTrashAlt } from "react-icons/fa";

export default function DELETE({ id, update, setUpdate }){

    const deleteHandler = () => {

        fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        }).then(() => {update ? setUpdate(false) : setUpdate(true)})

    }

    return(
        <>
            <button className="todo-item__delete-btn" onClick={() => deleteHandler()}><FaRegTrashAlt/></button>
        </>
    )
}