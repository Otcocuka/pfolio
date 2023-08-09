


const Works = (props) => {

 
 Works.defaultProps = {
    workID:'some random work',
    tags:['design','building','motion','direction'],
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in exercitationem perspiciatis laborum libero odit debitis, odio saepe facilis placeat obcaecati? Nulla possimus dolores ratione aliquam, quae ab quis aliquid?', 
    img: '../assets/dveri-i-dot.png',
    button_link: '#'
 }
  
  return (
    <>
      <div className="works">
       
        <div className="work_card">
          <div className="work_header">
            <h2 className="works_name">{props.workID}</h2>
            <div className="work_tags">{props.tags.map((tag)=>
              <span key={tag.toString()} className='tag'>{tag}</span>
            )}</div>
          </div>
          <div className="work_body">
            <div className="work_description">{props.description}</div>
            <div className="work_button__demo">
              <a href={props.button_link} target="_blank" rel="noopener noreferrer">
              <button className="button-primary" >Try demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="work_frame">
          <img className='work_frame__image' loading='lazy' src={props.img} alt="#" />
        </div>

      </div>
    </>
  );
};

export default Works;
