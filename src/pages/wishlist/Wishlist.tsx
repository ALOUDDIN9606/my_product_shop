import {} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Products from "../../components/products/Products";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  return (
    <>
      {wishlist.length === 0 ? (
      <div className="container h-[35.4vh] flex text-center justify-center items-center">
        <h2 className="text-black text-3xl">No liked products!!!</h2>
      </div>
      ) : (<Products items={wishlist} />)}
    </>
  );
};

export default Wishlist;
