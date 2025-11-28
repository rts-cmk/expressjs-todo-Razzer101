export default function POST({  update, setUpdate  }){

    const POSTHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = Object.fromEntries(formData)

        fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }).then(() => {update ? setUpdate(false) : setUpdate(true)})
    }
    
    return(
        <section className="todo-post">
            <h2 className="todo-post__title">Post din todos</h2>
            <form className="todo-form" onSubmit={POSTHandler}>
                <label htmlFor="title">
                    <span>Skriv todo titel: </span>
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="done">
                    <span>færdiggjort? </span>
                    <input type="checkbox" name="done" id="done" />
                </label>
                <label htmlFor="description">
                    <span>Info: </span>
                    <textarea name="description" id="description"></textarea>
                </label>
                <button type="submit">Post</button>
            </form>
        </section>        
    )
}