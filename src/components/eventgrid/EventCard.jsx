import React from 'react';
import './EventCard.css';
// import EventImg from '../../assets/images/EventImages/EventImg.jpeg';

function EventCard() {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 overflow-hidden rounded-lg shadow-lg">
      <div class="card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/event-471a7.appspot.com/o/MumbaiMirage.gif?alt=media&token=b3644403-b384-49c9-9545-e4e9129f5966"
          alt=""
          className="block h-auto w-full"
        />
        <div class="card-content flex items-center justify-between leading-tight p-2 md:p-4">
          <h2>Card Heading</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
          <a href="./" class="event-card-button">
            Find out more
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
