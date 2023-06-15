import React, { useEffect, useState } from 'react';
import JobCategoryList from './JobCategoryList';

const JobCategory = () => {
    const [jobsCategory, setJobsCategory] = useState([]);
    useEffect(() => {
        fetch('job_category_list.json')
        .then(response => response.json())
        .then(data => setJobsCategory(data))
    }, []);
    
    return (
        <section className='px-72 mt-32'>
            <div className='text-center mb-8'>
                <h1 className='text-5xl font-medium mb-5'>Job Category List</h1>
                <p className='text-[#757575]'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            {/* job category list part */}
            <div className='flex items-center justify-center gap-6 mb-12'>
                {
                    jobsCategory.map(jobCategory => <JobCategoryList key={jobCategory.id} jobCategory={jobCategory} />)
                }
            </div>
        </section>
    );
};

export default JobCategory;