const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].important}</li>
        <li>{notes[1].important}</li>
        <li>{notes[2].important}</li>
      </ul>
    </div>
  )
}

export default App