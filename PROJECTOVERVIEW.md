__#iCuida__
- Here the workflow of the iCuida Web App.

__General Setup__
- The General React project setup is as follows: 
- [X] [Create React App](https://github.com/facebook/create-react-app) 
- [X] [React router](https://www.npmjs.com/package/react-router)
- [V] [Redux setup](https://redux.js.org/introduction/installation), [DOCUMENTATION](https://redux.js.org/)
- [NEEDED?] [Create React Native](https://facebook.github.io/react-native/docs/getting-started) Based on [Write Once, Run Everywhere](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0?source=linkShare-a8269b9b7b42-1556841033&_branch_match_id=631442601197236156)

## PROJECT STRUCTURE folder:
- I propose the following __Folder Structure__ of the iCuida Web App:
```
icuida
├── README.md
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
  ├── components
  │  ├── User
  │    ├── Form
  │    │ ├── Form.jsx
  │    │ ├── Form.css
  │    ├── List.jsx
  │  ├── UI
  ├── screens
   ├── User
  │    ├── Form
  │    │ ├── Form.jsx
  │    │ ├── Form.css
  │    ├── List.jsx
  │  ├── Root.jsx
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

## User Stories:
__##Feature 1: Loader__
To load the app, we use a loading/spinner.
- [] If user click on iCuida ion, the web App will load.
- [] A loading icon/spinner bar will appear, while loading the app.
- [] Screen changes from blue to orange color.
- [] Loading may take max 3 sec.

__##Feature 2: Login & Signup__
Create a login and signup Page
User can only go to homepage, if signup/login after succesfull authentification.
User validation is needed, and Safe Authentication via Two-step verification on mobile is a requisitos to maintain safety. 
__SETUP__
- [] Create Login Form 
- [] Validate Login Form
- [] Add Page Components: Homepage, SignupPage, LoginPage, DashboardPage
- [] BACKEND: Nodejs, Express.js setup
- [] BACKEND: Authentification
- [] BACKEND: Authorize Routes
- [] BACKEND: API for user identification
- [] BACKEND: User data, generation and verification on backend.
__APP LOGIC__
- [] Click on login
- [] Go to separate route= login Route= Form
- [] Conditional: if login = succesfull, redirect user to dashboard (=homepage)
- [] Dashboard Route= Authorized, only authenticated users can go into web app homepage
- [] Conditional content: if user is authenticated, run II if not, message: please sign up/login.
- [] Conditional content: if user is ALREADY authenticated, go to dashboar (web app homepage).

_Example DOC_
[BookwormApp](https://github.com/Remchi/bookworm-react)
[BookwormApp-YouTube](https://www.youtube.com/watch?v=Pi5apIbuiYg&list=PLuNEz8XtB51KthRFiVt)
[PWA with Oauth](https://medium.com/@jonnykalambay/progressive-web-apps-with-oauth-dont-repeat-my-mistake-16a4063ce113)

__##Feature 3: HomePage with Categories__
- [] If App is loaded and customer is signed up/logged in, the homepage will show.
- [] On homepage all categories for questions and answers are stated with small icon, name in button or box.
- [] On click button, user goes to specific category.
  
 __##Feature 4: Static: Questions__
- [] 
- [] 
- [] 
- [] 
 __##Feature 5: Static: Answers__
- [] 
- [] 
- [] 
- [] 
 __##Feature 6: Dynamic: Questions+ add question__
- [] 
- [] 
- [] 
- [] 
 __##Feature 7: Dynamic: Answers- add answer__
- [] 
- [] 
- [] 
- [] 
