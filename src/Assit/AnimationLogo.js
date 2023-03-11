import React from 'react';

const AnimationLogo = () => {
    return (
        <div className="w-[40%] p-4">
            <div className="w-32 h-32 border-4 text-white border-dashed rounded-full animate-spin animate-spin-3s dark:border-violet-600 custom_spin" >
            </div>
                <img className="w-[100%] h-[100%] bg-white my-6 rounded-full " src="https://i.ibb.co/r0jrhx6/borbibi-brand.png" alt="borbibi-brand" />
        </div>
    );
};

export default AnimationLogo;