import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Seaction from './components/Layout/Seaction'
import About from './components/Pages/About'
import Food from './components/Pages/Food'
import Juice from './components/Pages/Juice'
import Oxygencylinder from './components/Pages/Oxygencylinder'
import Medicines from './components/Pages/Medicines'
import contectus from './components/Pages/Contectus'
import Moreinfo from './components/Pages/Moreinfo'
import Homescreen from './components/Layout/Users/Homescreen'

const App = (props) => {
  return (
    <Router>
      <main className="bg-pink-100">
        <Navbar />
        <section className="pt-5 pb-5">
          <div className="container mx-auto px-4">
        
            <Route  path="/" component={Seaction} exact/>
            <Route path="/" component={Homescreen} exact />
            <Route path="/Medicines" component={Medicines} exact />
            <Route path="/Food" component={Food} exact />
            <Route path="/Juice" component={Juice} exact />
            <Route path="/Oxygencylinder" component={Oxygencylinder} exact />
            <Route path="/About" component={About} exact />
            <Route path="/contectus" component={contectus} exact />
            <Route path="/Moreinfo" component={Moreinfo} exact />
            
          </div>
        </section>
      </main>
    </Router>
  )
}


export default App
