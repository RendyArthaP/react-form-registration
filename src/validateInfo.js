export default function validateInfo(values) {
  let errors = {}

  // Username
  if(!values.name.trim()) {
    errors.name = 'Please input your name here';
  } 
  
  // Email
  if(!values.email) {
    errors.email = 'Please input your email here';
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  // Born At
  if(!values.bornAt) {
    errors.bornAt = 'Please input your born here';
  }

  // Gender
  if(!values.gender) {
    errors.gender = 'Please input your gender here';
  }

  // Password
  if(!values.password) {
    errors.password = 'Please input your password here';
  } else if(values.password.length > 6) {
    errors.password = 'You need 6 characters or more'
  }

  // Re-type Password
  if(!values.retypePassword) {
    errors.retypePassword = 'Please re-type your password here';
  } else if(values.password !== values.retypePassword) {
    errors.retypePassword = 'Your password not match';
  } else if(values.password === values.retypePassword) {
    errors.retypePassword = 'Your password match';
  }
  return errors;
}