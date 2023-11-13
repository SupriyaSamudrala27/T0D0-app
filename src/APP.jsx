/*import React from "react";
export default class App extends React.Component{
    render(){
        return <h1>I am class based component</h1>
    }
}*/



/*import React from "react";
const App=()=>{
    return <h1>I am Function based component</h1>
}
export default App;*/


/*import React from "react";
const App=()=>{
    const obj={
        name:"supriya"
}
return (
    <>
    <h1 className="">JSX</h1>
    <p>javascript and xml OR javascript xtension</p>
    <span>my name is {obj.name}</span>
    <p>sum of 3 and 5 is {3 + 5}</p>
    <label htmlFor=""></label>
    </>
)
    }
export default App;*/



/*import React from "react";
const App=()=>{
    const obj={
        name:"supriya",
        place:"darsi",
        sibling:"sneha",
        hero:"pawan kalyan"
        }
        let{name,place,sibling,hero}=obj
return (
    <>
    <h1 className="">JSX</h1>
    <p>javascript and xml OR javascript xtension</p>
    <span>my name is {obj.name}</span>
    <p>i am from {place}</p>
    <p>i came here with my sister {sibling}</p>
    <p>my favourite hero is {hero}</p>
    <p>sum of 3 and 5 is {3 + 5}</p>
    <p>multiplication of 3 and 5 is {3*5}</p>
    <label htmlFor=""></label>
    </>
)
    }
export default App;*/


/*import React,{useState} from "react";
const App=()=>{
    let [state,setState]=useState(0)
    console.log(state);
    const handleIncrement=()=>{
        setState(state+1);
    }
    const handleDecrement=()=>{
        setState(state-1);
    }
    const handleReset=()=>{
        setState(state=0);
    }

return (
    <>
    <h1>{state}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>
)
}
export default App*/


/*import React,{useState} from "react";
const App=()=>{
    let [state,setState]=useState()
    console.log(state);
    const handleBiryani=()=>{
        setState("Biryani");
    }
    const handleManchuria=()=>{
        setState("chicken manchuria");
    }
    const handleGulab=()=>{
        setState("gulab jamun");
    }

return (
    <>
    <p>My favourite food is</p>
    <h1>{state}</h1>
    <button onClick={handleBiryani}>Biryani</button>
    <button onClick={handleManchuria}>chicken manchuria</button>
    <button onClick={handleGulab}>gulab jamun</button>
    </>
)
}
export default App*/

/*import React from "react";
import Child from "./Child"

const App=()=>
{
    let print=()=>
    {
        console.log("suppi");
    }
    let person={
        name:"krishna",
        place:"brundavanam",
    }
    return(
        <>
        <h1>iam parent component</h1>
        <Child val={27} a={print} b={person}/>
        </>
    )
}
export default App*/

/*import React from "react";
import Child from "./Child";
const App=()=>{
return(
    <>
     <h1>i am parent child</h1>
     <child>i m child</child>
    </>
)
}

export default App*/

/*import React from "react";
import Child from "./Child";
const App=()=>{
    return(
        <>
        <h1>i am parent component</h1>
        <Child name="sneha"/>
        </>
    )

}
export default App*/

/*import React from 'react'
import Child1 from './PropDrilling/Child1'

const APP = () => {
  return (
    <>
    <Child1 name="sneha"/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import Child1 from './PropDrilling/Child1'


const APP = () => {
  return (
    <>
    <Child1 name="supriya"/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ContextChild1 from './Context/ContextChild1'
import { UserName } from './Context/GlobalContext'

const APP = () => {
  return (
    <>
    <UserName.Provider value={"rahul sir"}> 
    <ContextChild1/>
    </UserName.Provider>
    </>
  )
}

export default APP*/
/*import React from 'react'
import ContextChild1 from "./Context/ContextChild1"
import { UserName } from './Context/GlobalContext'

const APP = () => {
  return (
    <>
    <UserName.Provider value="supriya">
      <ContextChild1/>
      </UserName.Provider>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ContextChild1 from './Context/ContextChild1'
import { UserName } from './Context/GlobalContext'

const APP = () => {
  return (
    <>
    <UserName.Provider>
    <ContextChild1/>
    </UserName.Provider>
    </>
  )
}

export default APP*/

