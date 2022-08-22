import { fireEvent, render, screen,  } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import { server } from "../../../mocks/server"
import { renderWithProviders } from "../../../utils/test-utils"
import List from "../List"

const mockedFunction = jest.fn();

const MockList = ({title}) => {
 return ( <BrowserRouter>
    <List title={title}/>
  </BrowserRouter>)
}
describe('List component', () => {
  beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

  test('contains title', () => {
      renderWithProviders(<MockList title = 'Continue'/>)

  const headerElement = screen.getByText('Continue')
    expect(headerElement).toBeInTheDocument()
  })

  test('go left', () => {
    renderWithProviders(<MockList/>)

    const rightdirection = screen.getByRole('directionRight')
    //click
    //show left direction 
    expect(rightdirection).toBeIn()
  })

  //  test('display name of movie', async() => {
  //   renderWithProviders(<MockListItem id= {555}/>)
  //   //const movieName = await screen.findByRole('heading', {level : 5},)
  //   const movieName = await screen.findByText(/Thor/i)
  //   // expect(movieName).toHaveTextContent(/Thor/i)
  //   expect(movieName).toBeInTheDocument()
  // })
})