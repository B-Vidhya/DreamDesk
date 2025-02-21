// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection


import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css'

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='hero-section bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-20 relative'>
            <img src="/image1.svg" alt="SVG 1" className="absolute top-20 left-0 w-1/4" />
            <img src="/image6.svg" alt="SVG 2" className="absolute top-20 right-0 w-1/4" />
            <div className='hero-content flex flex-col items-center gap-5'>
                {/* <h1 className='project-name text-6xl font-bold text-yellow-400'>DreamDesk</h1> */}
                <span className='tagline bg-white bg-opacity-20 px-4 py-2 rounded-full font-medium'>Your ultimate gateway to landing the job of your dreams!</span>
                <h1 className='hero-title text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='highlight text-yellow-400'>Dream Jobs</span></h1>
                <p className='hero-description text-lg max-w-xl'>Find your perfect job with ease and start your journey towards a brighter career.</p>
                <div className='search-bar flex items-center bg-white rounded-full shadow-lg w-3/4 max-w-lg p-2'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='search-input flex-1 border-none outline-none px-4 py-2 rounded-l-full text-black'
                    />
                    <Button onClick={searchJobHandler} className="search-button bg-yellow-400 text-white px-4 py-2 rounded-r-full">
                        <Search className='search-icon w-5 h-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection