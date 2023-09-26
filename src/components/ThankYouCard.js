export default function ThankYouCard({selected}) {
    return (
        <>
        <div className='card grid-area thank_you-card'>
          <img src='./images/illustration-thank-you.svg'/>
          <p className='selected-rating'>{`You selected ${selected} out of 5`}</p>
          <div>
            <h2>Thank You!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need support, don't hesitate to get in touch!</p>
          </div>
        </div>
        </>
    );
};
