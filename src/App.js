
import { useState } from 'react';
import './App.css';
import ThankYouCard from './components/ThankYouCard';

function App() {
  const [selected, setSelected] = useState(0);
  const [ratings] = useState([1, 2, 3, 4, 5]);
  const [rated, setRated] = useState(false);

  function handleSubmit() {
    if (selected != 0) {
      setRated(true);
    }
  }

  return (
    <div className='wraper grid-area'>
      <div className='card grid-area'>

      {!rated && 
        <>
          <div className='btn-rating'>
            <img src='./images/icon-star.svg'/>
          </div>
          <div>
            <h1>How did we do?</h1>
            <p>Please let us Know how we did with your supprort request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div className='buttons grid-area'>
            {ratings.map(x => {
              const selectedClass = x == selected ? "selected" : "";
              return (
                <button key={x}
                  className={`btn-rating rating ${selectedClass}`}
                  onClick={() => setSelected(x)}>{x}</button>
              );
            })}
          </div>
          <button className='btn-submit' onClick={() => handleSubmit()}>Submit</button>
        </>
      }

      {rated &&
        <ThankYouCard selected={selected}/>
      }
      </div>
    </div>
  );
}

export default App;
