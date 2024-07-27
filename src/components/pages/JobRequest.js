import JobObject from "../globalComponents/JobObject";
import AddJobModal from "../globalComponents/modalWindows/AddJobModal";
import EditJobModal from "../globalComponents/modalWindows/EditJobModal";
import { useState } from "react";
import "./JobRequest.css";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../localStorage/localStorage";

const JobRequest = () => {
  const prevJobs = getFromLocalStorage("jobs") || [];
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [jobs, setJobs] = useState(prevJobs);
  const [jobToEdit, setJobToEdit] = useState(null);

  const addJob = (job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    saveToLocalStorage("jobs", updatedJobs);
    console.log(getFromLocalStorage("jobs"))
    setAddModal(false);
  };

  const closeModal = () => {
    setAddModal(false);
    setEditModal(false);
    setJobToEdit(null);
  };

  const handleEditClick = (job) => {
    setJobToEdit(job);
    setEditModal(true);
  };

  const updateJob = (updatedJob) => {
    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
    saveToLocalStorage("jobs", updatedJobs);
    setEditModal(false);
    setJobToEdit(null);
  };

  return (
    <div className="jobRequest">
      <div className="buttonWrapper">
        <p>Add new job request</p>
        <button onClick={() => setAddModal(true)}>
          Add new job request
        </button>
      </div>
      {addModal && 
      <AddJobModal 
            addjob={addJob} 
            formClose={closeModal} 
        />}
      {editModal && (
        <EditJobModal
          job={jobToEdit}
          updateJob={updateJob}
          formClose={closeModal}
        />
      )}
      <div className="jobsWrapper">
        {jobs.map((job) => (
          <JobObject
            key={job.id}
            job={job}
            onClick={() => handleEditClick(job)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobRequest;
