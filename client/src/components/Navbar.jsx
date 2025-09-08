import { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    const navigate = useNavigate()

    const { setShowRecruiterLogin } = useContext(AppContext)

    return (
        <div className='shadow py-4 bg-gradient-to-r from-green-50 to-blue-50'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                <div onClick={() => navigate('/')} className='cursor-pointer flex items-center gap-2'>
                    <span className='text-2xl'>🕴</span>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
                        OffsideJobs
                    </h1>
                </div>
                {
                    user
                        ? <div className='flex items-center gap-3'>
                            <Link to={'/applications'}>Applied Officiating Jobs</Link>
                            <p>|</p>
                            <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
                            <UserButton />
                        </div>
                        : <div className='flex gap-4 max-sm:text-xs'>
                            <button onClick={e => setShowRecruiterLogin(true)} className='text-gray-600'>Team Manager Login</button>
                            <button onClick={e => openSignIn()} className='bg-green-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Navbar