import { useState } from "react";
import { addItemToLocalStorage, getFromLocalStorage } from "../../localStorage/localStorage";
import "./ObjectModal.css"

const ObjectModal = ({addjob, formClose}) => {
    const [job, setJob] = useState({
        id: 0,
        job_type: "",
        status: "",
        description: "",
        name: "",
    })

    const handleFormSubmit =  (e)=>{
        e.preventDefault();
        addjob(job)
        addItemToLocalStorage("jobs", job)
    }

    const handleFormClose = (e)=>{
        e.preventDefault();
        formClose();
    }

    return(
        <div className="modal">
            <form className="addNewJobModal">
                <h3>Add new job request</h3>
                <input type="text" onChange={(e)=>setJob((prevValue)=>({...prevValue, name: e.target.value}))}></input>
                <input type="text" onChange={(e)=>setJob((prevValue)=>({...prevValue, description: e.target.value}))}></input>
                <select onChange={(e)=>setJob((prevValue)=>({...prevValue, status: e.target.value}))}>
                    <option>pending</option>
                    <option>completed</option>
                </select>
                <input type="text" onChange={(e)=>setJob((prevValue)=>({...prevValue, name: e.target.value}))}></input>

                <button onClick={handleFormSubmit}>Add job request</button>
                <button onClick={handleFormClose}>Close modal</button>
            </form>
        </div>
    )
}
export default ObjectModal;