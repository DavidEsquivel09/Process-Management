import { offersInstance as axios } from './axios'

export const getOffersRequest = () => axios.get('/offers')
export const getOfferRequest = (id) => axios.get(`/offers/${id}`)
export const createOfferRequest = (offer) => axios.post('/offers', offer)
export const updateOfferRequest = (id, offer) => axios.put(`/offers/${id}`, offer)
export const deleteOfferRequest = (id) => axios.delete(`/offers/${id}`)