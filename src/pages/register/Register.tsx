import { useRef, useState } from 'react'
import './register.scss'

const Register = () => {
  const [email, setEmail] = useState<string|null>(null)
  const [password, setPassword] = useState<string|null>(null)

  const emailRef = useRef<HTMLInputElement|null>(null)
  const passwordRef = useRef<HTMLInputElement|null>(null)
  const handleEmail = () => {
    if(null !== emailRef.current ) 
    setEmail(emailRef.current.value)
  }
  const handleSubmit = ()=>{
    null !== passwordRef.current &&
    setPassword(passwordRef.current.value)
  }
  return (
    <div className='register'>
      <div className="top">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/3HCWZMP7PFGY3OJJPFHIX5O2VI.png" alt="" />
        <button>
          Sign In
        </button>
      </div>
      <div className="center">
        <h3>Unlimited movies, TV shows, and more.</h3>
        <h5>Watch anywhere. Cancel anytime</h5>
        <p>Ready to watch?Enter your email to create or restart your membership.</p>
        {
          !email?
        <div className="enter-box">
          <input type="email" placeholder='email'ref={emailRef} />
          <button onClick={handleEmail}>Get started</button>
        </div>:
        <form className="enter-box">
          <input type="password" placeholder='password' ref={passwordRef} />
          <button onClick={handleSubmit}>Start</button>
        </form>
        }
      </div>
    </div>
  )
}

export default Register