import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png';
import accountImg from '../../assets/Icons/accounts 1.png';
import businessImg from '../../assets/Icons/business 1.png';
import marketingImg from '../../assets/Icons/social-media 1.png';
import engineeringImg from '../../assets/Icons/chip 1.png';

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
            {/* Job Category List section */}
            <section className='px-72 mt-32'>
                <div className='text-center mb-8'>
                    <h1 className='text-5xl font-medium mb-5'>Job Category List</h1>
                    <p className='text-[#757575]'>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                </div>
                <div className='flex items-center justify-center gap-6 mb-12'>
                    <div className='bg-[#F9F9FF] p-10 rounded-lg'>
                        <img className='bg-[#EFECFF] p-2 rounded' src={accountImg} alt="" />
                        <h3 className='text-xl font-medium mt-8 mb-2'>Account & Finance</h3>
                        <p className='text-[#A3A3A3]'>300 Jobs Available</p>
                    </div>
                    <div className='bg-[#F9F9FF] p-10 rounded-lg'>
                        <img className='bg-[#EFECFF] p-2 rounded' src={businessImg} alt="" />
                        <h3 className='text-xl font-medium mt-8 mb-2'>Creative Design</h3>
                        <p className='text-[#A3A3A3]'>100+ Jobs Available</p>
                    </div>
                    <div className='p-10 bg-[#F9F9FF] rounded-lg'>
                        <img className='bg-[#EFECFF] p-2 rounded' src={marketingImg} alt="" />
                        <h3 className='text-xl font-medium mt-8 mb-2'>Marketing & Sales</h3>
                        <p className='text-[#A3A3A3]'>150 Jobs Available</p>
                    </div>
                    <div className='bg-[#F9F9FF] p-10 rounded-lg'>
                        <img className='bg-[#EFECFF] p-2 rounded' src={engineeringImg} alt="" />
                        <h3 className='text-xl font-medium mt-8 mb-2'>Engineering Job</h3>
                        <p className='text-[#A3A3A3]'>224 Jobs Available</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;