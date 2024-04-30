import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function Navbar() {

    const { isLogedIn, logout, user } = useUser()

    return (
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to={ isLogedIn ? '/myOffers' : '/' }>
                <h1 className='text-2xl font-bold'>Offers Manager</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isLogedIn ? (                    
                    <>
                        <li>
                            Welcome {user.firstName}
                        </li>
                        <li>
                            <Link to='/myOffers' className='bg-indigo-500 px-4 py-1 rounded-sm'>My Offers</Link>
                        </li>
                        <li>
                            <Link to='/offer' className='bg-indigo-500 px-4 py-1 rounded-sm'>Create Offer</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={ () => logout() } className='bg-indigo-500 px-4 py-1 rounded-sm'>Logout</Link>
                        </li>
                    </>
                    ) : (
                    <>
                        <li>
                            <Link to='/login' className='bg-indigo-500 px-4 py-1 rounded-sm'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='bg-indigo-500 px-4 py-1 rounded-sm'>Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar