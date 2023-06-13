import { Helmet } from "react-helmet-async";
import useInsDetail from "../../Hooks/useInsDetail";
import SectionTitle from "../../Components/SectionTitle";

const InsDetail = () => {
    const [instructor] = useInsDetail();

    return (
        <>
            <Helmet><title>Summer Camp | Instructor Detail</title></Helmet>
            <SectionTitle
                subHead={<h3>Total Instructor: {instructor.length}</h3>}
                head={"Our Popular Instructors"}
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Taken Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor.map((ins, index) => <tr key={ins._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={ins.image} alt="Loading" />
                                        </div>
                                    </div>
                                </td>
                                <td><div className="font-bold">{ins.name}</div></td>
                                <td>{ins.email}</td>
                                <td>{ins?.class_name ? ins.class_name.join(' - ') : ''}</td>
                                <td><button className="btn btn-outline btn-xs" >See Classes</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InsDetail;