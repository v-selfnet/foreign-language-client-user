import { useQuery } from "@tanstack/react-query";

const Instructor = () => {
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        console.log(instructors);
        const res = await fetch('http://localhost:5000/instructor')
        return res.json();
    })

    return (
        <div>
            <div className='text-center my-10'>
                <h3>Total Courses: {instructors.length}</h3>
                <h3 className='text-3xl'>Our All Courses</h3>
                <div className="grid grid-cols-3 gap-10">
                    {
                        instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                            <img className="w-full rounded-lg" src={instructor.image} alt="img loading..." />
                            <div className="card-body">
                                <div className="text-left">
                                    <p className="card-title">{instructor.name}</p>
                                    <p>{instructor.email}</p>
                                </div>
                                <h2 className="text-left"> Number of Classes:
                                    <div className="badge badge-secondary"> {instructor.clsss_number}</div>
                                </h2>
                                <div className="card-actions pt-4">
                                    <div className="badge badge-outline">Instructor Bio</div>
                                    <div className="badge badge-outline">New Idea</div>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-primary hover:bg-sky-500 my-10">Detail Information of All Instructors</button>
            </div>
        </div>
    );
};

export default Instructor;