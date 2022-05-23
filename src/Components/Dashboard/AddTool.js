import React from 'react';
import { toast } from 'react-toastify';

const AddTool = () => {
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('https://blaze-manufacturing.herokuapp.com/reviews', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    const handleAddTool = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const minOrder = e.target.minOrder.value;
        const quanitity = e.target.quanitity.value;
        const description = e.target.description.value;
        const tool = { name, price, quanitity, minOrder, description };
        // fetch('https://blaze-manufacturing.herokuapp.com/reviews', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             toast.success('Successfully added your review!')
        //         }
        //         e.target.reset();
        //     })

        console.log('tool', tool);
    }

    return (
        <div className='w-full p-5 lg:p-0'>
            <form onSubmit={handleAddTool} className='py-8 lg:w-1/2 w-full flex flex-col gap-3 mx-auto'>
                <h1 className="text-3xl font-bold pt-3 text-primary">Add a Tool</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Tool Name</label>
                    <input type="text" name="name" placeholder='Tool name' className='p-2 rounded-lg border outline-purple-200' />
                </div>

                <div className="flex w-full gap-2">
                    <div className='flex flex-col gap-2 w-1/2'>
                        <label htmlFor="rating">Quantity</label>
                        <input type="number" name='quantity' placeholder='Quantity' className='p-2 rounded-lg border w-full outline-purple-200' />
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
                    <label htmlFor="description">Short description</label>
                    <textarea rows={3} name='description' placeholder='Short description' className='p-2 rounded-lg border outline-purple-200 resize-none' />
                </div>

                <input type="submit" className='btn btn-primary' value="Add Tool" />
            </form>
        </div>
    );
};

export default AddTool;