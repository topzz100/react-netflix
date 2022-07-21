import { render, screen } from '@testing-library/react'
import Login from '../Login'

describe('login', ()=>{
  test('checking login input', ()=> {
   render(<Login/>)
   const inputElement = screen.getByPlaceholderText(/password/i)
  expect(inputElement).toBeInTheDocument();

  })
})