import React from "react";

const PaymentComponent = ({ productsAddedToCart }) => {
  return (
    <div className="payment-container">
      <h5>
        جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع التفاصیل
      </h5>
      <h3>
        المجموع:
        {productsAddedToCart.reduce((a, b) => a + b.price * b.mount, 0)}$
      </h3>
      <button>تابع عملیات الشراء</button>
    </div>
  );
};

export default PaymentComponent;
