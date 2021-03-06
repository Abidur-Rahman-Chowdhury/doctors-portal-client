import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundSize: `cover`

        }} className='flex justify-center items-center mt-40'>
            <div className='flex-1 hidden lg:block'>
                <img className='lg:mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis, error aliquid blanditiis ratione architecto, quasi itaque aliquam totam optio labore unde recusandae aspernatur magnam rem vitae autem libero corrupti a omnis eaque excepturi. Quasi atque consequuntur voluptatibus provident non?</p>
                <PrimaryButton >Make Appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;