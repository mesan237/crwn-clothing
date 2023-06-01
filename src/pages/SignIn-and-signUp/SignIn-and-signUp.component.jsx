import React from 'react'

import './SignIn-and-signUp.styles.scss'
import SingIn from '../../components/Sign-in/Sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SingIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp