import React from 'react'
import Tour from './Tour';
import { useSelector } from 'react-redux';

export default function Tours() {

    const { data } = useSelector((state) => state.tour);
    console.log(data);
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  )
}
