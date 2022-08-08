import './login.scss'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {  
  const emailRef = useRef<HTMLInputElement|null>(null)
  const passwordRef = useRef<HTMLInputElement|null>(null)
  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault()
    if(emailRef.current && passwordRef.current){  
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
    }
  }

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
          <input 
            type="text" 
            placeholder='email or phone number' 
            ref={emailRef}
          />
          <input 
            type="password" 
            placeholder='password' 
            ref={passwordRef}
          />
          <button  onClick={handleLogin}>
            Sign In
          </button>
                  
          <p>New to Netflix? <b>Sign up now.</b></p>
          <p>This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn more</b></p>
        </form>
      </div>
    </div>
  )
}

export default Login