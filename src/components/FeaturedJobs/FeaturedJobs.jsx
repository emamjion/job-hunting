import React, { useEffect, useState } from 'react';
import AllJobs from '../AllJobs/AllJobs';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('/allJobs.json')
        .then(response => response.json())
        .then(data => setFeaturedJobs(data.slice(0,4)))
    }, []);
    
    const seeAllJobButton = () => {
        fetch('/allJobs.json')
        .then(response => response.json())
        .then(data => setFeaturedJobs(data))
    }

    
    return (
        <section className='px-72 mt-32'>
            <div className='text-center mb-8'>
                <h1 className='text-5xl font-medium mb-5'>Featured Job</h1>
                <p className='text-[#757575]'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div>
                <div className='grid md:grid-cols-2 gap-6'>
                    {
                        featuredJobs.map(featuredJob => <AllJobs
                            key={featuredJob.id}
                            featuredJob={featuredJob}
                        />)
                    }
                </div>
                <button onClick={seeAllJobButton}  className='bg-[#7E90FE] px-7 py-3 rounded-md text-white font-medium mt-6 block mx-auto mb-6'>See All Jobs</button>
            </div>
    </section>
    );
};

export default FeaturedJobs;