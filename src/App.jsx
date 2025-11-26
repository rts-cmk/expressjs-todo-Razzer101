function App() {

  return (
    <>
      <form>
        <label htmlFor="title">
          <span>Skriv todo titel: </span>
          <input type="text" name="title" id="title" />
        </label>
        <br />
        <label htmlFor="done">
          <span>færdiggjort? </span>
          <input type="checkbox" name="done" id="done" />
        </label>
        <br />
        <label htmlFor="description">
          <span>Info: </span>
          <br />
          <textarea name="description" id="description"></textarea>
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
    </>
  )
}

export default App
