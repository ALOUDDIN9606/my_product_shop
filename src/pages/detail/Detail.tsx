import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/product";
import Stars from "../../components/star_func/Star_Func";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ThreeDot } from "react-loading-indicators";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();

  if (isLoading){
    return (
      <div className="mx-auto flex items-center justify-center h-[544px]">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );
  }
  if (error) {
    return (
      <p className="text-center py-10 text-red-500">Error loading product.</p>
    );
  }
  if (!data) {
    return (
      <p className="text-center py-10 text-gray-500">Product not found.</p>
    );
  }

  return (
    <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-10 justify-center">
      <div className="left flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex sm:flex-col gap-6">
          {data?.images?.map((image: string, inx:number) => (
            <img
              onClick={() => setMainImage(inx)}
              key={image}
              src={image}
              alt=""
              className="w-16 sm:w-28 h-16 sm:h-28 object-contain cursor-pointer border rounded-md transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
            />
          ))}
        </div>
        <div>
          <img
            src={data?.images?.[mainImage]}
            alt="Selected Product"
            className="w-72 sm:w-96 h-72 sm:h-96 object-contain"
          />
        </div>
      </div>

      <div className="right w-full lg:w-1/2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold">{data?.title}</h1>
        <div className="flex items-center justify-center sm:justify-start mt-2">
          <Stars rating={data?.rating || 0} />
          <p className="text-sm text-primary opacity-[50%]">
            ({data?.stock || 0} Reviews) |
            <span className="text-[#00FF66] opacity-[90%]"> In Stock</span>
          </p>
        </div>
        <p className="mt-4 text-2xl left-6">${data?.price}</p>
        <p className="mt-6 text-sm leading-[21px]">{data?.description}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border rounded-md px-4 py-2">
            <button
              className="text-2xl font-bold"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="px-4 text-2xl">{quantity}</span>
            <button
              className="text-2xl font-bold"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-red-500 text-white px-12 py-3 rounded-md w-full sm:w-auto">
            Buy Now
          </button>
          <button
            onClick={() => dispatch(toggleLike(data))}
            className="border px-4 py-3 rounded-md text-2xl"
          >
            {wishlist?.some((item) => item.id === data?.id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
