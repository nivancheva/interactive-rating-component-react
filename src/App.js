
import './App.css';

function App() {
  return (
    <div className='wraper grid-area'>
      <div className='card grid-area'>
        <img src='./images/icon-star.svg'/>
        <h1>How did we do?</h1>
        <p>Please let us Know how we did with your supprort request. All feedback is appreciated to help us improve our offering!</p>
        <div className='buttons grid-area'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
