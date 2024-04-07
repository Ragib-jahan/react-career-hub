import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div className="flex">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <img className="w-[116.69px] pl-5 pt-10" src={logo} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <h2>{company_name}</h2>
                    <h3 className="space-x-5 my-5"><span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</span><span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</span></h3>
                    <div className="flex gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <CiLocationOn /> {location}
                        </div>
                        <div className="flex items-center gap-x-2">
                            <RiMoneyDollarCircleLine /> <p>Salary: {salary}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;