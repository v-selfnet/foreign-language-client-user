import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import { Link } from "react-router-dom";

const Instructor = () => {
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await fetch('http://localhost:5000/instructor')
        return res.json();
    })

    return (
        <div>
            <SectionTitle
                subHead={<h3>Total Instructors: {instructors.length}</h3>}
                head={"our popular instructors"}
            ></SectionTitle>
            <div className='text-center my-10'>
                <div className="grid grid-cols-3 gap-10">
                    {
                        instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                            <img className="w-full rounded-lg" src={instructor.image} alt="img loading..." />
                            <div className="card-body">
                                <div className="text-left">
                                    <p className="card-title">{instructor.name}</p>
                                    <p>{instructor.email}</p>
                                </div>
                                <h2 className="text-left"> <span>Number of Classes Taken: </span>
                                    <div className="badge badge-secondary"> {instructor.class_number}</div>
                                </h2>
                                <div className="card-actions pt-4">
                                    <div className="badge badge-outline">Instructor Bio</div>
                                    <div className="badge badge-outline">New Idea</div>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to='/insdetail'>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-primary hover:bg-sky-500 my-10">Detail Information of All Instructors</button>
                </Link>
            </div>
        </div>
    );
};

export default Instructor;