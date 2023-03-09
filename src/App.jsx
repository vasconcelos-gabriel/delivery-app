import Category from "./components/Category"
import Food from "./components/Food"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"


function App() {


  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <HeadlineCards/>
     <Food/>
     <Category />
    </div>
  )
}

export default App
