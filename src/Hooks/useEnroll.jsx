import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../ProviderContext/AuthProvider";
import { useContext } from "react";

const useEnroll = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: enroll = []} = useQuery({
        queryKey: ['enroll', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroll?email=${user?.email}`)
            return res.json()
        },
    })
    return [enroll, refetch]
};

export default useEnroll;