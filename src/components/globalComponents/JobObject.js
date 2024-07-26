import "./JobObject.css"

const JobObject=({job})=>{
    return(
        <div className="JobObject">
            <h3>{job.job_type}</h3>
            <p className="description">{job.description}</p>
            <p className="name">{job.name}</p>
        </div>
    )
}

export default JobObject;