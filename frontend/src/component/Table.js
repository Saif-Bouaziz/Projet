import React from 'react';

const Table = ({ list, total, tva,
    tax,
    timbre,
    totalnet }) => {
    return (
        <div>
            <table width="100 %" className='tw- mb-10'>
                <thead>
                    <tr className='tw- bg-gray-100 p-1'>
                        <td className='tw- font-bold'>Description</td>
                        <td className='tw- font-bold'>Réference</td>
                        <td className='tw- font-bold'>Prix</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-2xl font-bold'>
                    Total : TND {total.toLocaleString()}
                </h2>
            </div><div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-2xl font-bold'>
                    TVA : TND {tva.toLocaleString()}
                </h2>
            </div><div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-2xl font-bold'>
                    TAX : TND {tax.toLocaleString()}
                </h2>
            </div><div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-2xl font-bold'>
                    Timbre : TND {timbre.toLocaleString()}
                </h2>
            </div>
            <div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-2xl font-bold'>
                    Total Net : TND {totalnet.toLocaleString()}
                </h2>
            </div>
        </div>
    );
};

export default Table;