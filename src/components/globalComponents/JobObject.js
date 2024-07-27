import { useState } from "react";
import "./JobObject.css"

const JobObject=({job, onClick})=>{

    return(
        <div className="JobObject" >
            <h3>{job.job_type}</h3>
            <p className="description">{job.description}</p>
            <p className="name">{job.name}</p>
            <button onClick={onClick}>Edit job request</button>
        </div>
    )
}

export default JobObject;