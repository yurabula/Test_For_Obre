import { useState, useEffect } from "react";
import "./EditJobModal.css";

const EditJobModal = ({ job, updateJob, formClose }) => {
  const [updatedJob, setUpdatedJob] = useState(job);

  useEffect(() => {
    setUpdatedJob(job);
  }, [job]);

  const handleFormClose = (e) => {
    e.preventDefault();
    formClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateJob(updatedJob);
  };

  return (
    <div className="modal">
      <form className="editJobModal" onSubmit={handleFormSubmit}>
        <h3>Edit job</h3>
        <input
          type="text"
          placeholder="Job type"
          value={updatedJob.job_type}
          onChange={(e) =>
            setUpdatedJob((prevValue) => ({
              ...prevValue,
              job_type: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={updatedJob.description}
          onChange={(e) =>
            setUpdatedJob((prevValue) => ({
              ...prevValue,
              description: e.target.value,
            }))
          }
        />
        <select
          value={updatedJob.status}
          onChange={(e) =>
            setUpdatedJob((prevValue) => ({
              ...prevValue,
              status: e.target.value,
            }))
          }
        >
          <option value="">Choose status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="text"
          placeholder="Worker name"
          value={updatedJob.name}
          onChange={(e) =>
            setUpdatedJob((prevValue) => ({
              ...prevValue,
              name: e.target.value,
            }))
          }
        />
        <button type="submit">Update job request</button>
        <button onClick={handleFormClose}>Close modal</button>
      </form>
    </div>
  );
};

export default EditJobModal;
