import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useOffer } from '../context/OfferContext'
import { useNavigate, useParams } from "react-router-dom";

function OffersFormPage() {
    
    const { register, handleSubmit, setValue } = useForm()
    const { createOffer, getOffer, updateOffer } = useOffer()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadOffer() {
            if (id) {
                const offer = await getOffer(id)
                console.log(offer)
                setValue('title', offer.title)
                setValue('location', offer.location)
                setValue('salary', offer.salary)
                setValue('details', offer.details)
            }
        }
        loadOffer()
    }, [])

    const onSubmit = handleSubmit((values) => {
        if (!id) {
            createOffer(values)
            navigate('/myOffers')
        } else {
            updateOffer(id, values)
            navigate('/myOffers')
        }
    })

    return(
        <div className='flex h-[calc(100vh - 100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md" >
                <form onSubmit={ onSubmit }>
                    <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="text" placeholder="Title" 
                    {...register('title')}
                    autoFocus />
                    <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="text" placeholder="Location"
                    {...register('location')} />
                    <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="text" placeholder="Salary" 
                    {...register('salary', { valueAsNumber: true })} />
                    <textarea className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" rows="3" placeholder="Details"
                    {...register('details')} />
                    <button type="submit" className='w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2'> Save </button>
                </form>
            </div>
        </div>
    )
}

export default OffersFormPage