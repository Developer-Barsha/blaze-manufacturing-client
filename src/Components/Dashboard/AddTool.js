import React from 'react';
import { toast } from 'react-toastify';

const AddTool = () => {
    const handleAddTool = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const minOrder = e.target.minOrder.value;
        const quanitity = e.target.quanitity.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const tool = { name, price, quanitity, minOrder, image, description };
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}` 
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Successfully added your tool!')
                }
                e.target.reset();
            })

        console.log('tool', tool);
    }

    return (
        <div className='w-full p-5 lg:p-0 mt-10'>
            <form onSubmit={handleAddTool} className='py-8 lg:w-1/2 w-full flex flex-col gap-3 mx-auto'>
                <h1 className="text-3xl font-bold pt-3 text-primary">Add a Tool</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Tool Name</label>
                    <input type="text" name="name" placeholder='Tool name' className='p-2 rounded-lg border outline-purple-200' />
                </div>

                <div className="flex w-full gap-2">
                    <div className='flex flex-col gap-2 w-1/2'>
                        <label htmlFor="rating">Quantity</label>
                        <input type="number" name='quanitity' placeholder='Quantity' className='p-2 rounded-lg border w-full outline-purple-200' />
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <label htmlFor="rating">Price</label>
                        <input type="number" name='price' placeholder='Price' className='p-2 rounded-lg border w-full outline-purple-200' />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Minimum Order</label>
                    <input type="number" name="minOrder" placeholder='Minimum Order' className='p-2 rounded-lg border outline-purple-200' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Tool Image</label>
                    <input type="text" name="image" placeholder='Tool image' className='p-2 rounded-lg border outline-purple-200' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="description">Short description</label>
                    <textarea rows={3} name='description' placeholder='Short description' className='p-2 rounded-lg border outline-purple-200 resize-none' />
                </div>

                <input type="submit" className='btn btn-primary' value="Add Tool" />
            </form>
        </div>
    );
};

export default AddTool;