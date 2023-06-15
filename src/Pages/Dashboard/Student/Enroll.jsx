import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import SectionTitle from "../../../Components/SectionTitle";
import { Link } from "react-router-dom";

const Enroll = () => {
    const [enroll, refetch] = useEnroll();
    console.log(enroll)
    refetch();

    const handelDelete = item => {
        console.log(item)
        fetch(`https://foreign-language-server-pi.vercel.app/enroll/${item._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    alert('Successfully Deleted Enroll Item')
                }
            })
    }

    return (
        <div className="w-full">
            <Helmet><title>Summer Camp | Enroll Classes</title></Helmet>
            <SectionTitle
                subHead={<>Enroll Total: {enroll.length}</>}
                head={"All of Your Enroll Classes"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-red-400 text-base">
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>Enrolled</th>
                            <th className="col-span-2 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enroll.map((course, index) => <tr key={course._id}
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

                                <td>
                                   
                                        <button className="btn btn-outline btn-xs" disabled={course.seats === 0 ? true : false}> <Link to='payment'>Payment</Link></button>
                                    
                                </td>

                                <td><button onClick={() => handelDelete(course)} className="btn btn-outline btn-xs" >Delete</button></td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Enroll;