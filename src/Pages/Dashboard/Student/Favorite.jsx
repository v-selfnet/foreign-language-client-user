import SectionTitle from "../../../Components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useFavorite from "../../../Hooks/useFavorite";

const Favorite = () => {
    const [favorite, refetch] = useFavorite();
    refetch();

    const handelDelete = item => {
        console.log(item)
    }

    return (
        <div className="w-full">
            <Helmet><title>Summer Camp | Favorite Classes</title></Helmet>
            <SectionTitle
                subHead={<h3>Add to Favorite Total: {favorite.length}</h3>}
                head={"All of Your Favorite Classes"}
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
                            favorite.map((course, index) => <tr key={course._id}
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

export default Favorite;