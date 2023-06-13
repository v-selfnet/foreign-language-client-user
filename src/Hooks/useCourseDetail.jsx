import { useQuery } from "@tanstack/react-query";

const useCourseDetail = () => {
    const { data: courses = []} = useQuery(['courses'], async () => {
        console.log(courses)
        const res = await fetch('http://localhost:5000/courses')
        return res.json()
    })
    return [courses]
    
};

export default useCourseDetail;