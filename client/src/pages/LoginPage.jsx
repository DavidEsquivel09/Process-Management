import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useUser } from '../context/UserContext'
import { useNavigate, Link } from 'react-router-dom'

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { singin, isLogedIn, errors: loginErrors }  = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLogedIn) {
            navigate('/myOffers')
        }
    }, [isLogedIn])

    const onSubmit = handleSubmit((values) => {
        singin(values)
    })

    return (
        <div className='flex h-[calc(100vh - 100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {Array.isArray(loginErrors) && loginErrors.map((error, index) => (
                        <div key={index} className='text-red-500 my-2'>{error}</div>
                ))}
                <h1 className='text-2xl font-bold'>Login</h1>
                <form onSubmit={ onSubmit }>
                    <input type="email" placeholder='Email' name="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                        {
                            errors.email && (<span className='text-red-500'>Email is required</span>)
                        }
                    <input type="password" placeholder='Password' name="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    />
                        {
                            errors.password && (<span className='text-red-500'>Password is required</span>)
                        }
                    <button type='submit' className='w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2'>
                        Login
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between'>Is your first time here? <Link to={'/register'} className='text-sky-500'>Create your account now</Link></p>
            </div>
        </div>
    )
}

export default LoginPage