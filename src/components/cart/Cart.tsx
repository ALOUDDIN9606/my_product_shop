import cart_img from "../../assets/images/cart.avif";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-6 sm:p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
          Shopping Cart
        </h2>
        
        {/* Savatcha rasmi */}
        <img 
          src={cart_img} 
          alt="Shopping Cart" 
          className="w-48 sm:w-60 mx-auto mb-6"
        />

        <p className="text-gray-500 text-lg sm:text-xl">
          Your cart is currently empty.
        </p>
      </div>
    </div>
  );
};

export default CartPage;
