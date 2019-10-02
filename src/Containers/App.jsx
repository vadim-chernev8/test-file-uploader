import React from 'react'
import { Route } from 'react-router-dom'

import { paths } from '../utils/constants'
/*
*
* Containers
*/
import Widget from './Widget';

export const App = () => {
  return (
    <div>
      <Route exact path={paths.root} component={Widget}/>
    </div>
  )
}
