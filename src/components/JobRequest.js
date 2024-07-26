import JobObject from "./globalComponents/JobObject";
import ObjectModal from "./globalComponents/ObjectModal";
import { useState } from "react";
import "./JobRequest.css"
import { getFromLocalStorage } from "../localStorage/localStorage";

const JobRequest = () => {
    const prevJobs = getFromLocalStorage("jobs") || []
    console.log(prevJobs)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [jobs, setJobs] = useState(prevJobs);

    const addJob = (job) => {
        setJobs([...jobs, job]);
        setModalIsOpen(false);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="jobRequest">
            <div className="buttonWraper">
                <p>Add new job request</p>
                <button onClick={() => setModalIsOpen(true)}>Add new job request</button>
            </div>
            {modalIsOpen && <ObjectModal addjob={addJob} formClose={closeModal} />}

            <div className="jobsWraper">
                {jobs.map((job) => (
                <JobObject key={job.id} job={job} />
            ))}
            </div>
            
        </div>
    );
};

export default JobRequest;
