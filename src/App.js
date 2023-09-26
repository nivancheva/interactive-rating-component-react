
import { useState } from 'react';
import './App.css';

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
                <button key={x} className={`btn-rating rating ${selectedClass}`} onClick={() => setSelected(x)}>{x}</button>
              );
            })}
          </div>
          <button className='btn-submit' onClick={() => handleSubmit()}>Submit</button>
        </>
      }

      {rated &&
        <div className='card grid-area thank_you-card'>
          <img src='./images/illustration-thank-you.svg'/>
          <p className='selected-rating'>{`You selected ${selected} out of 5`}</p>
          <div>
            <h2>Thank You!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need support, don't hesitate to get in touch!</p>
          </div>
        </div>
      }
      </div>
    </div>
  );
}

export default App;