/*import React from 'react'
import CRcase1 from './ConditionalRendering/CRcase1'

const APP = () => {
  return (
    <>
    <CRcase1/>
    </>
  )
}

export default APP*/


/*import React from 'react'
import CRcase2 from './ConditionalRendering/CRcase2'

const APP = () => {
  return (
    <>
    <CRcase2/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import InlineCss from './Properties/InlineCss'

const APP = () => {
  return (
    <><InlineCss/></>
  )
}

export default APP*/


/*import React from 'react'
import InlineCss from './Properties/InlineCss'

const APP = () => {
  return (
    <InlineCss/>
  )
}

export default APP*/

/*import React from 'react'
import GlobalCss from './Properties/GlobalCss'
import "./GlobalCss.css"

const APP = () => {
  return (
    <>
    <GlobalCss/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ModuleCss from './Properties/ModuleCss'

const APP = () => {
  return (
    <>
    <ModuleCss/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import UncontrolledComponent from './Forms/UncontrolledComponent'

const APP = () => {
  return (
    <>
    <UncontrolledComponent/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import Child from './Child'

const APP = () => {
  const fav=()=>{
    console.log("krishna");
    console.log("radha");
  }
  let c={
    hero:"ranveer singh",
    movie:"befikre"
  }
  return (
    <>
    <Child a="sneha" dob={7} b={fav} d={c}/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ContextChild1 from './Context/ContextChild1'
import { UserName } from './Context/GlobalContext'

const APP = () => {
  return (
    <>
    <UserName.Provider value="soup"> 
    <ContextChild1/>
    </UserName.Provider>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ControlledComponent from './Forms/ControlledComponent'

const APP = () => {
  return (
    <>
    <ControlledComponent/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import GlobalCss from './Properties/GlobalCss'
import "./GlobalCss.css"

const APP = () => {
  return (
    <>
    <GlobalCss/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import GlobalCss from './Properties/GlobalCss'
import "./GlobalCss.css"

const APP = () => {
  return (
    <>
    <GlobalCss/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import ControlledComponent from './Forms/ControlledComponent'

const APP = () => {
  return (
    <div>
      <ControlledComponent/>
    </div>
  )
}

export default APP*/

/*import React from 'react'
import LifeCycle from './LifeCycle/LifeCycle'

const APP = () => {
  return (
    <div>
      <LifeCycle/>
    </div>
  )
}

export default APP*/

/*import React from 'react'
import Effect from './useEffect/Effect'

const APP = () => {
  return (
    <>
    <Effect/>
    </>
  )
}

export default APP*/

/*import React from 'react'
import Axios from './Axios/Axios'

const APP = () => {
  return (
    <div>
      <Axios/>
    </div>
  )
}

export default APP*/

/*import React from 'react'
import Portals from './Portals/Portals'

const APP = () => {
  return (
    <div>
      <Portals/>
    </div>
  )
}

export default APP*/

/*import React, { useState } from 'react'
import PortalsTask from './Portals/PortalsTask'
import './Portals.css'

const APP = () => {
  let[state,setState]=useState(false);
  let handleState=()=>{
    setState(!state)

  }
  return (
    <>
      <button onClick={handleState}>Show Portal</button>
      {state?<PortalsTask func={handleState} />:<></>}
    </>
  )
}

export default APP*/

/*import React from 'react'
import Greet from './ErrorBoundaries/Greet'
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary'

const APP = () => {
  return (
    <>
    <ErrorBoundary>
      <Greet name="sneha"/>
      <Greet name="supriya"/>
      <Greet name="mumma"/>
      </ErrorBoundary>
    </>
  )
}

export default APP*/

