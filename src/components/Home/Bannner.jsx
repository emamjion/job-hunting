import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Bannner = () => {
    return (
        <section className='lg:px-72 lg:pt-16 lg:flex items-center bg-[#F9F9FF] gap-16 sm:text-center'>
                {/* banner - text side */}
                <div className='sm:text-center'>
                    <h1 className='text-7xl font-[600]'>One Step <br/> Closer To Your</h1>
                    <span className='text-7xl font-[600] text-[#7E90FE]'>Dream Job</span>
                    <p className='mt-6 text-lg text-[#757575] w-[500px]'>
                    Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='bg-[#7E90FE] px-7 py-4 rounded-lg text-white font-medium mt-6'>Get Started</button>
                </div>
                {/* banner - image side */}
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </section>
    );
};

export default Bannner;