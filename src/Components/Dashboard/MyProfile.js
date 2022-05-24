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

    // console.log(user?.email, dbUser);
    const onSubmit = async e => {
        e.preventDefault();

        const newName = (e.target.name.value || dbUser?.name) || '';
        const education = (e.target.education.value || dbUser?.education) || '';
        const city = (e.target.city.value || dbUser?.city) || '';
        const phone = (e.target.phone.value || dbUser?.phone) || '';
        const linkedin = (e.target.linkedin.value || dbUser?.linkedin) || '';

        const user = { name : newName, email, education, phone, city, linkedin };
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

    return (
        <section className='flex lg:flex-row flex-col lg:px-10 px-8'>
            <div className="hero w-full mx-auto lg:mt-0 mt-60">
                <div className="hero-content w-full flex-col">
                    <h1 className="text-3xl text-neutral font-bold pb-2">Your Profile</h1>
                    <div className='shadow-lg p-8 w-11/12 rounded-xl border-2'>
                        <h1 className="text-2xl text-primary font-bold py-2">{dbUser?.name}</h1>
                        <p>Email : <span className="font-bold">{user?.email}</span></p>
                        <p>Education : <span className="font-bold">{education ? education : 'Not set'}</span></p>
                        <p>Address : <span className="font-bold">{city ? city : 'Not set'}</span></p>
                        <p>Phone : <span className="font-bold">{phone ? phone : 'Not set'}</span></p>
                        <p>Linkedin : <span className="font-bold">{linkedin ? linkedin : 'Not set'}</span></p>
                    </div>
                </div>
            </div>

            <div className='p-3 my-10 w-full mx-auto'>
                <form onSubmit={onSubmit} className='w-full mx-auto'>
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
    );
};

export default MyProfile;