import { FC } from "react";
import { useGetProductsQuery } from "../../redux/api/product";
import { IProduct } from "../../types";
import Stars from "../star_func/Star_Func";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { useNavigate } from "react-router-dom";

interface ProductsProps {
  items?: IProduct[];
}

const Products: FC<ProductsProps> = ({ items }) => {
  const { data, isLoading } = useGetProductsQuery({ limit: 8 });
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = items || data?.products || [];

  if (isLoading) {
    return (
      <div className="container mx-auto mt-7 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4 animate-pulse">
              <div className="h-64 bg-gray-300 rounded-md"></div>
              <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="mt-4 flex justify-center gap-2">
                <div className="h-5 w-10 bg-gray-300 rounded"></div>
                <div className="h-5 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-7 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: IProduct) => (
          <div key={product.id} className="border rounded-lg shadow-lg relative group overflow-hidden transition-all duration-300">
            {/* Product Image */}
            <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                onClick={() => navigate(`product/${product.id}`)}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                src={product.images[0]}
                alt="product"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h2 className="truncate font-medium text-lg">{product.title}</h2>
              <div className="flex justify-center items-center gap-2 mt-1">
                <p className="text-red-500 font-semibold text-lg">${product.price}</p>
                <Stars rating={product.rating} />
                <p className="font-medium text-sm">({product.stock})</p>
              </div>
            </div>

            {/* Wishlist Icon */}
            <button
              onClick={() => dispatch(toggleLike(product))}
              className="absolute top-3 right-3 text-2xl text-black"
            >
              {wishlist.some((item) => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
