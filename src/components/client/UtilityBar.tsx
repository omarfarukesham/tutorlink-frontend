import React from 'react';

const UtilityBar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-400'>
            <div className="flex gap-4 items-center ">
                <div>E-tutor</div>
                <div>Browser</div>
                <div>Search</div>               
            </div>
            <div className='flex gap-4 items-center'>
                <div>Notification</div>
                <div>Favorite</div>
                <div>Cart</div>
            </div>
        </div>
    );
};

export default UtilityBar;