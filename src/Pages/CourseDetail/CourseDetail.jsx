import { Helmet } from "react-helmet-async";
import useCourseDetail from "../../Hooks/useCourseDetail";
import SectionTitle from "../../Components/SectionTitle";

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
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <td>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </td>
                        </tr>
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default CourseDetail;