import React from 'react'
import useForm from '../src/customhooks/useForm';
import validate from './validateInfo';

const FormSignup = () => {
  const {handleChange, values, handleSubmit, errors} = useForm(validate)

  return (
    <div className="flex flex-col justify-center text-center">
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
            className="border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Email</label>
          <input 
            type="Email" 
            placeholder="Enter Your Email"
            className="border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Born At:</label>
          <select 
            className="border border-black rounded px-10 p-1 hover:outline-none focus:outline-none"
            name="bornAt"
            value={values.bornAt}
            onChange={handleChange}
          >
            <option>Jakarta</option>
            <option>Surabaya</option>
            <option>Flores</option>
            <option>Manado</option>
          </select>
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Gender</label>
          <select 
            className="border border-black rounded px-1 p-1 hover:outline-none focus:outline-none"
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option>Choose the gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Password</label>
          <input 
            type="password" 
            placeholder="Enter Your Username"
            className="border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-left">Re-type Password</label>
          <input 
            type="password" 
            placeholder="Enter Your Username"
            className="border border-black rounded p-1 hover:outline-none focus:outline-none"
            name="retypePassword"
            value={values.retypePassword}
            onChange={handleChange}
          />
        </div>
        <span>
          Already have an account? Login <a href="#" className="underline font-bold">here</a>
        </span>
        <button className="rounded bg-black text-white w-20 h-8 my-4 hover:outline-none focus:outline-none">
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormSignup
