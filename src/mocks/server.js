// src/mocks/server.js
import { rest } from 'msw';
import { setupServer } from 'msw/node'
// import { handlers } from './handlers'
// This configures a request mocking server with the given request handlers.

const res = {
  data: {
    id: 555,
    original_title: 'Thor',
    original_name: "Thor",
    overview: 'Thor'
  }
}
const resArr = {
  data : {
    results: [
      {
        id: 1,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 2,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 3,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 4,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 5,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 6,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 7,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 8,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 9,
        original_name: 'Thor',
        original_title: 'Thor'
      },
       {
        id: 10,
        original_name: 'Thor',
        original_title: 'Thor'
      },
    ]
  }
}
export const handlers = [
  // Match a GET request to a third-party server.
  rest.get(`https://api.themoviedb.org/3/movie/555`, (req, res, ctx) => {
    return res(ctx.json(res))
  }),
    rest.get(`https://api.themoviedb.org/3/tv/555`, (req, res, ctx) => {
    return res(ctx.json(res))
  }),
  // Match a POST request issued against the same origin
  // as the current application.
  rest.get("https://api.themoviedb.org/3/movie/popular", (req, res, ctx) => {
    return res(ctx.json(resArr));
  }),
  rest.get("https://api.themoviedb.org/3/movie/top_rated", (req, res, ctx) => {
    return res(ctx.json( resArr));
  })
]

export const server = setupServer(...handlers);