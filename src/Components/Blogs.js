import React, { useState, useEffect } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    return (
        <div className='lg:px-16 px-5 my-12'>
            <h2 className="font-bold text-primary text-center text-3xl pb-5 uppercase">OUR Blogs</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {blogs.map(blog =>
                    <div key={blog?._id} class="card border shadow-xl mx-auto">
                        <div class="card-body">
                            <h2 class="card-title">{blog?.question}</h2>
                            <p>{blog?.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;