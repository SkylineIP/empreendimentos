'use client';

import React from 'react';

interface ButtonProps {
    label: string;
    click: () => void;
    type: string;
}

const PersonalizeButton: React.FC<ButtonProps> = ({ label, click }) => {
    //with image
    //without image
    return (
        <div className='w-full h-full'>
            <button onClick={() => click()}>
            {label}
        </button>
        </div>
        
    );
};

export default PersonalizeButton;