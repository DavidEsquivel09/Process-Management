import React from 'react';
import { useOffer } from '../context/OfferContext'; // No cambiar importaciones ni nombres.
import { useNavigate } from 'react-router-dom';

function OfferCard({ offer: process }) { // Renombrar "offer" a "process" para reflejar el cambio.

    const { deleteProcess } = useOffer(); // Renombrar "deleteOffer" a "deleteProcess".
    const navigate = useNavigate();

    // Función para formatear las fechas
    const formatDate = (date) => date ? new Date(date).toISOString().split('T')[0] : 'N/A';

    return (
        <div className="bg-zinc-800 max-w-md w-full my-4 p-6 rounded-md shadow-md">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white">{process.title}</h1>
                <div className="flex gap-x-2">
                    <button className="bg-purple-500 px-4 py-1 rounded-sm" onClick={() => navigate(`/details/${process._id}`)}>
                        Details
                    </button>
                    <button className="bg-indigo-500 px-4 py-1 rounded-sm" onClick={() => navigate(`/offer/${process._id}`)}>
                        Edit
                    </button>
                    <button className="bg-red-500 px-4 py-1 rounded-sm" onClick={() => deleteProcess(process._id)}>
                        Delete
                    </button>
                </div>
            </header>
            <p className="text-slate-300"><strong>Status:</strong> {process.status}</p>
            <p className="text-slate-300"><strong>Start Date:</strong> {formatDate(process.startDate)}</p>
            <p className="text-slate-300"><strong>End Date:</strong> {formatDate(process.endDate)}</p>
            <p className="text-slate-300"><strong>Details:</strong> {process.details || 'No details provided'}</p>
        </div>
    );
}

export default OfferCard;
