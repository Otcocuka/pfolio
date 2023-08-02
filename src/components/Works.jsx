import img from '../assets/6477e6ee4ccf26b8e50d0736_3-p-2000.webp' 


const Works = (props) => {

 
 Works.defaultProps = {
    workID:'some random work',
    tags:['design','building','motion','direction'],
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in exercitationem perspiciatis laborum libero odit debitis, odio saepe facilis placeat obcaecati? Nulla possimus dolores ratione aliquam, quae ab quis aliquid?', 
 }
  
  return (
    <>
      <div className="works">
       
        <div className="work_card">
          <div className="work_header">
            <div className="works_name">{props.workID}</div>
            <div className="work_tags">{props.tags.map((tag)=>
              <span key={tag.toString()} className='tag'>{tag}</span>
            )}</div>
          </div>
          <div className="work_body">
            <div className="work_description">{props.description}</div>
            <div className="work_button__demo">
              <button>Try demo</button>
            </div>
          </div>
        </div>
        <div className="work_frame">
          <img className='work_frame__image' src={img} alt="#" />
        </div>

      </div>
    </>
  );
};

export default Works;
