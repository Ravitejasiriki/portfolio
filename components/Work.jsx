import './Workcard.css'
import Workcard from './Workcard'
import ProjectCardData from './WorkCardData'

import React from 'react'


const Work= () => {
  return (
    <div className='workcontainer'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
         {ProjectCardData.map((val,ind)=>{
            return(
                <Workcard
                
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                
                
                />
            )

         })}
        </div>
      
    </div>
  )
}

export default Work
