import React, { useState } from 'react';
import { getStoredCart } from '../../Utilities/fakeDB';
import AppliedJobPage from './AppliedJobPage';


const AppliedJobs = () => {
    const jobs = getStoredCart();
    
    const [job, setJob] = useState(null);
    const handleButton = () => {
        console.log('hello');
    }

    return (
        <div>
            <div className='w-[60%] mx-auto mt-28'>
                <div className='text-end mb-3'>
                    <select className="select select-info w-full max-w-xs">
                        <option defaultValue={'Filter By'}>Filter By</option>
                        <option onClick={handleButton} >Remote</option>
                        <option>On-Site</option>
                    </select>
                </div>
                {
                    jobs.map(job => <AppliedJobPage
                        key={job.id}
                        job={job}
                    />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;