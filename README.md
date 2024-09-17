9/09/2024

1. Create the app:
   npx create-react-app my-app --template typescript

2. Install redux
   npm install react-redux

3. Optimize pics
   https://tinypng.com

4. Install components for CSS
   npm install reactstrap react react-dom
   npm install --save bootstrap
   npm i react-router-dom
   npm i bootstrap-icons

5. Install prettier (convert into clean code for deploying in github)
   5.1 Install package
   npm install --save-dev --save-exact prettier
   5.2 Run this command in CLI:
   npm install --save-dev husky lint-staged
   npx husky init
   node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
   5.3 In package.json, right after "eslintConfig" script:
   {
   "lint-staged": {
   "\*_/_": "prettier --write --ignore-unknown"
   }
   }

6. Make it a PWA:
   6.1 Create serviceWorker.ts and fill the content in robotsfriend-app
   6.2 Website to generate favicon:
   https://realfavicongenerator.net
   6.3 Get a image that I will use as iconand load it in the page above
   6.4 Download the package and copy into public directory
   6.5 copy the code into public/index.html, like I did with "robotsfriends-app"
   6.6 adjust icon size in public/manifest.json, like I did with "robotsfriends-app"

7. Deploy in GitHub
   7.1 Install package:
   npm install gh-pages

   7.2 Create HomePage property in package.json. Everything is in the documentation:
   "homepage": https://[username].github.io/[repository name],
   "homepage": "https://carloscfgos1980.github.io/PWA-FunCuba",

   7.3 Script to run the command:
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"

8. React Router
   https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf

8.1 App.tsx => Implemente React Routes
const router = createBrowserRouter(
createRoutesFromElements(
.....
)
)

return (

<div className="App">
<RouterProvider router={router}/>
</div>
);

8.2 HunNav.tsx => Routes in the NavBar
import {NavLink} from 'react-router-dom';

        return (
            <nav className='mt-5 mb-2'>
                <NavLink to='/'>
                    <span>Home</span>
                </NavLink>
                ...
        )

9. Work in the horizontal align (justify) and vertical (align) with containers and flex-box in order to prepare the Header and the Footer. This part is ready

10. Import a image. That took me a lof of time to figure it out!
    <img src={`${process.env.PUBLIC_URL}/dos_mares1.jpg`}
    alt="dos mares" />

- The pics most be "public" directory

11. json server to mock database. Root of the app, create "data/de.json"
    run in a different terminal:
    npx json-server --watch data/db.json --port 8000

17/09/2024
uffff bunch of stuff I have tried! I git airB page ready:
AirB serves:
Cuba component
Form. This loop over cityData
Model
Div:
~ description city
~ carousel airBnb of selected city

- Model shows up when I click in a AirBnB
  Model has another carousel with the pics of the selected airBnB

when media query small, there are not arrow to wipe the images so I placed a message for this query (cellphone) to inform people they neeed to wipe the images
