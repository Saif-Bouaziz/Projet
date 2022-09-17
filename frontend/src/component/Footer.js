import React from 'react';

const Footer = ({ name, address, email, website, phone,
    bankAccount,
    bankName }) => {
    return (
        <div className='footer-facture tw- border-t-2 border-gray-300 pt-5'>
            <footer>
                <ul className='tw- flex flex-wrap items-center justify-center'>
                    <li><span className='tw- font-bold'>email:</span> {email}</li>
                    <li><span className='tw- font-bold'>numéro de tel:</span> {phone}</li>
                    <li><span className='tw- font-bold'>Addresse:</span> {address}</li>

                </ul>
            </footer>
        </div>
    );
};

export default Footer;