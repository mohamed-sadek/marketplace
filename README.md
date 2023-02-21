ara# Up42 Marketplace
A simple single page application for displaying and purchasing items using credit.

## Technology Decisions
The app is build using **React** (Frontend UI framework) and **Koa** (Proxy server for fetching catalog items as well as web app server for serving the application itself)

**Typescript** was used as the language of choice to ensure type safety and catch potential bugs during development.

While my experience is mainly in Vue.js, I chose React since that is the technology used at Up42 and to learn more about React through a project context. 


## Project structrue
./src includes all the Frontend files

## Open Questions
- Can the user add the same item to the cart multiple times? 
- Should we disable the ability to add to cart if the user is out of credits?


## If I had more time
- End-to-end tests integration using Cypress or TestCafe
- More Unit tests covering various cases
- 

## How to run the project

In the project directory, you can run:

### `npm run demo`

Installs dependencies, builds the app for production and starts the proxy server.
Once the server is live, you can view and interact with the project at http://localhost:3000/
