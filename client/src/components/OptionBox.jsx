import React from 'react';

const OptionBox = ({ selectedAspect, options, onSelectOption }) => {
    return (
        <div className='option__box'>
            {options.map((option, index) => (
                <img
                    key={index}
                    src={option.image}
                    alt={option.name}
                    onClick={() => onSelectOption(selectedAspect, option.name)}
                    style={{ cursor: 'pointer' }}
                />
            ))}
        </div>
    );
};

export default OptionBox;
