import { useContext } from "react";
import { AuthContext } from "../ProviderContext/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useFavorite = () => {
    const {user} = useContext(AuthContext);
    const {data: favorite=[], refetch} = useQuery({
        queryKey: ['favorite', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://foreign-language-server-pi.vercel.app/favorite?email=${user?.email}`)
            return res.json();
        },
    })

    return [favorite, refetch]
};

export default useFavorite;