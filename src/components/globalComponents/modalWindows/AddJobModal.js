import { useState } from "react";
import "./AddJobModal.css";
import { v4 } from "uuid";

const AddJobModal = ({ addJob, formClose }) => {
  const [job, setJob] = useState({
    id: v4(),
    job_type: "",
    status: "",
    description: "",
    name: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    formClose();
  };

  const handleFormClose = (e) => {
    e.preventDefault();
    formClose();
  };

  return (
    <div className="modal">
      <form className="addNewJobModal" onSubmit={handleFormSubmit}>
        <h3>Add new job request</h3>
        <input
          type="text"
          placeholder="Job type"
          value={job.job_type}
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, job_type: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={job.description}
          onChange={(e) =>
            setJob((prevValue) => ({
              ...prevValue,
              description: e.target.value,
            }))
          }
        />
        <select
          value={job.status}
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, status: e.target.value }))
          }
        >
          <option value="">Choose status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="text"
          placeholder="Worker name"
          value={job.name}
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, name: e.target.value }))
          }
        />
        <button type="submit">Add job request</button>
        <button onClick={handleFormClose}>Close modal</button>
      </form>
    </div>
  );
};

export default AddJobModal;
