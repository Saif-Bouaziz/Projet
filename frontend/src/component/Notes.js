import React from 'react';

const Notes = ({ notes }) => {
    return (
        <div>
            <section className='tw- mt-10 mb-5'>
                <p>{notes}</p>
            </section>
        </div>
    );
};

export default Notes;