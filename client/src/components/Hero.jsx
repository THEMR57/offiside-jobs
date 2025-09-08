import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-br from-green-700 via-emerald-800 to-teal-900 text-white py-20 text-center mx-2 rounded-2xl shadow-2xl relative overflow-hidden'>
                {/* Sports-themed decorative elements */}
                <div className='absolute top-4 left-4 text-4xl opacity-20'>⚽</div>
                <div className='absolute top-8 right-8 text-3xl opacity-20'>🏀</div>
                <div className='absolute bottom-4 left-8 text-3xl opacity-20'>🏏</div>
                <div className='absolute bottom-8 right-4 text-4xl opacity-20'>🎾</div>
                
                <div className='relative z-10'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg'>
                        <span className='block mb-2'>🏆 Elite Sports Officiating</span>
                        <span className='text-yellow-300'>Opportunities Await!</span>
                    </h2>
                    <p className='mb-10 max-w-2xl mx-auto text-lg font-light px-5 leading-relaxed'>
                        🕴 Join the ranks of professional sports officials! Discover premium umpire and referee positions across cricket, football, basketball, and more sports!
                    </p>
                    <div className='flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-xl text-gray-600 max-w-2xl pl-6 mx-4 sm:mx-auto shadow-xl border border-white/20'>
                        <div className='flex items-center'>
                            <span className='text-green-600 text-xl mr-2'>🔍</span>
                            <input type="text"
                                placeholder='Search sports officiating positions...'
                                className='max-sm:text-xs p-3 rounded outline-none w-full bg-transparent font-medium'
                                ref={titleRef}
                            />
                        </div>
                        <div className='flex items-center border-l border-gray-300 pl-4'>
                            <span className='text-blue-600 text-xl mr-2'>📍</span>
                            <input type="text"
                                placeholder='Location'
                                className='max-sm:text-xs p-3 rounded outline-none w-full bg-transparent font-medium'
                                ref={locationRef}
                            />
                        </div>
                        <button onClick={onSearch} className='bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 px-8 py-3 rounded-lg text-white m-2 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'>
                            🚀 Search
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r from-white to-gray-50 border-2 border-green-200 shadow-xl mx-2 mt-8 p-8 rounded-2xl'>
                <div className='flex justify-center items-center gap-8 lg:gap-16 flex-wrap'>
                    <p className='font-bold text-gray-700 text-lg flex items-center gap-2'>
                        <span className='text-2xl'>🏟️</span>
                        Trusted by Premier Sports Teams
                    </p>
                    <div className='flex gap-6 flex-wrap items-center'>
                        <div className='bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-lg font-semibold text-blue-800 flex items-center gap-2'>
                            <span>⚽</span> Delhi FC
                        </div>
                        <div className='bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-lg font-semibold text-green-800 flex items-center gap-2'>
                            <span>🏏</span> Mumbai Indians
                        </div>
                        <div className='bg-gradient-to-r from-orange-100 to-orange-200 px-4 py-2 rounded-lg font-semibold text-orange-800 flex items-center gap-2'>
                            <span>🏀</span> Bangalore Basketball
                        </div>
                        <div className='bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-lg font-semibold text-purple-800 flex items-center gap-2'>
                            <span>🎾</span> Chennai Tennis Club
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero