import { Helmet } from "react-helmet-async";
import useCourseDetail from "../../Hooks/useCourseDetail";
import SectionTitle from "../../Components/SectionTitle";
import './CourseDetail.css'

const CourseDetail = () => {
    const [courses] = useCourseDetail();

    return (
        <div>
            <Helmet><title>Summer Camp | Course Detail</title></Helmet>
            <SectionTitle
                subHead={<h3>Total Courses: {courses.length}</h3>}
                head={"Please Enroll Courses"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Available Seeats</th>
                            <th>Enrolled</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr key={course._id} 
                                className={`${course.seats === 0 ? 'bgRed' :  null}`}
                            >
                                <td>{index +1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="Loading" />
                                        </div>
                                    </div>
    
                                </td>
                                <td><div className="font-bold">{course.course}</div></td>
                                <td>{course.instructor}</td>
                                <td>{course.price}</td>
                                <td>{course.seats}</td>
                                <td>{course.enrolled}</td>
                                <td><button className="btn btn-outline btn-xs" disabled={course.seats === 0 ? true: false}>Enroll</button></td>
                            </tr> )
                        }
                        
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default CourseDetail;