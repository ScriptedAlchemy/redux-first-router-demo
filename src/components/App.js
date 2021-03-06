import React from 'react'
import { hot } from 'react-hot-loader/root'

import DevTools from './DevTools'
import Sidebar from './Sidebar'
import Switcher from './Switcher'

import styles from '../css/App'

const App = () => (
  <div>
    <div className={styles.app}>
      <Sidebar />
      <Switcher />
    </div>

    <DevTools />
  </div>
)

export default hot(App)
