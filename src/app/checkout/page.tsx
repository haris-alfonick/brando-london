import BreadCrumbs from "../components/breadcrumbs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import InitiateCheckout from "./initiateCheckout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - Brando London",
};

const Checkout = () => {

  return (
    <div>
      <Navbar />
      <BreadCrumbs page="Checkout" />
        <InitiateCheckout />
      <Footer />
    </div>
  );
};

export default Checkout;