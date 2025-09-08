import { assets } from '../assets/assets'

const AppDownload = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 rounded-3xl shadow-2xl border border-green-400/20'>
                {/* Animated background pattern */}
                <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
                
                {/* Floating sports elements */}
                <div className='absolute top-8 left-8 text-6xl opacity-20 animate-bounce'>🏆</div>
                <div className='absolute top-12 right-16 text-5xl opacity-20 animate-pulse'>⚽</div>
                <div className='absolute bottom-12 left-16 text-5xl opacity-20 animate-bounce delay-150'>🏀</div>
                <div className='absolute bottom-8 right-8 text-4xl opacity-20 animate-pulse delay-300'>�</div>
                <div className='absolute top-1/2 left-8 text-4xl opacity-20 animate-bounce delay-500'>🏏</div>
                <div className='absolute top-1/3 right-8 text-4xl opacity-20 animate-pulse delay-700'>🏐</div>

                <div className='relative z-10 p-12 sm:p-16 lg:p-24'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        {/* Left Content */}
                        <div className='text-center lg:text-left'>
                            <div className='inline-flex items-center gap-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-6'>
                                <span className='text-2xl animate-pulse'>📱</span>
                                <span className='text-green-300 font-semibold'>Mobile App Available</span>
                            </div>
                            
                            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
                                <span className='bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg'>
                                    Take Your 
                                </span>
                                <br />
                                <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                                    Officiating 
                                </span>
                                <br />
                                <span className='bg-gradient-to-r from-white via-green-200 to-emerald-300 bg-clip-text text-transparent'>
                                    Career Mobile!
                                </span>
                            </h1>
                            
                            <p className='text-xl text-green-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0'>
                                🚀 Access thousands of sports officiating opportunities, manage applications, and connect with teams - all from your smartphone!
                            </p>

                            {/* Features list */}
                            <div className='grid sm:grid-cols-2 gap-4 mb-10 text-left'>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                                    <span className='text-2xl'>⚡</span>
                                    <div>
                                        <h3 className='text-green-200 font-semibold'>Instant Notifications</h3>
                                        <p className='text-green-100 text-sm'>Get alerts for new opportunities</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                                    <span className='text-2xl'>🎯</span>
                                    <div>
                                        <h3 className='text-green-200 font-semibold'>Smart Matching</h3>
                                        <p className='text-green-100 text-sm'>Find jobs that match your skills</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                                    <span className='text-2xl'>📊</span>
                                    <div>
                                        <h3 className='text-green-200 font-semibold'>Track Progress</h3>
                                        <p className='text-green-100 text-sm'>Monitor your applications</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20'>
                                    <span className='text-2xl'>🌟</span>
                                    <div>
                                        <h3 className='text-green-200 font-semibold'>Build Profile</h3>
                                        <p className='text-green-100 text-sm'>Showcase your expertise</p>
                                    </div>
                                </div>
                            </div>

                            {/* Download buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                                <a href="#" className='group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl p-1 transition-all duration-300 transform hover:scale-105 shadow-2xl'>
                                    <div className='bg-black/20 rounded-xl p-4 backdrop-blur-sm'>
                                        <div className='flex items-center gap-4'>
                                            <img className='h-12 w-12' src={assets.play_store} alt="Google Play" />
                                            <div className='text-left'>
                                                <p className='text-green-200 text-xs'>GET IT ON</p>
                                                <p className='text-white font-bold text-lg'>Google Play</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                
                                <a href="#" className='group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-2xl p-1 transition-all duration-300 transform hover:scale-105 shadow-2xl'>
                                    <div className='bg-black/20 rounded-xl p-4 backdrop-blur-sm'>
                                        <div className='flex items-center gap-4'>
                                            <img className='h-12 w-12' src={assets.app_store} alt="App Store" />
                                            <div className='text-left'>
                                                <p className='text-blue-200 text-xs'>DOWNLOAD ON THE</p>
                                                <p className='text-white font-bold text-lg'>App Store</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Side - Phone Mockup */}
                        <div className='relative flex justify-center lg:justify-end'>
                            <div className='relative'>
                                {/* Glowing effect */}
                                <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-30 animate-pulse'></div>
                                
                                {/* Phone mockup */}
                                <div className='relative bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500'>
                                    <div className='bg-gradient-to-b from-green-400 to-emerald-600 rounded-2xl p-8 h-96 w-56'>
                                        <div className='bg-white rounded-xl h-full p-4 shadow-inner'>
                                            <div className='text-center'>
                                                <div className='text-3xl mb-4'>🕴</div>
                                                <h3 className='font-bold text-gray-800 mb-2'>OffsideJobs</h3>
                                                <div className='space-y-2'>
                                                    <div className='bg-green-100 rounded-lg p-2'>
                                                        <p className='text-xs text-green-800'>🏏 Cricket Umpire</p>
                                                    </div>
                                                    <div className='bg-blue-100 rounded-lg p-2'>
                                                        <p className='text-xs text-blue-800'>⚽ Football Referee</p>
                                                    </div>
                                                    <div className='bg-orange-100 rounded-lg p-2'>
                                                        <p className='text-xs text-orange-800'>🏀 Basketball Official</p>
                                                    </div>
                                                </div>
                                                <div className='mt-4 bg-green-600 text-white rounded-lg p-2 text-xs font-semibold'>
                                                    Apply Now! 🚀
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements around phone */}
                                <div className='absolute -top-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg animate-bounce'>
                                    <span className='text-white text-xl'>💼</span>
                                </div>
                                <div className='absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg animate-bounce delay-300'>
                                    <span className='text-white text-xl'>📈</span>
                                </div>
                                <div className='absolute top-1/2 -right-8 bg-orange-500 rounded-full p-2 shadow-lg animate-pulse'>
                                    <span className='text-white text-lg'>🎯</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload