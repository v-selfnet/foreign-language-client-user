import { useQuery } from "@tanstack/react-query";

const useInsDetail = () => {
    const {data: instructor = []} = useQuery(['instructor'], async () => {
        console.log(instructor)
        const res = await fetch('https://foreign-language-server-pi.vercel.app/instructor')
        return res.json()
    })
    return [instructor]
};

export default useInsDetail;