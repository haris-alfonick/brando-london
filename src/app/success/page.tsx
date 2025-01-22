import { Metadata } from "next";
import InitiateSuccess from '../components/Success';

export const metadata: Metadata = {
  title: "Success - Brando London",
  robots: "noindex, nofollow",

};

const Success = () => {
  return(
    <InitiateSuccess />
  )
}

export default Success