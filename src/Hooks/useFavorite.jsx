import { useContext } from "react";
import { AuthContext } from "../ProviderContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useFavorite = () => {
    const {user} = useContext(AuthContext);
    const {data: favorite=[], refetch} = useQuery({
        queryKey: ['favorite', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/favorite?email=${user?.email}`)
            return res.json();
        },
    })

    return [favorite, refetch]
};

export default useFavorite;