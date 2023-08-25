import Multilayer from "../components/Multilayer"
import MyResume from "../components/MyResume"
import ContactForm from "../components/ContactForm"


const About = () => {
  return (
    <>
    <div className="about">
    <MyResume/>
    <ContactForm/>
    
    </div>
    
    {/* <Multilayer/>
    <Multilayer styled='reversed_default'/>
    <Multilayer/>
    <Multilayer styled='style1'/>
    <Multilayer styled='no-style'/>
     */}
    </>
  )
}

export default About