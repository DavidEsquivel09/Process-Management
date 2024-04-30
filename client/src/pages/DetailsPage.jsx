import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOffer } from '.././context/OfferContext'

function DetailsPage() {

    const { getOffer } = useOffer()
    const { id } = useParams()
    const [ offer, setOffer ] = useState(null)

    useEffect(() => {
        async function loadOffer() {
            if (id) {
                const offerDetailed = await getOffer(id)
                console.log(id)
                setOffer(offerDetailed)
                console.log(offerDetailed)
            }
        }
        loadOffer()
    }, [])

    return offer ? (
            <div className='flex h-[calc(100vh - 100px)] items-center justify-center'>
                <div className='bg-zinc-800 max-w-md p-10 my-20 rounded-md'>
                    <h1>Title</h1>
                    <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{offer.title}</p>
                    <h1>Location</h1>
                    <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{offer.location}</p>
                    <h1>Salary</h1>
                    <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">USD ${offer.salary}</p>
                    <h1>Details</h1>
                    <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{offer.details}</p>
                </div>
            </div>
        ) : (
            <p>Error: Offer not found.</p>
    )
}

export default DetailsPage