import { useState } from "react";
import {
  addItemToLocalStorage,
} from "../../../localStorage/localStorage";
import "./AddJobModal.css";
import { v4 } from "uuid";

const AddJobModal = ({ addjob, formClose }) => {
  const [job, setJob] = useState({
    id: v4(),
    job_type: "",
    status: "",
    description: "",
    name: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addjob(job);
  };

  const handleFormClose = (e) => {
    e.preventDefault();
    formClose();
  };

  return (
    <div className="modal">
      <form className="addNewJobModal">
        <h3>Add new job request</h3>
        <input
          type="text"
          placeholder={" Job type"}
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, job_type: e.target.value }))
          }
        ></input>
        <input
          type="text"
          placeholder=" Description "
          onChange={(e) =>
            setJob((prevValue) => ({
              ...prevValue,
              description: e.target.value,
            }))
          }
        ></input>
        <select
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, status: e.target.value }))
          }
        >
          <option> Choose status </option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <input
          type="text"
          placeholder=" Worker name"
          onChange={(e) =>
            setJob((prevValue) => ({ ...prevValue, name: e.target.value }))
          }
        ></input>

        <button onClick={handleFormSubmit}>Add job request</button>
        <button onClick={handleFormClose}>Close modal</button>
      </form>
    </div>
  );
};
export default AddJobModal;
