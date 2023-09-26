
import { useState } from 'react';
import './App.css';
import ThankYouCard from './components/ThankYouCard';
import RatingCard from './components/RatingCard';

function App() {
  const [selected, setSelected] = useState(0);
  const [rated, setRated] = useState(false);

  function handleSubmit() {
    if (selected != 0) {
      setRated(true);
    }
  }

  return (
    <div className='wraper grid-area'>
      <div className='card grid-area'>
      {rated
        ?
        <ThankYouCard selected={selected}/>
        :
        <RatingCard selected={selected} setSelected={setSelected} handleSubmit={handleSubmit}/>
      }
      </div>
    </div>
  );
}

export default App;
