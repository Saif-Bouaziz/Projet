import React from 'react';

const Dates = ({ invoiceNumber,
    invoiceDate,
    dueDate }) => {
    return (
        <div>
            <article className='tw- my-5 flex items-end justify-end'>
                <ul>
                    <li className='tw- p-1'><span className='tw- font-bold'>Numéro de facture:</span>{invoiceNumber}</li>
                    <li className='tw- p-1 bd-gray-100'><span className='tw- font-bold'>Date de facture: </span>{invoiceDate}</li>
                </ul>
            </article>

        </div>
    );
};

export default Dates;