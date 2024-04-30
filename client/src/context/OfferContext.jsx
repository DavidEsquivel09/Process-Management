import { createContext, useState, useContext } from 'react'
import { createOfferRequest, getOffersRequest, getOfferRequest, updateOfferRequest, deleteOfferRequest } from '../api/offer'

export const OfferContext = createContext()

export const useOffer = () => {
    const context = useContext(OfferContext)
    if (!context) {
        throw new Error('useOffer must be used within a OfferProvider')
    }
    return context
}

export function OfferProvider({ children }) {

    const [ offers, setOffers ] = useState([])

    const createOffer = async (offer) => {
        const res = await createOfferRequest(offer)
        console.log(res)
    }

    const getOffers = async () => {
        try {
            const res = await getOffersRequest()
            setOffers(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getOffer = async (id) => {
        try {
            const res = await getOfferRequest(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateOffer = async (id, offer) => {
        try {
            const res = await updateOfferRequest(id, offer)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const deleteOffer = async (id) => {
        try {
            const res = await deleteOfferRequest(id)
            console.log(res)
            getOffers()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <OfferContext.Provider value={{ offers, createOffer, getOffers, getOffer, updateOffer, deleteOffer }}>
            {children}
        </OfferContext.Provider>
    )
}