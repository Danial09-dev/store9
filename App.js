import React from 'react'
import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles'

import Collection from './pages/collection/index'
import NotFound from './pages/NotFound'
import HomePage from './pages/homepage/HomePage'
import ProductDetailsCard from './pages/detail'
import Cart from './pages/cart'
import theme from './Theme'




function App() {



  return (

    <div style={{ overflow: 'hidden' }}>

      <ThemeProvider theme={theme}>

        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/collection'>
            <Collection />
          </Route>
          <Route path='/cart'><Cart /></Route>
          <Route path='/details/:id'> <ProductDetailsCard /> </Route>
          <Route path='*'>
            <NotFound />
          </Route>


        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App;










