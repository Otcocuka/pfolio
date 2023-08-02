import Header from "../components/Header"
import Hero from "../components/Hero"
import Works from "../components/Works"


const Home = () => {
  return (
    <>
    <div>Home</div>
    <Header/>
    <Hero/>
    <Works workID='some old work' tags={['building','motion','direction']} description='did it long time ago'/>
      
      <Works/>
    </>
  )
}

export default Home