import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { useOffer } from "../context/OfferContext";
import OfferCard from "../components/OfferCard";

function MyOffersPage() {

    const { getOffers, offers } = useOffer()

    useEffect(() => {
        getOffers()
    }, [])
    
    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            { offers.length === 0 && <h1>No Offers</h1>}
            {offers.map((offer) => (
                <OfferCard offer={ offer } key={ offer._id }/>
            ))}
        </div>
    )
}

export default MyOffersPage