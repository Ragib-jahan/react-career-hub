import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utillity/Utillity";
import { useState } from 'react';

const JobDetails = () => {
    const jobs = useLoaderData()
    const { JobId } = useParams()
    const id = parseInt(JobId)
    const job = jobs.find(job => job.id === id)
    console.log(job)
    const [clickCount, setClickCount] = useState(0);

    const handleApplyJob = () => {
        saveJobApplication(id)

        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);
        if (newClickCount > 1) {

            toast('Already Applied')
        }

        else{
            toast('You Have Applied Successfully')
        }
    }

    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="my-32 gap-4 grid md:grid-cols-4">
                <div className="space-y-5  md:col-span-3">
                    <h2><span className="font-extrabold">Job Description:</span>  {job.job_description
                    }</h2>
                    <h2><span className="font-extrabold">Job Responsibility: </span> {job.
                        job_responsibility
                    }</h2>
                    <h2><span className="font-extrabold">Educational Requirements</span></h2>
                    <h2>{job.educational_requirements}</h2>
                    <h2 className="font-extrabold">Experiences</h2>
                    <h2>{job.experiences
                    }</h2>
                </div>
                <div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className="card-title font-extrabold">Job Details</h1>
                            <hr />
                            <div className="flex gap-2">

                                <h1>Salary: {job.salary}</h1>
                            </div>
                            <h1 className="card-title font-extrabold">Contact Information</h1>
                            <hr />
                            <h1> <span className="font-extrabold" >Phone</span> {job.contact_information.phone}</h1>
                            <h1><span className='font-extrabold'>Email:</span> {job.contact_information.email}</h1>
                            <h2><span className="font-extrabold">Address:</span> {job.contact_information.address}</h2>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="w-full btn mt-5 btn-primary ">Apply Now</button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;