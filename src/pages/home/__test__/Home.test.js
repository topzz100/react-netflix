import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../../../app/store"
import { server } from "../../../mocks/server";
import userEvent from '@testing-library/user-event'
import Home from "../Home";
import { renderWithProviders } from "../../../utils/test-utils";
import { act } from "react-dom/test-utils";

const MockHomeItem = () => {
    return (
          <BrowserRouter>
            <Home />
          </BrowserRouter>
    )
}
// const server = setupServer(
//   rest.get("/api", (req, res, ctx) => {
//     return res(ctx.json({ original_name: "Thor" }));
//   })
// );
describe('home component', () => {

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('movie link present', async() => {
    renderWithProviders(<MockHomeItem/>);
    const navLink = screen.getByRole('movieLink')
    expect(navLink).toBeInTheDocument()
  })
  // it('movie link click', async() => {
  //   renderWithProviders(<MockHomeItem/>);
  //   const navLink = screen.getByRole('movieLink')
  //   // const featuredCon = await waitFor(() => screen.getByRole('featuredContainer'))
  //   const headerElement = await waitFor(() => screen.getByRole('heading', {level: 3}))
  //   act(() => {
  //     userEvent.click(navLink)

  //   })
  //   expect(headerElement).toHaveTextContent("Thor")
  // })
})