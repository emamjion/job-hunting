import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobPage = ({job}) => {
    const {companyLogo, id, jobTitle, companyName, location, onsite, remote, salary } = job;
    return (
        <div className='flex items-center w-full border-[1px] border-[#E8E8E8] p-6 mb-6'>
            <div className='w-full flex items-center gap-6'>
                <div className='w-[200px] bg-[#F4F4F4] rounded-lg flex items-center justify-center h-[200px]'>
                    <img className='p-6' src={companyLogo} />
                </div>
                <div>
                    <h1 className='text-xl font-medium'>{jobTitle}</h1>
                    <h3 className='text-lg font-medium text-[#757575]'>{companyName}</h3>
                    <div className='my-6'>
                        <span className='border border-purple-700 mr-2 px-5 py-2 rounded text-[#9873FF] font-[500] bg-[linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)]'>{remote}</span>
                        <span className='border px-5 py-2 rounded border-purple-700 text-[#9873FF] font-[500] bg-color'>{onsite}</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='flex items-center gap-1'><span><MapPinIcon className="h-5 w-5 text-[#888]" /></span> {location}</p>
                        <p className='flex gap-2 items-center'><span><CurrencyDollarIcon className="h-5 w-5 text-[#888]" /></span><span>Salary : {salary}</span></p>
                    </div>
                </div>
            </div>
            <div className='w-[150px]'>
                <Link to={`/jobDetails/${id}`}><button className='bg-[#7E90FE] w-full px-5 py-3 rounded-md text-white font-medium'>View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobPage;