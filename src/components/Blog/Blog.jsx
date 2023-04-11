import React from 'react';

const Blog = () => {
    return (
        <div className='mt-12 px-72 grid grid-cols-2 gap-6'>
            {/* first questions and answers */}
            <div className='bg-purple-200 rounded'>
                <h1 className='text-center text-2xl font-medium p-2'>When should you use context API?</h1>
                <p className='px-4 mb-2 text-lg'>
                    Context is mainly used when some data needs to be accessible by many components at different nesting levels.
                </p>
            </div>
            {/* second questions and answers */}
            <div className='bg-rose-200 rounded'>
                <h1 className='text-center text-2xl font-medium p-2'>What is a custom hook?</h1>
                <p className='px-4 mb-2 text-lg'>
                    Hooks are reusable functions. when you have component logic that needs to be used by multiple components, we can extract that logic to a custom hook.
                </p>
            </div>
            {/* third questions and answers */}
            <div className='bg-orange-200 rounded'>
                <h1 className='text-center text-2xl font-medium p-2'>What is useRef?</h1>
                <p className='px-4 mb-2 text-lg'>
                    The useRef hook allows you to persist values between renders. It can be stored a mutable value that does not cause a re-render when updated.
                </p>
            </div>
            {/* fourth questions and answers */}
            <div className='bg-sky-200 rounded'>
                <h1 className='text-center text-2xl font-medium p-2'>What is useMemo?</h1>
                <p className='px-4 mb-2 text-lg'>
                    useMemo is a hook that is used in the functional component of React that returns a memoized value.
                </p>
            </div>
        </div>
    );
};

export default Blog;