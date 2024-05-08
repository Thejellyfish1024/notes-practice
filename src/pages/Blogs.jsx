import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAllBlogs from "../hooks/useAllBlogs";


const Blogs = () => {

    const axiosPublic = useAxiosPublic();
    const { data: allBlogs } = useAllBlogs();
    console.log(allBlogs?.data);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);

        const res = await axiosPublic.post('/blog', data);
        console.log(res?.data);
    };

    return (
        <div>
            <h2 className="text-center my-8 text-4xl font-bold text-red-500">Add Blogs</h2>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-20">
                <div className="grid grid-cols-2 gap-5">
                    {/* title */}
                    <div className="w-full">
                        <h4 className="font-semibold">Title</h4>
                        <input
                            type="text"
                            placeholder="title"
                            //   defaultValue={userData?.name?.split(" ")[0]}
                            {...register("title", { required: true })}
                            name="title"
                            className="py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.title && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>

                    {/* price */}
                    <div className="w-full">
                        <h4 className="font-semibold">Price</h4>
                        <input
                            type="number"
                            placeholder="price"
                            //   defaultValue={userData?.name?.split(" ")[0]}
                            {...register("price", { required: true })}
                            name="price"
                            className="py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.price && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>

                    {/* description */}

                    <div className="w-full">
                        <h4 className="font-semibold">Description</h4>
                        <input
                            type="text"
                            placeholder="description"
                            //   defaultValue={userData?.name?.split(" ")[0]}
                            {...register("description", { required: true })}
                            name="description"
                            className="py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.description && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>

                    {/* Status */}

                    <div className="w-full">
                        <h4 className="font-semibold">Status</h4>
                        <input
                            type="text"
                            placeholder="status"
                            //   defaultValue={userData?.name?.split(" ")[0]}
                            {...register("status", { required: true })}
                            name="status"
                            className="py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.status && (
                            <span className="text-red-500">This field is required</span>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    <button className="bg-blue-600 rounded-lg px-8 py-3 text-white font-bold ">
                        Add
                    </button>
                </div>
            </form>

            {/* all blogs */}
            <div className="flex justify-center items-center gap-4">
            {
                allBlogs?.data?.map(blog => <div className="text-white bg-red-500 p-4" key={blog?._id}>
                    <p>{blog?.title}</p>
                    <p>{blog?.description}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Blogs;