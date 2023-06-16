import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakeDB';


const JobDetails = () => {
    const {id} = useParams();
    const jobDetails = useLoaderData();
    const [state, setState] = useState({});
    useEffect(() => {
        const jobData = jobDetails.find(detail => detail.id == id);
        setState(jobData);
    }, [jobDetails])

    const handleApplied = (state) => {
        // console.log(stateId);
        // const newCart = [...cart, stateId];
        // setCart(newCart);
        addToDb(state);
        // console.log(state);
    }

    return (
        <div>
            {/* Dynamic title */}
            {/* Dynamic title */}
            
            <div className='flex items-center justify-center pt-40 gap-6'>
                {/* job description */}
                <div className='w-[800px]'>
                    <p className='mb-6 text-[#757575]'>
                        <b className='text-[#1A1919]'>Job Description: </b> {state.jobDescription} 
                    </p>
                    <p className='mb-6 text-[#757575]'>
                        <b className='text-[#1A1919]'>Job Responsibility: </b> {state.jobResponsibilty} 
                    </p>
                    <div  className='mb-6'>
                        <b>Educational Requirements:</b>
                        <p> {state.educationalRequirements} </p>
                    </div>
                    <div>
                        <b>Experiences:</b>
                        <p> {state.experience} </p>
                    </div>
                </div>
                {/* Job information */}
                <div className=''>
                    <div className='bg-[#7E90FE1A] p-8'>
                        <div>
                            <h1 className='font-medium text-xl'>Job Details</h1>
                            <div className='bg-[#7E90FE] my-3 h-[1px] w-[90%]'></div>
                            <p className='mb-2'> <b>Salary</b>: <span className='text-[#757575]'>{state.salary}</span> </p>
                            <p className='mb-2'><b>Job Title</b> : <span className='text-[#757575]'>{state.jobTitle}</span> </p>
                        </div>
                        <div className='mt-6 rounded'>
                            <h1 className='font-medium text-xl'>Contact Information</h1>
                            <div className='bg-[#7E90FE] h-[1px] my-3 w-[90%]'></div>
                            <p className='mb-2'> <b>Phone</b>: <span className='text-[#757575]'>{state.phone}</span> </p>
                            <p className='mb-2'><b>Email</b> : <span className='text-[#757575]'> {state.email}</span> </p>
                            <p className='mb-2'><b>Address</b> : <span className='text-[#757575]'>{state.location}</span></p>
                        </div>
                    </div>
                    <button onClick={() => handleApplied(state)} className='w-full px-6 mt-4 py-2 bg-[#7E90FE] rounded-lg text-white'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;