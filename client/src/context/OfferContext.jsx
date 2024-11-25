import { createContext, useState, useContext } from 'react';
import { 
    createOfferRequest as createProcessRequest, 
    getOffersRequest as getProcessesRequest, 
    getOfferRequest as getProcessRequest, 
    updateOfferRequest as updateProcessRequest, 
    deleteOfferRequest as deleteProcessRequest 
} from '../api/offer'; // No modificar el nombre del archivo.

export const OfferContext = createContext();

export const useOffer = () => {
    const context = useContext(OfferContext);
    if (!context) {
        throw new Error('useOffer must be used within an OfferProvider');
    }
    return context;
};

export function OfferProvider({ children }) {

    const [processes, setProcesses] = useState([]); // Renombrar "offers" a "processes".

    const createProcess = async (process) => { // Renombrar "createOffer" a "createProcess".
        const res = await createProcessRequest(process); 
        console.log(res);
    };

    const getProcesses = async () => { // Renombrar "getOffers" a "getProcesses".
        try {
            const res = await getProcessesRequest(); 
            setProcesses(res.data); 
        } catch (error) {
            console.log(error);
        }
    };

    const getProcess = async (id) => { // Renombrar "getOffer" a "getProcess".
        try {
            const res = await getProcessRequest(id); 
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const updateProcess = async (id, process) => { // Renombrar "updateOffer" a "updateProcess".
        try {
            const res = await updateProcessRequest(id, process); 
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProcess = async (id) => { // Renombrar "deleteOffer" a "deleteProcess".
        try {
            const res = await deleteProcessRequest(id); 
            console.log(res);
            getProcesses(); 
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <OfferContext.Provider value={{ processes, createProcess, getProcesses, getProcess, updateProcess, deleteProcess }}>
            {children}
        </OfferContext.Provider>
    );
}
