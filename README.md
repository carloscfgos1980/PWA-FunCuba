9/09/2024

# 1. Create the app:

npx create-react-app my-app --template typescript

# 2. Install redux

npm install @reduxjs/toolkit react-redux

# 3. Optimize pics

https://tinypng.com

# 4. Install components for CSS

npm install reactstrap react react-dom
npm install --save bootstrap
npm i react-router-dom
npm i bootstrap-icons

# 5. Install prettier (convert into clean code for deploying in github)

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

# 6. Make it a PWA:

6.1 Create serviceWorker.ts and fill the content in robotsfriend-app
6.2 Website to generate favicon:
https://realfavicongenerator.net
6.3 Get a image that I will use as iconand load it in the page above
6.4 Download the package and copy into public directory
6.5 copy the code into public/index.html, like I did with "robotsfriends-app"
6.6 adjust icon size in public/manifest.json, like I did with "robotsfriends-app"

# 7. Deploy in GitHub

7.1 Install package:
npm install gh-pages

7.2 Create HomePage property in package.json. Everything is in the documentation:
"homepage": https://[username].github.io/[repository name],
"homepage": "https://carloscfgos1980.github.io/PWA-FunCuba",

7.3 Script to run the command:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# 8. React Router

https://www.youtube.com/watch?v=OMQ2QARHPo0&list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf

8.1 install npm package:
npm i react-router-dom

8.2 App.tsx => Implemente React Routes
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

# 9. Work in the horizontal align (justify) and vertical (align) with containers and flex-box in order to prepare the Header and the Footer. This part is ready

# 10. Import a image. That took me a lof of time to figure it out!

    <img src={`${process.env.PUBLIC_URL}/dos_mares1.jpg`}
    alt="dos mares" />

- The pics most be "public" directory

# 11. json server to mock database. Root of the app, create "data/de.json"

    run in a different terminal:
    npx json-server --watch data/db.json --port 8000

# 16/09/2024

# 12. Implement carousel

    12.1 Install carousel npm package. This is was easier than using bootstrap components
    npm i better-react-carousel

# 13. Create a folder (ContentText) that contains all the files with the text data:

- airData.ts
- citiesData.ts
- pagesContent.ts
- chillingData.ts

# 17/09/2024

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

- Took me many hours to figure it out where was the bug. It is was "homepage" script in package json for the github pages. I deleteed this line and everything works perfectly!

18/09/2024

# 14. ChillOut page

14.1 Render Cuba component and pass the data to fit ChillOut page

14.2 Render FormSelect and pass:
getCityId={getCityId}
items={citiesData}

14.3 Render FormChill and pass:
getCityId={getChillId} items={selectedChillxCity}

14.4 Render Selected chill activity's name, description, image

- This part was easy, I reuse most of the functions from AirB

# 19/09/2024 - 24/09/2024

# 15. PlanTrip

It has 4 main components:

1. calandar to select days for the whole trip
2. form to select the city
3. form to select days of the destination, taxi, AirBnB, ChillOut.

- Yet AirBnB and ChillOut form to complete

4. Display the data (also to be done)

I started to use but gave a bug so I changed to
import { memo } from "react";

I took a lof of time coz I need to implement the store, change everything from "hooks" to redux. It was too messy with hooks, to many states to handle

# 25/09/2024 - 7/10/2024

# Plan Trip.

I have build this section, at least 3 times! I did't have a clear idea what to do. I started with hooks but the coding was too messy so i switched to redux... now it looks a lot better

tripPlan.tsx:
Sections:

1. trip-introduction: Explanation about this section
2. trip-calendar: calendar form and a table showing the values( tripDateStart, tripDateEnd, totalDays, RemainedDays)
3. destionations: table with route data( Route, arrive, departure, days)
4. get-city: form to select the city and button to start planning the route (this display the form)
5. form: {
   5.1 route-date: calendar form and the amount of days
   5.2 add-taxi: check box to add taxi
   5.3 add-airB (import AddAirB component)
   5.4 add-chill (import AddChilling component)
   }
6. button (Add route)

filteredTripPlan.ts

1. typres (AirBnB, ChillOut, StartTrip, Route, Trip, PlanTripState, AddAirBnB). This type I added according to my needs. I export them in case that I need them in a component
2. Create the initial state (initialState: PlanTripState)
3. Function to calculate diference in days: calculateDays()
4. Function to get the previos location so I can calculate taxi's price: previousLocation()
5. reducers;{
   5.1 addStartTrip
   5.2 addTripEnd
   5.3 addStartRoute
   5.4 addTaxiPrice
   5.5 addAirBnB
   5.6 deleteAirBnB
   5.7 addChillOut
   5.8 deleteChill
   5.9 addRoute
   }

**Note:**

1. I use .toDateString(); method to display date, its a more firendleyed format
2. Re render this page so the forms go back to default setting:
   const [key, setKey] = useState(0)
   const getRoute = () => {
   dispatch(addRoute());
   setDisplay1("none");
   setKey(currentKey => currentKey + 1)
   }

   return(
   <div key={key}...>
   )

3. I use a React component for the date:

import { memo } from "react";

const DatePicker = memo(({ selectedDate, onDateChange }: any) => {
return <input type="date" value={selectedDate} onChange={onDateChange} />;
});

return(
<DatePicker selectedDate={dateStart} onDateChange={getDateStart}
)

# 9/10/2024

# TripPlan

I place the table in a separate components, it looks cleaner and also I plan to re use in the modal for the trip info
