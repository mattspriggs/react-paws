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
      <Dog
        name="Desdemona"
        breed="Bulldog"
        superpower="Heat vision"
        image="/images/bulldog.png"
      />
      <Dog
        name="Rex"
        breed="Bull Terrier"
        superpower="Overwhelming wags"
        image="/images/bull-terrier.png"
      />
      <Dog
        name="Rosey"
        breed="Dachshund"
        superpower="Wiggle wonder"
        image="/images/dachshund.png"
      />
      <Dog
        name="Gypsy"
        breed="Scottie"
        superpower="Happy spin"
        image="/images/scottie.png"
      />
      <Dog
        name="Reginald"
        breed="Hound"
        superpower="Healing howl"
        image="/images/hound.png"
      />
      <Dog
        name="Regina"
        breed="Greyhound"
        superpower="Lightning speed"
        image="/images/greyhound.png"
      />
    </div>
  )
}

export default App
