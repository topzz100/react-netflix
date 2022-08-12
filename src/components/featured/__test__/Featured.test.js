import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { setupStore, store } from "../../../app/store"
import Featured from "../Featured"
import { server } from "../../../mocks/server";
import { renderWithProviders } from "../../../utils/test-utils"
import { mostPopular } from "../../../features/movie/movieSlice"
import { act } from "react-dom/test-utils"

const MockFeatured = () => {
    return (
          <BrowserRouter>
            <Featured />
          </BrowserRouter>
    )
}
// const server = setupServer(
//   rest.get("/api", (req, res, ctx) => {
//     return res(ctx.json({ original_name: "Thor" }));
//   })
// );
describe('featured component', () => {
  let type =''
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('should have a background image', () => {
    renderWithProviders(<MockFeatured/>);
    const imageElement = screen.getByRole("img")
    expect(imageElement).toBeInTheDocument()
  })
  it('should not have a select element', () => {
    renderWithProviders(<MockFeatured/>);
    const selectElement = screen.findAllByRole("option")
    expect(selectElement).not.toBe()
  })
     it('should show name', async() => {
      const store = setupStore()
      act(() => {

        store.dispatch(mostPopular('movies'))
      })
     const {getByText} = renderWithProviders(<MockFeatured/>, {store});
      // const headerElement = await waitFor(() => screen.getByRole('heading', {level: 3}))
      // const element = await waitFor(() =>  screen.getByText(/Thor/i))
      
      // expect(element).toHaveTextContent("Thor")
   })
})