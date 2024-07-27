import "./DashBoard.css";
import JobObject from "../globalComponents/JobObject";
import { getFromLocalStorage } from "../../localStorage/localStorage";

const DashBoard = () => {
  const data = getFromLocalStorage("jobs");
  const sortedJobs = sortJob(data);

  function sortJob(jobs) {
    const pending = [];
    const completed = [];
    
    jobs.forEach((job) => {
      if (job.status === "Pending") {
        pending.push(job);
      }
      if (job.status === "Completed") {
        completed.push(job);
      }
    });
    const sortedArray = { pending: pending, completed: completed };
    return sortedArray;
  }


  return (
    <div className="dashBoard">
      <p>DashBoard</p>
      <div className="jobDesk">
        <div className="completedDesk">
          <p>Completed</p>
          {sortedJobs.completed.map((job) => 
          (
            <JobObject key={job.id} job={job} />
          ))}
        </div>
        <div className="pendingDesk">
          <p>Pending</p>
          {sortedJobs.pending.map((job) => 
          (
            <JobObject key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
