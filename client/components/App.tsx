import Dog from './Dog'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Rex" breed="Mutt" superpower="Overwhelming wags" />
    </div>
  )
}

export default App
