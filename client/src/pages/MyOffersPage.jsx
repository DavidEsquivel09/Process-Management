import React, { useEffect } from "react";
import { useOffer } from "../context/OfferContext";
import OfferCard from "../components/OfferCard";

function MyOffersPage() {

    const { getProcesses, processes } = useOffer(); // Cambiar referencias internas.

    useEffect(() => {
        getProcesses();
    }, []);
    
    return (
        <div className="container mx-auto px-4 py-6">
            {processes.length === 0 ? (
                <h1 className="text-center text-2xl text-white">No Processes Found</h1>
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {processes.map((process) => (
                        <OfferCard offer={process} key={process._id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyOffersPage;
