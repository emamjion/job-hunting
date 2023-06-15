import React from 'react';
import Bannner from './Bannner';
import JobCategory from '../Jobcategorylist/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Bannner/>
            {/* job category List */}
            <JobCategory/>

            {/* Featured Jobs */}
            <FeaturedJobs/>
        </div>
    );
};

export default Home;