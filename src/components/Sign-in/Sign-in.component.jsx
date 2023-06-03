import React from 'react'

import FormInput from '../Form-input/FormInput.component'
import './Sign-in.component.styles.scss'
import CustomButtom from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

class SingIn extends React.Component {
  constructor() {
   super()

   this.state = {
      email: '',
      password: ''
   } 
  }

  HandleSubmit = async(e) => {
   const {email, password} = this.state
   e.preventDefault()
   try{
      await signInWithEmailAndPassword(auth, email, password)
   }catch(error){
      console.log(error)
   }

   this.setState({email: '', password: ''})
  }

  HandleChange = (e) =>{
   const { value, name} = e.target

   this.setState({[name] : value})
  }
  
   render() {

   return (
    <div className='sign-in'>
      <h2>I already have an account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.HandleSubmit}>
         <FormInput 
            name='email'
            type='email'
            label='email'
            handleChange={this.HandleChange} 
            value={this.state.email} 
            required 
         />
         <FormInput
            name='password'
            type='password'
            label='password'
            handleChange={this.HandleChange} 
            value={this.state.password} 
            required 
         />
         <div className='buttons'>
            <CustomButtom type='submit' >Sign In</CustomButtom>
            <CustomButtom type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButtom>
         </div>
      </form>
    </div>
   )
   }
}

export default SingIn