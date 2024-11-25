import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOffer } from '.././context/OfferContext'; // No modificar la importación.

function DetailsPage() {

    const { getProcess } = useOffer(); // Renombrar la función en el contexto al propósito actual.
    const { id } = useParams();
    const [process, setProcess] = useState(null); // Cambiar el estado de "offer" a "process".

    useEffect(() => {
        async function loadProcess() {
            if (id) {
                const processDetailed = await getProcess(id); // Llamar a la función renombrada.
                console.log(id);
                setProcess(processDetailed); // Actualizar con el nuevo nombre.
                console.log(processDetailed);
            }
        }
        loadProcess();
    }, []);

    return process ? (
        <div className='flex h-[calc(100vh - 100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 my-20 rounded-md'>
                <h1>Title</h1>
                <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{process.title}</p>
                <h1>Start Date</h1>
                <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{new Date(process.startDate).toLocaleDateString()}</p>
                <h1>End Date</h1>
                <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{new Date(process.endDate).toLocaleDateString()}</p>
                <h1>Status</h1>
                <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{process.status}</p>
                <h1>Details</h1>
                <p className="bg-purple-700 max-w-md p-2 my-2 rounded-md">{process.details}</p>
            </div>
        </div>
    ) : (
        <p>Error: Process not found.</p>
    );
}

export default DetailsPage;