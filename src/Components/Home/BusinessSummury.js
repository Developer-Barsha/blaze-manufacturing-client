import React from 'react';

const BusinessSummury = () => {
    return (
        <div className='mx-auto flex flex-col justify-center'>
            <h1 className="text-4xl uppercase text-primary font-bold text-center pt-10 pb-3">Millions Business Trust Us</h1>
            <h1 className="text-xl uppercase text-center pb-10">Try to understand users ecpectation</h1>

            <div class="stats shadow stats-vertical gap-3 lg:stats-horizontal items-center justify-center">
                <div class="stat place-items-center gap-2">
                    <div class="stat-title"><i class="fa-solid fa-flag text-4xl text-primary"></i></div>
                    <div class="stat-value">71</div>
                    <div class="stat-desc text-primary">Countries</div>
                </div>

                <div class="stat place-items-center gap-2">
                    <div class="stat-title"><i class="fa-solid fa-folder text-4xl text-primary"></i></div>
                    <div class="stat-value">450+</div>
                    <div class="stat-desc text-primary">Complete Projects</div>
                </div>

                <div class="stat place-items-center gap-2">
                    <div class="stat-title"><i class="fa-solid fa-people-line text-4xl text-primary"></i></div>
                    <div class="stat-value">285+</div>
                    <div class="stat-desc text-primary">Happy Clients</div>
                </div>

                <div class="stat place-items-center gap-2">
                    <div class="stat-title"><i class="fa-solid fa-comments text-4xl text-primary"></i></div>
                    <div class="stat-value">344+</div>
                    <div class="stat-desc text-primary">Feedbacks</div>
                </div>
            </div>

            <div class="card mx-auto shadow-purple-200 shadow-lg my-5 border-2">
                <div class="card-body grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center">
                    <div>
                        <h2 class="card-title font-bold text-2xl text-primary">Got any query?</h2>
                        <p>Ask us your question and don't hesitate to contact us!</p>
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Reuest for quote</button>
                        <button class="btn">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummury;