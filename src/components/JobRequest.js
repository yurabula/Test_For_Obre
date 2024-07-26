import JobObject from "./globalComponents/JobObject";
import ObjectModal from "./globalComponents/ObjectModal";
import { useState } from "react";

const JobRequest = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [jobs, setJobs] = useState([]);

    const addJob = (job) => {
        setJobs([...jobs, job]);
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            {modalIsOpen && <ObjectModal addjob={addJob} />}
            {jobs.map((job) => (
                <JobObject key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobRequest;
