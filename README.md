# Mentored Airtable Tutorial
## Goal
For this demo, mentored developers should learn to use the Airtable API and put to practice the content from their API lecture. Additionally, they'll build on their knowledge of React. Important points of the demo are state and effect hooks, properties of components, and APIs. Also go over .env files and the importance!

### Conceptual Checklist
- [ ] How the use React hooks and the purpose of the state and effect hooks (State is a component memories | Effect is the side effect of a component)
- [ ] Properties are immutable, so how can we use State to bypass this and pass dynamic information down to components
- [ ] Why APIs are useful and the structure of requests (URLs, Response Fields, Headers, etc.)

## TODOs
Go over the code in `App.js` with the developers and highlight important parts of code. For a challenge, encourage them to code alongside you! Create an env file as well for the devs that stores the token and other useful environment variables. There is a solution `App.js` in the directory `./solution/App.js`. 

### TODO Checklist
- [ ] Send out appropriate API auth tokens, table ids, etc. (found in your .env file)
- [ ] Go over the file structure of the React app (including the `.env` file)
- [ ] Remove the React strict mode tag in `index.js`
- [ ] Add a useEffect function such that when we initially mount, we make a request to the Airtable endpoint
- [ ] Create state to store the records queried, the tableIDs, and a global object to store the tableIDs
- [ ] Iterate through all records and create item box components for each one
- [ ] Add table switching functionality to the `NavBar` component when clicking

## Notes
If Kennedy deletes the Airtable with the contents, please just create another one and put the tokens and other necessary variables in the `.env` file. You will be sharing these tokens and ids with the devs so scope it accordingly.

<br>

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
