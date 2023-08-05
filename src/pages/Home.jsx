import Header from "../components/Header"
import Hero from "../components/Hero"
import Works from "../components/Works"


const Home = () => {
  return (
    <>
    {/* <Header/> */}
    <Hero h1='Hi there! I&apos;m  Damir Farziev'/>
    <Works workID='some old work' tags={['building','motion','direction']} description='did it long time ago'/>
      
      <Works/>
    </>
  )
}

export default Home