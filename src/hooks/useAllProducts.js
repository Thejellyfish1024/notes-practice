import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();
    // console.log(email);

    const {data, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
           const data = await axiosPublic.get(`/product`)
           return await data.data;
        }
    })
    // console.log('user data',data);

    return {data, refetch};
};

export default useAllProducts;