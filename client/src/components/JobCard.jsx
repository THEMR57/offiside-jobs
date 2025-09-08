import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate()

  // Function to get sport emoji based on job category
  const getSportEmoji = (title) => {
    if (title?.toLowerCase().includes('cricket')) return '🏏'
    if (title?.toLowerCase().includes('football')) return '⚽'
    if (title?.toLowerCase().includes('basketball')) return '🏀'
    if (title?.toLowerCase().includes('volleyball')) return '🏐'
    if (title?.toLowerCase().includes('tennis')) return '🎾'
    if (title?.toLowerCase().includes('hockey')) return '🏒'
    if (title?.toLowerCase().includes('baseball')) return '⚾'
    return '🕴'
  }

  return (
    <div className='border-2 border-gray-200 hover:border-green-400 p-6 shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50'>
      <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full'>
          <img className='h-6 w-6 rounded-full' src={job?.companyId?.image} alt="" />
          <span className='text-sm font-semibold text-green-700'>{job?.companyId?.name}</span>
        </div>
        <span className='text-2xl'>{getSportEmoji(job.title)}</span>
      </div>
      <h4 className='font-bold text-xl mt-3 text-gray-800 flex items-center gap-2'>
        {job.title}
      </h4>
      <div className='flex items-center gap-2 mt-3 text-xs'>
        <span className='bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 px-3 py-2 rounded-full font-semibold text-green-700 flex items-center gap-1'>
          📍 {job.location}
        </span>
        <span className='bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300 px-3 py-2 rounded-full font-semibold text-orange-700 flex items-center gap-1'>
          ⭐ {job.level}
        </span>
      </div>
      <p className='text-gray-600 text-sm mt-4 leading-relaxed' dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}></p>
      <div className='mt-6 flex gap-3 text-sm'>
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md'>
          🚀 Apply Now
        </button>
        <button onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }} className='text-gray-600 border-2 border-gray-300 hover:border-green-500 hover:text-green-600 rounded-full px-6 py-2 font-semibold transition-all duration-300'>
          📋 Details
        </button>
      </div>
    </div>
  )
}

export default JobCard