import React from 'react';
import EventCard from './EventCard';

function EventGrid() {
  return (
    <>
      <div className="dark:bg-darkmodebackground1 mx-auto  h-full">
        <div className="px-10">
          <p className="text-center text-4xl font-bold text-gray-700 dark:text-white">
            My <span className="text-blue-core">Projects</span>
          </p>
        </div>
        <div className="flex flex-wrap pt-16">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
}

export default EventGrid;
