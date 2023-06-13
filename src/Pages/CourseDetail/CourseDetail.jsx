import { Helmet } from "react-helmet-async";
import useCourseDetail from "../../Hooks/useCourseDetail";
import SectionTitle from "../../Components/SectionTitle";
import './CourseDetail.css'

const CourseDetail = () => {
    const [courses] = useCourseDetail();

    const handelFavorite = item => {
        console.log(item._id)
        const favoriteItem = { id: item._id, image: item.image, course: item.course, instructor: item.instructor, seats: item.seats, price: item.price, enrolled: item.enrolled }
        console.log(favoriteItem)
        fetch('http://localhost:5000/favorite', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favoriteItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('ok')
                }
            })

    }

    return (
        <>
            <Helmet><title>Summer Camp | Course Detail</title></Helmet>
            <SectionTitle
                subHead={<h3>Total Courses: {courses.length}</h3>}
                head={"Please Enroll Courses"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-semibold text-red-950">
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Available Seeats</th>
                            <th>Enrolled</th>
                            <th className="col-span-2 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr key={course._id}
                                className={`${course.seats === 0 ? 'bgRed' : null}`}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="Loading" />
                                        </div>
                                    </div>

                                </td>
                                <td><div className="font-bold">{course.course}</div></td>
                                <td>{course.instructor}</td>
                                <td><span>$ </span>{course.price}</td>
                                <td>{course.seats}</td>
                                <td>{course.enrolled}</td>
                                <td><button className="btn btn-outline btn-xs" disabled={course.seats === 0 ? true : false}>Enroll</button></td>
                                <td><button onClick={() => handelFavorite(course)} className="btn btn-outline btn-xs" disabled={course.seats === 0 ? true : false}>Favorite</button></td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </>
    );
};

export default CourseDetail;