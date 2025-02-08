import { FC } from "react";
import { useGetProductsQuery } from "../../redux/api/product";
import { IProduct } from "../../types";
import Stars from "../star/Star";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";

interface ProductsProps {
  items?: IProduct[];
}

const Products: FC<ProductsProps> = ({ items }) => {
  const { data, isLoading } = useGetProductsQuery({ limit: 8 });
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const products = items || data?.products || [];

  if (isLoading)
    return (
      <div className="mx-auto flex items-center justify-center h-[100px]">
        <ThreeDot
          variant="bounce"
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    );

  const productItem = products.map((product: IProduct) => (
    <div key={product.id} className="w-[270px] h-[322px] relative group">
      <div className="h-[250px] bg-[#F5F5F5] overflow-hidden relative">
        <img onClick={() => navigate(`product/${product.id}`)} className="w-full object-contain" src={product.images[0]} alt="" />

        <button
          className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center 
                         opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 
                         transition-all duration-300 ease-in-out"
        >
          Add To Cart
        </button>
      </div>

      <div className="pt-4 flex flex-col">
        <h2 className="truncate font-medium">{product.title}</h2>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[#DB4444] font-medium">${product.price}</p>
        <Stars rating={product.rating} />
        <p className="font-medium">({product.stock})</p>
      </div>
      <button
        onClick={() => dispatch(toggleLike(product))}
        className="absolute top-3 right-3 text-2xl text-primary"
      >
        {wishlist?.some((item) => item.id === product.id) ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  ));

  return (
    <div className="container mt-[28px] grid grid-cols-4 gap-[30px]">
      {productItem}
    </div>
  );
};

export default Products;
