import { useQuery } from "@tanstack/react-query";

const useCourseDetail = () => {
    const { data: courses = []} = useQuery(['courses'], async () => {
        // console.log(courses)
        const res = await fetch('https://foreign-language-server-pi.vercel.app/courses')
        return res.json()
    })
    return [courses]
    
};

export default useCourseDetail;