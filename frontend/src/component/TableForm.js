import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import axios from 'axios';


const TableForm = ({ description,
    setDescription, quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal
}) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItems = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
    }

    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        }
    })

    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }


    const deleteRow = (id) =>
        setList(list.filter((row) => row.id !== id))

    const [dossier, setDossier] = useState([])
    useEffect(() => {
        axios.get('/api/dossier')
            .then(res => {
                setDossier(res.data)

            });

    }, [])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='tw- flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' id='description' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className='tw- md:grid grid-cols-3 gap-10'>
                    <div className='tw- flex flex-col'>
                        <label htmlFor="quantity">Reference</label>
                        <select name="reference" onChange={e => setQuantity(e.target.value)}  >
                            {
                                dossier.map(({ Num }) => (
                                    <option value={Num}>{Num}</option>
                                ))
                            }
                        </select>                    </div>



                    <div className='tw- flex flex-col'>
                        <label htmlFor="amount">prix</label>
                        <input type="text" name='amount' id='amount' placeholder='prix' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </div>
                <button type='submit' className='tw- mb-5 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
                    {isEditing ? "Changer élement" : "Ajouter élement"}
                </button>
            </form>

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
                                <td className='amount'>{amount}</td>
                                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className='tw- text-red-500 font-bold text-xl' /></button></td>
                                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='tw- text-green-500 font-bold text-xl' /></button></td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className='tw- flex items-end justify-end text-gray-800 text-4xl font-bold'>
                    TND {total.toLocaleString()}
                </h2>
            </div>
        </>
    );
};

export default TableForm;