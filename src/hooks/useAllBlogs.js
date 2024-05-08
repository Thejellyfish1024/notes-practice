import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllBlogs = () => {
    const axiosPublic = useAxiosPublic();
    // console.log(email);

    const {data, refetch} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/blog`)
           return await data.data;
        }
    })
    // console.log('user data',data);

    return {data, refetch};
};

export default useAllBlogs;