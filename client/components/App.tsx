import Dog from './Dog'
import Subtitle from './Subtitle'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitle text="Canines using super-canine abilities for social good." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Rex" breed="Mutt" superpower="Overwhelming wags" />
    </div>
  )
}

export default App
