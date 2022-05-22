import React from 'react';

const BusinessSummury = () => {
    return (
        <div className='mx-auto flex flex-col py-12 justify-center'>
            <h1 className="text-4xl uppercase text-primary font-bold text-center pt-10 pb-3">Millions Business Trust Us</h1>
            <h1 className="text-xl uppercase text-center pb-10">Try to understand users ecpectation</h1>

            <div className="stats shadow stats-vertical gap-3 lg:stats-horizontal items-center justify-center">
                <div className="stat place-items-center gap-2">
                    <div className="stat-title"><i className="fa-solid fa-flag text-4xl text-primary"></i></div>
                    <div className="stat-value">71</div>
                    <div className="stat-desc text-primary">Countries</div>
                </div>

                <div className="stat place-items-center gap-2">
                    <div className="stat-title"><i className="fa-solid fa-folder text-4xl text-primary"></i></div>
                    <div className="stat-value">450+</div>
                    <div className="stat-desc text-primary">Complete Projects</div>
                </div>

                <div className="stat place-items-center gap-2">
                    <div className="stat-title"><i className="fa-solid fa-people-line text-4xl text-primary"></i></div>
                    <div className="stat-value">285+</div>
                    <div className="stat-desc text-primary">Happy Clients</div>
                </div>

                <div className="stat place-items-center gap-2">
                    <div className="stat-title"><i className="fa-solid fa-comments text-4xl text-primary"></i></div>
                    <div className="stat-value">344+</div>
                    <div className="stat-desc text-primary">Feedbacks</div>
                </div>
            </div>

            <div className="card mx-auto shadow-purple-200 shadow-lg my-5 border-2">
                <div className="card-body grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center">
                    <div>
                        <h2 className="card-title font-bold text-2xl text-primary">Got any query?</h2>
                        <p>Ask us your question and don't hesitate to contact us!</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Reuest for quote</button>
                        <button className="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummury;