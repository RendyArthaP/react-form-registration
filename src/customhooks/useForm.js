import React, {useState, useEffect} from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    bornAt: '',
    gender: '',
    password: '',
    retypePassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
    setIsSubmitting(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(callback)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors])

  return {handleChange, values, handleSubmit, errors}
}

export default useForm
