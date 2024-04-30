import React from 'react'
import { useOffer } from '../context/OfferContext'
import { useNavigate } from 'react-router-dom'

function OfferCard({ offer }) {

    const { deleteOffer } = useOffer()
    const navigate = useNavigate()

    return (
        <div className='bg-zinc-800 max-w-md w-full my-4 p-10 rounded-md'>
            <header className='flex justify-between'>
                <h1 className='text-2xl font-bold'>{ offer.title }</h1>
                <div className='flex gap-x-2 items-center'>
                    <button className='bg-purple-500 px-4 py-1 rounded-sm' onClick={ () => navigate(`/details/${offer._id}`) }>
                        Details
                    </button>
                    <button className='bg-indigo-500 px-4 py-1 rounded-sm' onClick={ () => navigate(`/offer/${offer._id}`) }>
                        Edit
                    </button>
                    <button className='bg-zinc-500 px-4 py-1 rounded-sm' onClick={ () => deleteOffer(offer._id) }>
                        Delete
                    </button>
                </div>
            </header>
            <p className='text-slate-300'>Location: { offer.location }</p>
        </div>
    )
}

export default OfferCard