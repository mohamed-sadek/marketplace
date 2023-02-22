# Marketplace
A simple single page application for displaying and purchasing items using credit.

## How to run the project locally (Node and NPM required)

In the project root directory, you can run:

### `npm run demo`

Installs dependencies, builds the app for production and starts the proxy server.
Once the server is live, you can view and interact with the project at http://localhost:3000/

Alternatively, using the compressed file:
### `npm run serve`

Starts the proxy server.
Once the server is live, you can view and interact with the project at http://localhost:3000/

The project is also viewable at https://melodious-sprinkles-d9b50a.netlify.app/

## Technology Decisions
The app is build using **React** (Frontend UI framework) and **Koa** (Proxy server for fetching catalog items as well as web app server for serving the application itself for the demo)

**Typescript** was used as the language of choice to ensure type safety and catch potential bugs during development.

While my experience is mainly in Vue.js, I chose React since that is the technology used at Up42 and to learn more about React through a project context. 


## Project structrue
`./src/pages`
- Each page would have a folder here. 
- A page should not import a component from another page.
- Shared components would either live in a design system package or in a global components directory.
- Test files live within the same directory as the code they test.

`./src/globals` Global css rules defined here

`./public` Static assets. Ideally would be hosted on a CDN

`./build` Production ready version of the app


## Open Questions
- Can a user add the same item to the cart multiple times? 
- Should we disable the ability to add an item to cart if a user doesn't have enough credits?


## If I had more time
- End-to-end tests integration using Cypress or TestCafe
- More Unit tests covering various cases on the page level
- Dynamic url for the data fetching API (currently it's hardcoded for the demo)

## Several features can be useful here
- Filtering & Sorting for Catalog list
- Implement a quantity model (add multiples of the same item and adjust the quantity in the cart)
- Save cart for later (Either through client storage or server sessions)
- 

