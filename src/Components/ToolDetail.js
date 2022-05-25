import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const ToolDetail = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        fetch('https://blaze-manufacturing.herokuapp.com/tools/' + id, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id]);
    const [user] = useAuthState(auth);

    const handlePurchase = handleSubmit(async (data, e) => {
        e.preventDefault();
        const order = data?.order;
        const toolPrice = tool?.price;
        const cost = parseFloat(order * toolPrice).toFixed(2);
        const postingTool = {...data, price:cost};

        fetch('https://blaze-manufacturing.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postingTool)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.insertedId) {
                    toast.success('Successfully placed your order!')
                }
                e.target.reset();
            })
    });

    return (
        <section className='py-10 px-2'>
            <div className="mx-auto card lg:w-2/3 w-full card-side bg-base-100 shadow-xl flex lg:flex-row flex-col items-center">
                <figure><img src={tool?.image} className='lg:h-80 lg:w-fit w-48 mx-auto mt-3' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-primary">{tool?.name}</h2>
                    <div className='flex flex-col gap-3'>
                        <p>Quanitity: <b>{tool?.quanitity}</b> </p>
                        <p>Minimum Order: <b>{tool?.minOrder}</b> </p>
                        <p>Price: <b>{tool?.price}</b> </p>
                        <p>{tool?.description}</p>
                    </div>
                </div>
            </div>


            <div className='p-3 my-10'>
                <form onSubmit={handlePurchase} className='lg:w-1/2 w-full mx-auto shadow-lg p-4 rounded-xl'>
                    <h1 className="text-3xl font-bold pb-3 text-primary">Purchase Your tool</h1>

                    <div className='flex lg:flex-row flex-col gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>

                            <input type="text" value={user?.displayName} readOnly {...register("name")} className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            <input type="email" value={user?.email} readOnly {...register("email")} className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>

                        <input type="text" placeholder="Your address" {...register("address", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.address?.type === 'required' && "address is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>

                        <input type="number" placeholder="Your Phone" {...register("phone", { required: true })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.Phone?.type === 'required' && "Phone is required"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Purchasing</span>
                        </label>

                        <input type="text" value={tool?.name} readOnly {...register("tool", { required: true })} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Order Quanitity</span>
                        </label>

                        <input type="number" placeholder="Your Order" defaultValue={tool?.minOrder} {...register("order", {
                            required: true,
                            max: {
                                value: tool?.quanitity,
                                message: 'Must be under available quantity'
                            },
                            min: {
                                value: tool?.minOrder,
                                message: 'Must be over or equal to minimum order quantity'
                            }
                        })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors.order?.type === 'required' && "Order Quantity is required"}
                                {errors?.order?.message}
                            </span>
                        </label>
                    </div>

                    <input type="submit" disabled={errors?.order} className="btn w-full btn-primary" value="Purchase" />
                </form>
            </div>
        </section>
    );
};

export default ToolDetail;