export default function PUT({ data, update, setUpdate }){

    const PUTHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const PUTData = Object.fromEntries(formData)

        fetch(`http://localhost:3000/todos/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(PUTData)
        }).then(() => {update ? setUpdate(false) : setUpdate(true)})
    }

    if(data !== null){
        return(  
            <section className="todo-put-box">
                <div className="todo-put">
                    <h2 className="todo-put__title">Ændre din todo</h2>
                    <form className="put-form" onSubmit={PUTHandler}>
                        <label htmlFor="title">
                            <span>Skriv todo titel: </span>
                            <input type="text" name="title" id="title" defaultValue={data.title}/>
                        </label>
                        <label htmlFor="done">
                            <span>færdiggjort? </span>
                            <input type="checkbox" name="done" id="done" />
                        </label>
                        <label htmlFor="description">
                            <span>Info: </span>
                            <textarea name="description" id="description" defaultValue={data.description}></textarea>
                        </label>
                        <button type="submit">Put</button>
                    </form>
                </div>
            </section>      
        )
    }

}