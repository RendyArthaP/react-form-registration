import React from 'react'
import useForm from '../src/customhooks/useForm';
import validate from './validateInfo';

const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(
    submitForm,
    validate
  )

  return (
    <div className="flex flex-col justify-center mx-auto mt-10 text-center border border-black sm:w-full md:w-1/3">
      <h1 className="text-2xl font-bold py-8">Sign Up Here</h1>
      <form 
        className="flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col pb-4">
          <label className="text-left">Username</label>
          <input 
            type="text" 
            placeholder="Enter Your Username"
            className="sm:w-full md:w-64 border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (<p className="text-red-500">{errors.name}</p>)}
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Email</label>
          <input 
            type="Email" 
            placeholder="Enter Your Email"
            className="sm:w-full md:w-64 border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (<p className="text-red-500">{errors.email}</p>)}
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Born At:</label>
          <select 
            className="sm:w-full px-10 md:w-64 border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="bornAt"
            value={values.bornAt}
            onChange={handleChange}
          >
            <option>Born:</option>
            <option>Jakarta</option>
            <option>Surabaya</option>
            <option>Flores</option>
            <option>Manado</option>
          </select>
          {errors.bornAt && (<p className="text-red-500">{errors.bornAt}</p>)}
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Gender</label>
          <select 
            className="sm:w-full md:w-64 border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option>Choose the gender:</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.gender && (<p className="text-red-500">{errors.gender}</p>)}
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Password</label>
          <input 
            type="password" 
            placeholder="Enter Your Password"
            className="sm:w-full md:w-64 border border-black roundedp-1 hover:outline-none focus:outline-none"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (<p className="text-red-500">{errors.password}</p>)}
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Re-type Password</label>
          <input 
            type="password" 
            placeholder="Retype your password"
            className="sm:w-full md:w-64 border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="retypePassword"
            value={values.retypePassword}
            onChange={handleChange}
          />
          {errors.retypePassword && (<p className="text-red-500">{errors.retypePassword}</p>)}
        </div>
        <span>
          Already have an account? Login <a href="/" className="underline font-bold">here</a>
        </span>
        <button className="rounded bg-black text-white w-20 h-8 my-4 hover:outline-none focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormSignup
