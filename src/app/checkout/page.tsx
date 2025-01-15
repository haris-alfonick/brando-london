import BreadCrumbs from '../components/breadcrumbs'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import BillingInformation from './billingInformation'
import PaymentOptions from './paymentOptions'
import AdditionalInformation from './additionalInformation'
import OrderSummary from './orderSummary'
import StripeCheckOut from '../components/stripe-checkout'

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <StripeCheckOut />
      <Footer />
    </div>
  )
}
export default Checkout
