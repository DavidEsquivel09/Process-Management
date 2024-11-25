import { offersInstance as axios } from './axios'

export const getOffersRequest = () => axios.get('/processes')
export const getOfferRequest = (id) => axios.get(`/processes/${id}`)
export const createOfferRequest = (offer) => axios.post('/processes', offer)
export const updateOfferRequest = (id, offer) => axios.put(`/processes/${id}`, offer)
export const deleteOfferRequest = (id) => axios.delete(`/processes/${id}`)