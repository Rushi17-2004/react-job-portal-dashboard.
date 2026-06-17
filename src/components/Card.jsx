import { Bookmark } from 'lucide-react'
import React from 'react'

function Card(props) {
    return (
        
            <div className="card">
                <div className="box1">
                    <img src={props.image} alt='Image'></img>
                    <button>Save <Bookmark size={12} /></button>
                </div>
                <div className="center">
                    <h5>{props.company} <span>5 days ago</span></h5>
                    <h3>{props.title}</h3>
                    <div className="btn">
                        <button>{props.jobType}</button>
                        <button>{props.level}</button>
                    </div>
                </div>
                <div className="bottom">
                    <div className="price">
                        <h3>{props.salary}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply now</button>
                </div>
            </div>
    
    )
}

export default Card