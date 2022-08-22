import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { server } from "../../../mocks/server"
import { renderWithProviders } from "../../../utils/test-utils"
import ListItem from "../ListItem"

const MockListItem = (id) => {
 return ( <BrowserRouter>
    <ListItem id ={id}/>
  </BrowserRouter>)
}
describe('Home page', () => {
  beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

  test('contains image', () => {
    renderWithProviders(<MockListItem/>)
    const itemImage = screen.getByRole('itemImage')
    expect(itemImage).toBeInTheDocument()
  })
  //  test('display name of movie', async() => {
  //   renderWithProviders(<MockListItem id= {555}/>)
  //   //const movieName = await screen.findByRole('heading', {level : 5},)
  //   const movieName = await screen.findByText(/Thor/i)
  //   // expect(movieName).toHaveTextContent(/Thor/i)
  //   expect(movieName).toBeInTheDocument()
  // })
})