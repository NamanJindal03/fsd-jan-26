import { createRoot } from 'react-dom/client'
import React from 'react'


// import App from './App'
// import App from './states/App'
// import App from './todoApplication/app'
// import App from './states2/App'
// import App from './effects/App'
// import App from './refs/App'
// import App from './reducers/App'
// import App from './contextApi/App'
// import App from './reactRouter/mainSecondary'
// import App from './protectedRouting/mainSecondary'
// import App from './optimisations/App'
// import Counter from '../redux/Counter'
// import App from './redux/App'
import App from './redux2/App'


import './main.css'


createRoot(document.getElementById('root')).render(
    <>
      <App/>
    </>
)
