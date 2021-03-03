import React from 'react'

import './form-input.style.scss'

const FormInput = ({onChange, label, error, ...otherProps}) => (
<div className='group'>

    <input className='form-input' onChange={(e) => onChange(e.target.value)} {...otherProps}/>
     {label ? (
         <label
         className={`${otherProps.value.length ? 'shrink':''} form-input-label`}
         >
{label}
         </label>
     ):null
     
     }

{error ?  <p className="error"> {error} </p>: null }
</div>
)

export default FormInput