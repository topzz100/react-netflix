import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../../../app/store"
import { server } from "../../../mocks/server";
import ListItem from "../ListItem"
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from "../../../utils/test-utils";

const MockListItem = () => {
    return (
          <BrowserRouter>
            <ListItem />
          </BrowserRouter>
    )
}
// const server = setupServer(
//   rest.get("/api", (req, res, ctx) => {
//     return res(ctx.json({ original_name: "Thor" }));
//   })
// );
describe('listItem component', () => {

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
    it('should show name', async() => {
    renderWithProviders(<MockListItem/>);
    const imgElement = await waitFor(() => screen.getByRole('imgContent'))
    expect(imgElement).toBeInTheDocument()
  })
  it('should show info on hover', async() => {
    renderWithProviders(<MockListItem/>);
    const moreContainer = screen.getByRole('moreInfo')
    const itemCon = screen.getByRole('itemContainer')
    userEvent.hover(itemCon)
    expect(moreContainer).toBeInTheDocument()
  })
   it('should show img', async() => {
    renderWithProviders(<MockListItem/>);
    const imgElement = await waitFor(() => screen.getByRole('imgContent'))
    expect(imgElement).toHaveAttribute("src", undefined)
  })
})