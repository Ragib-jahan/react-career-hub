import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utillity/Utillity";


const AppliedJobs = () => {
    const [appliedJobs, setApplideJobs] = useState([]);
    const [disabledJob, setDisplayJob] = useState([]);

const handelJobFilter = filter =>{
    if(filter === 'all'){
        setDisplayJob(appliedJobs)
    }
    else if(filter === 'remote'){
        const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
        setDisplayJob(remoteJob);
    }
    else if(filter === "onsite"){
        const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
        setDisplayJob(onsite)
    }
}

    const jobs = useLoaderData();
    console.log(jobs)
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied)
            setApplideJobs(jobsApplied)
            setDisplayJob(appliedJobs)
        }
    }, [])

    return (

        <div>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handelJobFilter('all')}><a>All</a></li>
                    <li onClick={()=>handelJobFilter('remote')} ><a>Remote</a></li>
                    <li onClick={()=>handelJobFilter('onsite')}><a>Outside</a></li>
                </ul>
            </details>
            <h2>Jobs I applied: {appliedJobs.length}</h2>
            <ul>
                {
                    disabledJob.map(job => <li key={job.id}> <span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li>)

                }
            </ul>
        </div>
    );
};

export default AppliedJobs;