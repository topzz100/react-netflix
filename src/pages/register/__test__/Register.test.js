import { render, screen } from '@testing-library/react'
import Register from '../Register'

describe('login', ()=>{
  test('should show email input on initial render', ()=>{
    render(<Register/>)
        const inputElement = screen.getByPlaceholderText(/email/i);
        expect(inputElement).toBeInTheDocument();
  })
})