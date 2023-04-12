import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const JobDetails = (props) => {
    const {companyLogo, jobTitle, companyName, salary, location, onsite, remote, fullTime} = props.jobDetail;
    

    return (
        <div className='border mb-6 rounded-lg'>
            <div className='ps-6 py-5'>
                <img src={companyLogo} alt="" />
                <h1 className='text-[#474747] text-2xl font-medium mt-8'>{jobTitle}</h1>
                <h3 className='text-[#757575] text-xl mt-2 font-[600]'>{companyName}</h3>
                <div className='mt-4'>
                    <span className='border border-purple-700 mr-2 px-5 py-2 rounded text-[#9873FF] font-[500] bg-[linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)]'>{remote}</span>
                    <span className='border px-5 py-2 rounded border-purple-700 text-[#9873FF] font-[500] bg-color'>{fullTime}</span>
                </div>
                <div className='flex gap-3 mt-4'>
                    <p className='flex gap-2 items-center'><span><MapPinIcon className="h-5 w-5 text-[#888]" /></span> <span>{location}</span></p>
                    <p className='flex gap-2 items-center'><span><CurrencyDollarIcon className="h-5 w-5 text-[#888]" /></span><span>Salary : {salary}</span></p>
                </div>
                <button className='bg-[#7E90FE] px-5 py-2 rounded-md text-white font-medium mt-6'>View Details</button>
            </div>
        </div>
    );
};

export default JobDetails;