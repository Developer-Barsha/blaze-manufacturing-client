import React, { useState, useEffect } from 'react';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => setTools(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-12 px-3'>
            {tools.slice(0, 3).map((tool, index) =>
                <div key={index} className="card w-80 bg-base-100 shadow-xl p-0">
                    {/* <div className="badge badge-primary ml-auto">primary</div> */}
                    <figure><img src={tool.image} alt="Shoes" className='h-40 mx-auto mt-3' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {tool.name}
                            <div className="badge badge-primary">$ {tool.price}</div>
                        </h2>
                        <p>{tool.description}</p>
                        <button className='btn btn-primary'>Purchase</button>
                        <div className="card-actions justify-end pt-3">
                            <div className="badge badge-outline">Min Order: <b>{tool.minOrder}</b></div>
                            <div className="badge bg-primary">Quanity: <b>{tool.quanitity}</b></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tools;