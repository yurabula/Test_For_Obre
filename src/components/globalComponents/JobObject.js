import "./JobObject.css"
import jobMethods from "../pages/JobRequest";

const JobObject=({job, editHandler, deleteHandler})=>{

    return(
        <div className="JobObject" >
            <h3>{job.job_type}</h3>
            <p className="description">{job.description}</p>
            <p className="name">{job.name}</p>
            <button onClick={editHandler}>Edit job request</button>
            <button onClick={deleteHandler}>Delete job request</button>
        </div>
    )
}

export default JobObject;