import Offer from '../models/offer.model.js';

const createOffer = async (req, res) => {
    try {
        const { title, location, salary, details } = req.body;
        console.log(req.user)
        const newOffer = new Offer({ title, location, salary, details, user: req.user.id });
        const offerSaved = await newOffer.save();
        res.json(offerSaved);
    } catch (error) {
        return res.status(500).json({ message: "Error in creating offer" })
    }
}

const getOffers = async (req, res) => {
    try {
        const offers = await Offer.find({ user: req.user.id }).populate('user')
        res.json(offers);
    } catch (error) {
        return res.status(500).json({ message: "Error in getting offers" })
    }
}

const getOfferById = async (req, res) => {
    try {
        const offer = await Offer.findById(req.params.id).populate('user')
        if (!offer) return res.status(404).json({ message: "Offer not found" })
        res.json(offer)
    } catch (error) {
        return res.status(404).json({ message: "Error in getting offer" })
    }
}

const updateOffer = async (req, res) => {
    // { new: true } is to return the updated offer
    try {
        const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!offer) return res.status(404).json({ message: "Offer not found" })
        res.json(offer)
    } catch (error) {
        return res.status(404).json({ message: "Error in updating offer" })
    }
}

const deleteOffer = async (req, res) => {
    try {
        const offer = await Offer.findByIdAndDelete(req.params.id)
        if (!offer) return res.status(404).json({ message: "Offer not found" })
        res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({ message: "Error in deleting offer" })

    }
}

export { createOffer, getOffers, getOfferById, updateOffer, deleteOffer }