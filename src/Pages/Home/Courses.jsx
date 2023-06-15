import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import { Link } from "react-router-dom";

const Courses = () => {
    const { data: courses = [] } = useQuery(['courses'], async () => {
        // console.log(courses);
        const res = await fetch('https://foreign-language-server-pi.vercel.app/courses')
        return res.json();
    })
    return (
        <div>
            <SectionTitle
                subHead={<h3>Total Courses: {courses.length}</h3>}
                head={"We offered following courses"}
            ></SectionTitle>

            {/* {
                courses.map(item => <CourseDetail
                    key={item._id}
                    item={item}
                ></CourseDetail>)
            } */}

            <div className='text-center my-10'>
                <div className="grid grid-cols-3 gap-10">
                    {
                        courses.map(course => <div key={course._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={course.image} alt="img loading..." /></figure>
                        <div className="card-body">
                            <p className="card-title">{course.course} Class</p>
                            <h2 className="text-left"> <span>Number of Students Enrolled: </span>
                                <div className="badge badge-secondary"> {course.enrolled}</div>
                            </h2>
                            <div className="card-actions pt-4">
                                <div className="badge badge-outline">New Courses</div>
                                <div className="badge badge-outline">New Idea</div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
                <Link to='/coursedetail'>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white bg-primary hover:bg-sky-500 my-10">Detail Information of All Courses</button>
                </Link>
            </div>
        </div>
    );
};

export default Courses;