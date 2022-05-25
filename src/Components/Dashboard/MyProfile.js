import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [dbUser, setDbUser] = useState({});
    const [user] = useAuthState(auth);
    const { email, education, phone, city, linkedin } = dbUser;

    useEffect(() => {
        fetch(`https://blaze-manufacturing.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success('Successfully added your review!')
                }
                setDbUser(data);
            });
    }, [dbUser, user?.email])

    const onSubmit = async e => {
        e.preventDefault();

        const newName = (e.target.name.value || dbUser?.name) || '';
        const education = (e.target.education.value || dbUser?.education) || '';
        const city = (e.target.city.value || dbUser?.city) || '';
        const phone = (e.target.phone.value || dbUser?.phone) || '';
        const linkedin = (e.target.linkedin.value || dbUser?.linkedin) || '';

        const user = { name: newName, email, education, phone, city, linkedin };
        console.log(user);

        fetch(`https://blaze-manufacturing.herokuapp.com/users/${dbUser?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.upsertedId) {
                    toast.success('Successfully updated profile!')
                }
                e.target.reset();
            })
    };

    // <div>
    //     <div class="container mx-auto mt-12 md:mt-12 md:space-x-10 md:grid grid-cols-2 justify-center md:py-35">
    //         <div className='flex justify-center items-center'>
    //             <div class="card w-96 min-h-52 bg-base-100 shadow-xl">
    //                 <div class="card-body">
    //                     <h1 class="text-4xl text-gray-800 text-center font-bold mb-6">Your Profile</h1>
    //                     <h2 ><span className='text-orange-500'>Name:</span> {updatedUser?.name ? updatedUser.name : user.displayName || user.name}</h2>
    //                     <p className=''><span className='text-orange-400 font-bold'>email: </span>{user?.email}</p>

    //                     <p><span className='text-orange-400 font-bold'>city: </span>{updatedUser?.city ? updatedUser.city : 'Not Available'}</p>
    //                     <p><span className='text-orange-400 font-bold'>education: </span>{updatedUser?.education ? updatedUser.education : 'Not Available'}</p>
    //                     <p><span className='text-orange-400 font-bold'>phone: </span>{updatedUser?.phone ? updatedUser.phone : 'Not Available'}</p>
    //                     <p><span className='text-orange-400 font-bold'>linkedin: </span>{updatedUser?.linkedin ? updatedUser.linkedin : 'Not Available'}</p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="mt-8 md:mt-0 lg:justify-end col-span-1">

    //             <div className='flex justify-center'>
    //                 <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3 border-2 border-gray-500 ">
    //                     <form onSubmit={handleEditUser}>
    //                         <div class="card-body">
    //                             <h1 class="text-4xl text-gray-800 text-center font-bold mb-6">Edit Profile</h1>
    //                             <div class="form-control">
    //                                 <label class="label">
    //                                     <span class="label-text">Name</span>
    //                                 </label>
    //                                 <input type="text" name='name' placeholder="name" class="input input-bordered" />
    //                             </div>
    //                             <div class="form-control">
    //                                 <label class="label">
    //                                     <span class="label-text">Education</span>
    //                                 </label>
    //                                 <input type="text" name='education' placeholder="education" class="input input-bordered" />
    //                             </div>
    //                             <div class="form-control">
    //                                 <label class="label">
    //                                     <span class="label-text">city</span>
    //                                 </label>
    //                                 <input type="text" placeholder="city" name='city' class="input input-bordered" />

    //                             </div>
    //                             <div class="form-control">
    //                                 <label class="label">
    //                                     <span class="label-text">Phone</span>
    //                                 </label>
    //                                 <input type="number" placeholder="Phone" name='phone' class="input input-bordered" />

    //                             </div>
    //                             <div class="form-control">
    //                                 <label class="label">
    //                                     <span class="label-text">Linkedin</span>
    //                                 </label>
    //                                 <input type="text" placeholder="linkedin" name='linkedin'    class="input input-bordered" />

    //                             </div>
    //                             <div class="form-control mt-6">
    //                                 <button class="btn btn-primary">Update</button>
    //                             </div>


    //                         </div>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    return (
        <div className='mt-16'>
            <section className='z-50 relative mx-auto md:mt-12 grid lg:grid-cols-2 grid-cols-1 lg:px-10 px-5 my-10 gap-10'>
                <div className='flex lg:mt-0 mt-96 justify-content-center items-center'>
                    <div className="card w-96 shadow-xl mx-auto">
                        <div className='card-body shadow-lg p-8 rounded-xl border-2'>
                            <h1 className="card-title text-3xl text-neutral font-bold">Your Profile</h1>
                            <h1 className="text-2xl text-primary font-bold py-2">{dbUser?.name}</h1>
                            <p>Email : <span className="font-bold">{user?.email}</span></p>
                            <p>Education : <span className="font-bold">{education ? education : 'Not set'}</span></p>
                            <p>Address : <span className="font-bold">{city ? city : 'Not set'}</span></p>
                            <p>Phone : <span className="font-bold">{phone ? phone : 'Not set'}</span></p>
                            <p>Linkedin : <span className="font-bold">{linkedin ? linkedin : 'Not set'}</span></p>
                        </div>
                    </div>
                </div>

                <div className='card flex-shrink-0 max-w-lg shadow-2xl p-5 mx-auto'>
                    <form onSubmit={onSubmit} className='mx-auto'>
                        <h1 className="text-3xl font-bold pb-3 text-primary">Update Profile</h1>
                        <label htmlFor="name" className='mx-1 text-sm'>Name</label>
                        <input type="text" name="name" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Name' id="" />

                        <label htmlFor="education" className='mx-1 text-sm'>Education</label>
                        <input type="text" name="education" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Education' id="" />

                        <label htmlFor="phone" className='mx-1 text-sm'>Phone</label>
                        <input type="number" name="phone" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Phone' id="" />

                        <label htmlFor="city" className='mx-1 text-sm'>City</label>
                        <input type="text" name="city" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your City' id="" />

                        <label htmlFor="linkedin" className='mx-1 text-sm'>Linkedin</label>
                        <input type="text" name="linkedin" className='w-full p-2 my-1 rounded-lg border outline-purple-200' placeholder='Your Linkedin' id="" />

                        <input type="submit" className="btn w-full mt-3 btn-primary" value="Update Profile" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;