import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async data => {
        const email = data.email;
        const password = data.password;
    });

    return (
        <section className='flex lg:flex-row flex-col lg:px-16 px-8'>
            <div className="hero w-full mx-auto">
                <div className="hero-content w-full flex-col">
                    <h1 className="text-4xl text-neutral font-bold py-2">Your Profile</h1>
                    <div className='shadow-lg p-8 rounded-xl border-2'>
                        <h1 className="text-3xl text-primary font-bold py-2">{user?.displayName}</h1>
                        <p>Email : <span className="font-bold">{user?.email}</span></p>
                        <p className="py-2">Currently Studying : <b className='text-primary'>Class 9 (Science)</b></p>
                        <button className="btn btn-primary">Explore more</button>
                    </div>
                </div>
            </div>

            <div className='p-3 my-10 w-full mx-auto'>
                <form onSubmit={onSubmit} className='w-full mx-auto'>
                    <h1 className="text-3xl font-bold pb-3 text-primary">Update Profile</h1>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type="email" placeholder="Your Email" {...register("email", { required: true, pattern: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/ })} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text-alt text-error">{errors.email?.type === 'required' && "Email is required"} {errors.email?.type === 'pattern' && "Invalid Email"}</span>
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input type="password" placeholder="Your Password" {...register("password", { required: true, minLength: 6 })} className="input input-bordered w-full" />
                    </div>
                    <input type="submit" className="btn w-full mt-3 btn-primary" value="Login" />
                </form>
            </div>
        </section>
    );
};

export default MyProfile;