import React from "react";
import { useUser } from './context/UserContext'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const { loading, isLogedIn, user } = useUser()
    //console.log(isLogedIn, user, loading)
    if (!isLogedIn)
        return <Navigate to={'/login'} replace />

    return(
        <Outlet />
    )
}

export default ProtectedRoute