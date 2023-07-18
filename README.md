# Introduction
- This is a paginated list of pictures from Pixabay portal. 
- Type your query in the search box to see images related to your query.
- You can go one page up or one page down by clicking on the arrows on left and right side of the page.
- Click on the image and you'll be taken profile of the user/owner who has uploaded the picture on Pixabay.

## Developer corner

| State Variables       |Description                       
|----------------------|-------------------------------|
|`pageNumber`          | the current page number       |
|`query`               | query string that the user entered in the box|

**Material UI**
The project uses **Material UI** as a component library. Also **Styled Components** are used
to style the components. 

**Home Icon**
When a user clicks on the home icon on the top-left corner of the page, we pull image data
for an empty query string. This way we see a generalised view of the available images on the pixabay website.

|Home Page| Page with Search Query|
|---------|-----------------------|
|![Home Page](../image-search/readmeImages/Screenshot%202023-07-18%20at%203.55.39%20PM.png)|![page with query](./readmeImages/Screenshot%202023-07-18%20at%203.56.02%20PM.png)

**Fetching of Images**
When the user types his/her query in the search box and clicks **Search**, they are shown results related to the search query. **fetch** is used to fetch images from pexel API, to learn more check the `useLoadImages`  custom hook in `src/Components/Home/utils.ts`.

**Increment/Decrement Arrow Icon hiding**
Arrow icons used to increment or decrement page are hidden if the user is on the first or last page. Similarly Arrow icons used to increment paginationNumber are also hidden.

**Pagination**
The user will be shown a pagination view from where he/she can choose a specific page number or choose to move up/down one page relative to the current page

![pagination](./readmeImages/Screenshot%202023-07-18%20at%203.57.44%20PM.png)

**User Prpfile**
When a user clicks on any of the images he/she is routed to the page where we can see information related to a user who has posted that particular image on Pixabay. We can see information related to likes, comments, tags and the username of the user. You can find more information in `ImagePage` in `src/Components/ImagePage`

![User profile](./readmeImages/Screenshot%202023-07-18%20at%203.57.21%20PM.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
