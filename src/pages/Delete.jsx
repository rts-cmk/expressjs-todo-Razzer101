export default function Delete(){

    const findIdHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = Object.fromEntries(formData)

        fetch(`http://localhost:3000/todos/${data.id}`, {
        method: "DELETE",
        })

    }

    return(
        <>
            <form onSubmit={findIdHandler}>
                <label htmlFor="id">
                    <span>Indtast todo nr: </span>
                    <input type="number" name="id" id="id" />
                </label>
                <br />
                <button type="submit">Delete</button>
            </form>
        </>
    )
}