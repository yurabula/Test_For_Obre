import "./DashBoard.css";
import JobObject from "./globalComponents/JobObject";

const DashBoard = () => {
  const data = [
    {
      id: 1,
      job_type: "Electrical",
      status: "pending",
      description: "Fix broken led light",
      name: "Joe",
    },
    {
      id: 2,
      job_type: "Plumbing",
      status: "pending",
      description: "Fix cold regulator",
      name: "John",
    },
    {
      id: 3,
      job_type: "Water",
      status: "completed",
      description: "Fix kitchen washer",
      name: "Mark",
    },
    
  ];

  function sortJob(jobs) {
    const pending = [];
    const completed = [];

    jobs.forEach((job) => {
      if (job.status === "pending") {
        pending.push(job);
      }
      if (job.status === "completed") {
        completed.push(job);
      }
    });

    const sortedArray = { pending: pending, completed: completed };
    return sortedArray;
  }

  const sortedJobs = sortJob(data);

  return (
    <div className="dashBoard">
      <p>DashBoard</p>
      <div className="jobDesk">
        <div className="completedDesk">
            <p>Completed</p>
          {sortedJobs.completed.map((job) => (
            <JobObject key={job.id} job={job} />
          ))}
        </div>
        <div className="pendingDesk">
            <p>Pending</p>
          {sortedJobs.pending.map((job) => (
            <JobObject key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
