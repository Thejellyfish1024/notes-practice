import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAllBlogs from "../hooks/useAllBlogs";


const Products = () => {

    const axiosPublic = useAxiosPublic();
    const { data: allBlogs } = useAllBlogs();
    // console.log(allBlogs?.data);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        // console.log("data", data);

        const newProduct = {
            title: data?.title,
            description: data?.description,
            price: parseFloat(data?.price),
            quantity: 5,
            rating: 0,
            sold: 0,
            discount: parseFloat(data?.discount),
            sellerEmail: "rahim@gmail.com",
            image: [],
            color: [],
            size: [],
            gender: "men",
            category: "pants"
        }
        console.log(newProduct);

        const res = await axiosPublic.post('/product', newProduct);
        console.log(res?.data);
    };

    return (
        <div>
            <h2 className="text-center my-8 text-4xl font-bold text-red-500">Products</h2>
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

                    {/* Discount */}

                    <div className="w-full">
                        <h4 className="font-semibold">Discount</h4>
                        <input
                            type="text"
                            placeholder="discount"
                            //   defaultValue={userData?.name?.split(" ")[0]}
                            {...register("discount", { required: true })}
                            name="discount"
                            className="py-1 pl-4 w-full border border-sky-300 mt-3 rounded-md"
                            id=""
                        />
                        {errors.discount && (
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

export default Products;

// title: 
// price:
// description:
// rating:
// quantity:
// sold:
// discount:
// sellerEmail:
// images:[] todo
// color:[] todo
// size:[]


