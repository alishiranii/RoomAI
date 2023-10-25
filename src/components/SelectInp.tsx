"use client"
import React from 'react';
import Select from "react-select";

function SelectInp() {
    const options = [
        { value: 'living room', label: 'Living Room' },
        { value: 'bedroom', label: 'Bedroom' },
        { value: 'bathroom', label: 'Bathroom' },
        { value: 'kitchen', label: 'Kitchen' },
    ];
    return (
      <div className="w-full">
        <Select options={options} defaultValue={options[0]} />
      </div>
    ); 
}

export default SelectInp