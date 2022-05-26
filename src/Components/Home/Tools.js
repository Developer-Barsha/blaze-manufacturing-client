import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/tools').then(res => res.json()).then(data => setTools(data))
    }, []);
    const navigate = useNavigate();

    return (
        <section className='flex flex-col justify-center'>
            <h1 className="text-3xl text-center font-bold pt-8 pb-5">Purchase Our Tools</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-12 px-3'>
                {tools.slice(0, 6).map((tool, index) =>
                    <div key={index} className="card w-80 bg-base-100 mx-auto shadow-xl p-0">
                        {/* <div className="badge badge-primary ml-auto">primary</div> */}
                        <figure><img src={tool.image} alt="Shoes" className='h-40 mx-auto mt-3' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {tool.name}
                                <div className="badge badge-primary">$ {tool.price}</div>
                            </h2>
                            <p>{tool.description}</p>

                            {
                                admin ? '' :
                                    <button onClick={() => navigate(`purchase/${tool?._id}`)} className='btn btn-primary'>Purchase</button>
                            }

                            <div className="card-actions justify-end pt-3">
                                <div className="badge badge-outline">Min Order: <b>{tool.minOrder}</b></div>
                                <div className="badge bg-primary">Quanity: <b>{tool.quanitity}</b></div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <button className='btn mx-auto mt-5 px-12 gap-4 flex items-center'>See All <i className="fa-solid fa-angles-right"></i></button>
        </section>
    );
};

export default Tools;