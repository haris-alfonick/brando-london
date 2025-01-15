import CartTotal from "../cart/cartTotal"
import StripeCheckOut from "../components/stripe-checkout"

const OrderSummary = () => {

  return (
    <>
      <CartTotal cartPage={false} />
    </>
  )
}

export default OrderSummary
