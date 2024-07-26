import { useState } from "react";

const ObjectModal = ({addjob}) => {


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
        setJob({
            id: 0,
            job_type: "",
            status: "",
            description: "",
            name: "",})
    }


    return(
        <div>
            <form>
                <input type="text" onChange={(e)=>setJob((prevValue)=>({...prevValue, job_type: e.target.value}))}></input>
                <button onClick={handleFormSubmit}></button>
            </form>
        </div>
    )
}
export default ObjectModal;