import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
  const [isSubmited, setIsSubmited] = useState(false)

  const submitForm = () => {
    setIsSubmited(true)
  }

  return (
    <div className="">
      <div>
        {/* <span>X</span> */}
        <div>
          <img src="" alt=""/>
        </div>
        {!isSubmited 
          ? (<FormSignup submitForm = {submitForm}/>) 
          : (<FormSuccess />)
        }
      </div>
    </div>
  )
}

export default Form
