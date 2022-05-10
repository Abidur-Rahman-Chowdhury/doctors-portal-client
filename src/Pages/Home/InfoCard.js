import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
  return (
    <div  className={`${bgClass} card lg:card-side bg-base-100 shadow-xl`}>
    <figure className='pl-5 pt-4'><img src={img} alt="Album"/></figure>
    <div  className="card-body text-white">
              <h2 className="card-title">{ cardTitle}</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      
    </div>
  </div>
  );
};

export default InfoCard;
