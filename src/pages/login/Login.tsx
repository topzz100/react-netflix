import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="top">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="" />
      </div>
      <div className="center">
        <form action="">
          <h4>
            Sign In
          </h4>
          <input type="text" placeholder='email or phone number'/>
          <input type="password" name="" id="" placeholder='password'/>
          <button>Sign In</button>
          <p>New to Netflix? <b>Sign up now.</b></p>
          <p>This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b></p>
        </form>
      </div>
    </div>
  )
}

export default Login