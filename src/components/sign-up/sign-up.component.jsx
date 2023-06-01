import React from 'react'

import FormInput from '../Form-input/FormInput.component'
import CustomButtom from '../custom-button/custom-button.component'
import { auth, createProfileUserDocument } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './sign-up.styles.scss'

class SignUp extends React.Component{
  constructor() {
    super()

    this.state = {
      displayName: '',
      password: '',
      email: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    
    this.setState({[name] : value})
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    const {displayName, password, email, confirmPassword} = this.state
    
    if(password !== confirmPassword){
      alert('The password is not the same')
      return
    }

    try{
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials.user)
        createProfileUserDocument(userCredentials.user, {displayName})
      }).catch((error) => 
        console.log(error)
      )
      // console.log(userCredentials)

      this.setState({
        displayName: '',
        password: '',
        email: '',
        confirmPassword: ''
      })
    }catch(error){
      console.log(error)
    }
  }

  render() {

    const {displayName, password, email, confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span className='title'>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput 
            type="text"
            name='displayName'
            onChange={this.handleChange}
            value={displayName}
            label='display name'
            required
          />
          <FormInput 
            type="email"
            name='email'
            onChange={this.handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput 
            type="password"
            name='password'
            onChange={this.handleChange}
            value={password}
            label='password'
            required
          />
          <FormInput 
            type="password"
            name='confirmPassword'
            onChange={this.handleChange}
            value={confirmPassword}
            label='confirm password'
            required
          />

          <CustomButtom type='submit'> Sign up </CustomButtom>
        </form>
      </div>
    )
  }
}

export default SignUp