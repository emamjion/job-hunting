import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <section className='px-72 pt-16 flex items-center bg-[#F9F9FF] gap-16'>
                {/* banner - text side */}
                <div>
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
        </div>
    );
};

export default Home;