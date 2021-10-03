import './css/mystyles.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Yoga from './pages/Yoga'
import Home from './pages/Home'
import Eating from './pages/Eating'
import { Switch, Route } from 'react-router-dom'
import Courses from './pages/Course'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/course'>
          <Courses />
        </Route>
        <Route path='/eating'>
          <Eating />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/yoga'>
          <Yoga />
        </Route>
      </Switch>
    </div>
  )
}

export default App
