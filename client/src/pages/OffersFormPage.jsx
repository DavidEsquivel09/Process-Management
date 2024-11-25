import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useOffer } from "../context/OfferContext";
import { useNavigate, useParams } from "react-router-dom";

function OffersFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createProcess, getProcess, updateProcess } = useOffer(); // Cambiar referencias internas.
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProcess() { // Cambiar "loadOffer" a "loadProcess".
            if (id) {
                const process = await getProcess(id); // Cambiar "offer" a "process".
                console.log(process);
                setValue("title", process.title);
                setValue("startDate", process.startDate);
                setValue("endDate", process.endDate);
                setValue("details", process.details);
                setValue("status", process.status);
            }
        }
        loadProcess();
    }, []);

    const onSubmit = handleSubmit((values) => {
        if (!id) {
            createProcess(values); // Cambiar "createOffer" a "createProcess".
            navigate("/myOffers");
        } else {
            updateProcess(id, values); // Cambiar "updateOffer" a "updateProcess".
            navigate("/myOffers");
        }
    });

    return (
        <div className="flex h-[calc(100vh - 100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        type="text"
                        placeholder="Title"
                        {...register("title")}
                        autoFocus
                    />
                    <label htmlFor="startDate" className="block text-white">
                        Fecha de inicio
                    </label>
                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        type="date"
                        id="startDate"
                        {...register("startDate")}
                    />
                    <label htmlFor="endDate" className="block text-white">
                        Fecha de cierre
                    </label>
                    <input
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        type="date"
                        id="endDate"
                        {...register("endDate")}
                    />
                    <textarea
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        rows="3"
                        placeholder="Details"
                        {...register("details")}
                    />
                    <select
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        {...register("status")}
                    >
                        <option value="pendiente">Pendiente</option>
                        <option value="en progreso">En progreso</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OffersFormPage;
