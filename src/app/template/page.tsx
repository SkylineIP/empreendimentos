import React from 'react';

const Page: React.FC = () => {
    return (
        <div className='w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12'>
            <div className=' col-span-3 row-span-12 bg-[#896337] w-full my-6 rounded-r-3xl'></div>
            <div className='col-span-9 row-span-12 grid grid-rows-12 bg-[#E2DED2]'>
                <div className='bg-[#E2DED2] row-span-10 pt-16 pr-20'>
                    <div className='w-full h-full bg-[#c29461] rounded-r-3xl'></div>
                </div>
                <div className='bg-[#AFA38B] row-span-2 ml-6 mt-6 flex justify-center items-center'>
                </div>
            </div>
        </div>
    );
};

export default Page;