
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const TableDemo = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-8 md:px-12 pb-8">
        <div className="grid grid-cols-12 gap-6 pt-24">
          <div className="col-span-12 lg:col-span-8">
            <div className="border border-gray-300 rounded-lg p-6   ">
              <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
                Shopping Cart
              </h5>
              <div className="grid grid-cols-12 bg-gray-100 py-3 px-4 border-b">
                <div className="col-span-6">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Products
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Price
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Quantity
                  </p>
                </div>
                <div className="col-span-2 text-right">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    Sub-Total
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-2 py-4 px-4 items-center border-b"
              >
                <div className="col-span-12 sm:col-span-6 flex items-center gap-4">
                  <div className="[&_svg]:w-5 [&_svg]:h-5">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <img
                    src="/images/jacket.webp"
                    alt="Product"
                    className="w-12 h-12 rounded"
                  />
                  <p className="text-gray-700 text-sm sm:text-base">
                    Edward Cafe Racer Black Leather Jacket
                  </p>
                </div>
                <div className="col-span-4 sm:col-span-2 text-center">
                  <p className="text-gray-700 text-sm">$229.00</p>
                </div>
                <div className="col-span-4 sm:col-span-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p>Counter</p>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-2 text-right">
                  <p className="text-gray-700 text-sm">$229.00</p>
                </div>
              </div>


              <div className="grid grid-cols-12 py-4 px-4 items-center border-b">
                <div className="col-span-6 flex items-center gap-4">
                  <div className="[&_svg]:w-5 [&_svg]:h-5">
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <img src="/images/jacket.webp" alt="Product" className="w-12 h-12 rounded" />
                  <p className="text-gray-700">
                    Edward Cafe Racer Black Leather Jacket
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-gray-700">$687.00</p>
                </div>
                <div className="col-span-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <p>counter</p>
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  <p className="text-gray-700">$687.00</p>
                </div>
              </div>


              <div className="flex flex-wrap gap-4 justify-between items-center pt-6">
              <button
                type="button"
                className="w-full sm:w-auto text-gray-900 bg-white border border-gray-600 hover:bg-gray-100 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-800 dark:text-white"
              >
                Return to Shop
              </button>
              <button
                type="button"
                className="w-full sm:w-auto text-gray-900 bg-white border border-gray-600 hover:bg-gray-100 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-800 dark:text-white"
              >
                Update Cart
              </button>
            </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
              <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
                Cart Totals
              </h5>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between">
                  <p className="text-gray-700">Sub-total</p>
                  <p className="text-gray-700">$320</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Discount</p>
                  <p className="text-gray-700">$24</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Tax</p>
                  <p className="text-gray-700">$61.99</p>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <p className="text-gray-900 font-semibold">Total</p>
                  <p className="text-gray-900 font-semibold">$357.99</p>
                </div>
              </div>
              <button
                type="button"
                className="mt-6 w-full text-white bg-gray-900 hover:bg-gray-800 focus:outline-none font-medium corner-lg text-sm px-6 py-3"
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="border border-gray-300 rounded-lg p-6 shadow-sm">
              <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b pb-4">
                Coupon Code
              </h5>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="mt-4 w-full bg-gray-50 border border-gray-300 rounded-lg text-sm p-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="button"
                className="mt-4 w-40 text-white bg-gray-900 hover:bg-gray-800 focus:outline-none font-medium corner-lg text-sm px-6 py-3"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TableDemo;
