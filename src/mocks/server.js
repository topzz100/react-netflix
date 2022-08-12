// src/mocks/server.js
import { rest } from 'msw';
import { setupServer } from 'msw/node'
// import { handlers } from './handlers'
// This configures a request mocking server with the given request handlers.

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get('https://api.themoviedb.org/3/movie/undefined', (req, res, ctx) => {
    return res(ctx.json({  original_title: "Thor", overview: "This is Thor", id: 113 }))
  }),
  // Match a POST request issued against the same origin
  // as the current application.
  rest.get("https://api.themoviedb.org/3/movie/popular", (req, res, ctx) => {
    return res(ctx.json([{  original_title: "Thor", id: 113 }]));
  }),
  rest.get("https://api.themoviedb.org/3/movie/top_rated", (req, res, ctx) => {
    return res(ctx.json( [{ original_title: "Thor", id: 113 }]));
  })
]

export const server = setupServer(...handlers);