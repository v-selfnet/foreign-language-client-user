import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import { FaTrashAlt, FaUser, FaUserCog } from "react-icons/fa";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://foreign-language-server-pi.vercel.app/users')
        return res.json();
    })



    // make admin
    const handelMakeAdmin = user => {
        fetch(`https://foreign-language-server-pi.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        refetch();
                        alert(`${user.name} become an Admin`)
                    }
                }))
    }

    // delete user
    const handelDelete = user => {
        console.log(user)
        fetch(`https://foreign-language-server-pi.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    alert('Successfully Deleted User')
                }
            })

    }

    return (
        <div className="w-full">
            <Helmet><title>Summer Camp | Manage Users</title></Helmet>
            <SectionTitle
                subHead={<h3>Total Users: {users.length}</h3>}
                head={"Manage the Users"}
            ></SectionTitle>

            <div className="overflow-x-auto px-10">
                <table className="table">
                    {/* head */}
                    <thead className="text-red-400 text-base">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photo} alt="Loading" />
                                        </div>
                                    </div>
                                </td>
                                <td><div className="font-bold">{user?.name}</div></td>
                                <td>{user.email}</td>
                                <td>{user?.pass ? user?.pass : 'N/A'}</td>
                                <td>{
                                    user.role === 'admin' ?
                                        <button className="btn bg-green-500 text-xl"><FaUserCog /></button>
                                        : <button onClick={() => handelMakeAdmin(user)} className="btn btn-outline text-xl"><FaUser /></button>
                                }

                                </td>
                                <td><button onClick={() => handelDelete(user)} className="btn btn-outline text-xl"><FaTrashAlt /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;