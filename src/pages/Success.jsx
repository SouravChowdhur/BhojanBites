import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const clearCart = async () => {
    const res = await axios.get("http://localhost:5000/api/clear-cart");
    const data = await res.data;
    toast.success(data.message);
  };

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#E91E63" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center text-pink-500">
            Order Successful!
          </h2>
          <p className="text-pink-500">Your order has been sucessfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
