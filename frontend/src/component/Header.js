import React from 'react';
import img from './silhouette-monochrome-de-balance-d-isolement-sur-le-blanc-110644049.jpg'


const Header = () => {
    const handlePrint = () => {
        window.print()
    }
    return (
        <div>
            <header className='tw- flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
                <div>
                    <h1 className='tw- font-bold uppercase tracking-wide text-4xl mb-3'><img src={img} className="image" />
                    </h1>
                </div>
            </header>
        </div>
    );
};

export default Header;