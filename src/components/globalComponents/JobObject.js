import "./JobObject.css"

const JobObject=({job})=>{
    return(
        <div className="JobObject">
            <p>{job.job_type}</p>
            <p>{job.description}</p>
            <p>{job.name}</p>
        </div>
    )
}

export default JobObject;