import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";


const TableDemo = () => {
  return (

    <>

      {/* <Navbar /> */}
      <div className="container pt-10 pl-24 grid grid-cols-4 gap-4 py-4  mx-auto px-2 border border-black-600 ...">

        <div>
          <p>Products</p>
        </div>

        <div>
          <p>Price</p>
        </div>
        <div>
          <p>Quantity</p>
        </div>
        <div>
          <p>Sub-Totals</p>
        </div>
        <div>
          <p>abc</p>
        </div>
        <div>
          <p>$229.00</p>
        </div>
        <div>
          <p>counter</p>
        </div>
        <div>
          <p>$229.00</p>
        </div>
        <div>
          <p>def</p>
        </div>
        <div>
          <p>$687.00</p>
        </div>
        <div>
          <p>counter</p>
        </div>
        <div>
          <p>$687.00</p>
        </div>


        <div className="py-4">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Return to Shop</button>
        </div>

        <div className="py-4">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Update Card</button>
        </div>





        <div className="px-5 pb-5 grid grid-cols-2 gap-2 pt-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Card Totals</h5>
          </div>  
          <div>
            <p className="text text-gray-900 dark:text-white">Sub-total</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white ">Sub-total</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white">Shipping</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white">Sub-total</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white">Discount</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white pt-3">Sub-total</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white pt-3">Sub-total</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white">Tax</p>
          </div>
          <div>
            <p className="text text-gray-900 dark:text-white border-t-2" >Total</p>
          </div>
          <div>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Proced to Checkout</button>
          </div>
        </div>

      </div>
      <div className="pt-4 pb-4 container">
        <div className="pt-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <div className="px-5 pb-5">

            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white border-b-2">Coupon Code</h5>


            <div className="mb-6 mt-6">
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon Code" />
            </div>

            <div>
              <div>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Apply Coupon</button>

              </div>
            </div>
          </div>
        </div>
      </div>







      {/* <Footer /> */}

    </>
  )
};


export default TableDemo;