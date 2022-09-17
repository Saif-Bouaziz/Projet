import React from 'react';

const ClientDetails = ({ clientName, clientAddress, clientPhone,
    clientEmail, matricule }) => {
    return (
        <div>
            <section className='tw- '>
                <h2 className='tw- text-xl uppercase'>{clientName}</h2>
                <p>{clientAddress}</p>
                <p>{clientPhone}</p>
                <p>{clientEmail}</p>
                <p>{matricule}</p>
            </section>
        </div>
    );
};

export default ClientDetails;