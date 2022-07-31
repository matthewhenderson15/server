import React from 'react';

export default ({ input, label, meta }) => {    
    console.log(meta);
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
            {meta.touched && meta.error}
        </div>
    );
};