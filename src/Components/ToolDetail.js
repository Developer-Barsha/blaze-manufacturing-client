import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';

const ToolDetail = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/tools/' + id).then(res => res.json()).then(data => setTool(data))
    }, []);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handlePurchase=()=>{

    }

    return (
        <section className='py-10 px-2'>
            <div className="mx-auto card lg:w-2/3 w-full card-side bg-base-100 shadow-xl flex lg:flex-row flex-col">
                <figure><img src={tool.image} className='lg:h-80 lg:w-fit w-48 mx-auto mt-3' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-primary">{tool.name}</h2>
                    <div className='flex flex-col gap-3'>
                        <p>Quanitity: <b>{tool.quanitity}</b> </p>
                        <p>Minimum Order: <b>{tool.minOrder}</b> </p>
                        <p>Price: <b>{tool.price}</b> </p>
                        <p>{tool.description}</p>
                    </div>
                    <div className="card-actions pt-5">
                        <button className="btn btn-primary">See more</button>
                    </div>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-center gap-3'>
                <form onSubmit={handlePurchase} className='py-8 lg:w-1/2 w-full flex flex-col gap-3 mx-auto'>
                    <h1 className="text-3xl font-bold pt-3 text-primary">Place Order</h1>
                    <div className="flex w-full gap-2">
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label htmlhtmlFor="name">Mame</label>
                            <input type="text" name='name' value={user?.displayName} className='p-2 rounded-lg border w-full ountline-0' />
                        </div>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label htmlhtmlFor="email">Email</label>
                            <input type="email" name='email' value={user?.email} className='p-2 rounded-lg border w-full ountline-0' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlhtmlFor="address">Address</label>
                        <input type="text" name="address" placeholder='Your Address' className='p-2 rounded-lg border ountline-0' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlhtmlFor="phone"> Number </label>
                        <input type="number" name="phone" placeholder='Phone Number' className='p-2 rounded-lg border ountline-0' />
                    </div>

                    <input type="submit" className='btn btn-primary' value="Add Tool" />
                </form>
            </div>
        </section>
    );
};

export default ToolDetail;