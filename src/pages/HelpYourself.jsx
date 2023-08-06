import  {  useEffect, useState } from 'react'

function HelpYourself() {
    const [data,setData]= useState()
    const getData = async()=>{
        try {
            const res = await fetch(
                'https://sheet.best/api/sheets/627e1b13-42f6-43e9-80dd-fec1b699b8f0'
            )
            const data = await res.json()
            setData(Object.keys(data).map((key) => data[key]));
            // console.log(data[1].question);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
  <>
  {data?.map((item,i)=>(
  <div className='helpYourself' key={i}>HelpYourself
  {/* не забудь связать чекбоксы */}
  <input type="checkbox" />
  <label htmlFor="checkbox">html</label>
  <input type="checkbox" />
  <label htmlFor="checkbox">css</label>
  <input type="checkbox" />
  <label htmlFor="checkbox">js</label>
  <button>submit</button>
  <div className="question">
    {item.question}
  </div>
  <div className="output">
  {item.answer}
  </div>
  </div>
  ))}
  </>
    
  )
}

export default HelpYourself