import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const NewArrival = () => {
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/tools').then(res => res.json()).then(data => setTool(data[0]))
    }, []);

    return (
        <div>
            <div className="card lg:w-96 w-10/12 shadow-xl image-full mx-auto mb-5">
                <figure><img src={tool?.image} className='' alt="Shoes" /></figure>
                <div className="card-body my-auto">
                    <h2 className="text-3xl text-secondary font-bold mb-10">NEW ARRIVAL!!</h2>
                    <h2 className="card-title text-info">{tool?.name}</h2>
                    <p>{tool?.description}</p>
                    <div className="card-actions justify-end">
                        {
                            admin ? <button className="btn btn-primary">Manage Tools</button> :
                                <button onClick={() => navigate(`purchase/${tool?._id}`)} className="btn btn-primary">Purchase Now</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;