/*import React from 'react'
import Greet from './ErrorBoundaries/Greet'
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary'

const APP = () => {
  return (
    <>
    <ErrorBoundary>
      <Greet name="supriya"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Greet name="sneha"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Greet name="mumma"/>
      </ErrorBoundary>
    </>
  )
}

export default APP*/


/*import React from 'react'
import ParentComponent from './PureComponent/ParentComponent'

const APP = () => {
  return (
    <div>
      <ParentComponent/>
    </div>
  )
}

export default APP*/

/*import React from 'react'
import ParentMemo from './Memo/ParentMemo'

const APP = () => {
  return (
    <div>
      <ParentMemo/>
    </div>
  )
}

export default APP*/


/*import React from 'react'
import CounterMemo from './UseMemo/CounterMemo'

const APP = () => {
  return (
    <div>
      <CounterMemo/>
    </div>
  )
}

export default APP*/


/*import React from 'react'

const APP = () => {
  return (
    <div>APP</div>
  )
}

export default APP*/

/*import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import PageNotFound from './Router/PageNotFound'

const APP = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path='/about' element=<About/> />
      <Route path='/contact' element=<Contact/> />
      <Route path="*" element=<PageNotFound/> />

      
    </Routes>
    </BrowserRouter>
  )
}

export default APP*/

/*import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import PageNotFound from './Router/PageNotFound'

const APP = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path='/about' element=<About/> />
      <Route path='/contact' element=<Contact/> />
      <Route path="*" element=<PageNotFound/> />

      
    </Routes>
    </BrowserRouter>
  )
}

export default APP*/

/*import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import PageNotFound from './Router/PageNotFound'
import Profile from './Router/SubDetails/Profile'
import Feed from './Router/SubDetails/Feed'
import Notifications from './Router/SubDetails/Notifications'

const APP = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path='/about' element=<About/> >
      <Route path='/about/profile' element=<Profile/> />
      <Route path='/about/feed' element=<Feed/> />
      <Route path='/about/notifications' element=<Notifications/> />
      </Route>
      <Route path='/contact' element=<Contact/> />
      <Route path="*" element=<PageNotFound/> />

      
    </Routes>
    </BrowserRouter>
  )
}

export default APP*/

/*import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Contact from './Router/Contact'
import PageNotFound from './Router/PageNotFound'
import Profile from './Router/SubDetails/Profile'
import Feed from './Router/SubDetails/Feed'
import Notifications from './Router/SubDetails/Notifications'
import MainAbout from './Router/SubDetails/MainAbout'

const APP = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path='/about' element=<MainAbout/> >
      <Route index element=<About/> />
      <Route path='/about/profile' element=<Profile/> />
      <Route path='/about/feed' element=<Feed/> />
      <Route path='/about/notifications' element=<Notifications/> />
      </Route>
      <Route path='/contact' element=<Contact/> />
      <Route path="*" element=<PageNotFound/> />

      
    </Routes>
    </BrowserRouter>
  )
}

export default APP*/

/*import React from 'react'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './Router/Home'




let router=createBrowserRouter((
  {
    path:"/",
    element:<Home/>

  },
  {
    path:"/about",
    element: <About/>,
    




},
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/*",
    element:<PageNotFound/>
  }
))

const APP = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default APP*/


/*import React from 'react'
import Todo from './Todo'

const APP = () => {
  return (
    <>
    <Todo/>

    </>
  )
}

export default APP*/




/*import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Crud App/Home'
import Create from './Crud App/Create'
import Read from './Crud App/Read'
import Update from './Crud App/Update'

const APP = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default APP*/

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Crud App/Home'
import Update from './Crud App/Update'
import Create from './Crud App/Create'
import Read from './Crud App/Read'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/Update/:id" element={<Update/>}/>
          <Route path="/Read/:id" element={<Read/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App