import React from 'react';

const MainDetails = ({ name, address, bankAccount,
    bankName }) => {
    return (
        <div>
            <section className='tw- flex flex-col items-end justify-end'>

                <h2 className='tw- font-bold text-xl uppercase md:text-4'>{name}</h2>
                <p>{address}</p>
                <p>{bankAccount}</p>
                <p>{bankName}</p>
            </section>
        </div>
    );
};

export default MainDetails;