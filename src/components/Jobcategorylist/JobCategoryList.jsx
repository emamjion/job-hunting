import React from 'react';

const JobCategoryList = (props) => {
    const {title,icon,availableJob} = props.jobCategory;
    return (
        <div>
            <div>
                <div className='bg-[#F9F9FF] p-10 rounded-lg'>
                    <img className='bg-[#EFECFF] p-2 rounded' src={icon} alt="" />
                    <h3 className='text-xl font-medium mt-8 mb-2'>{title}</h3>
                    <p className='text-[#A3A3A3]'>{availableJob}</p>
                </div>
                
            </div>
        </div>
    );
};

export default JobCategoryList;