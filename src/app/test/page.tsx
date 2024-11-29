import "./style.css"
const Test = () => {
  return (
    <>


      <section className="specialOfferSec md:py-14 py-8 px-5">
        <div className="container mx-auto">
          <div className="specialOffer grid grid-cols-2 justify-items-end place-items-center py-12 px-10 rounded-xl">
            <div className="[&>img]:w-">
              <img src="/images/img/special-offer.png" alt="Special Offer" />
            </div>
            <div>
              <button className="w-fit py-3.5 px-14 bg-white text-[#105790] rounded-md">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 md:pt-2 py-10 px-5">
        <div className="container mx-auto.lg:max-w-7xl">

          <div className="[&_h2]:text-4xl w-fit mx-auto [&_h2]:font-bold text-center [&_p]:text-lg [&_p]:font-medium [&_p]:w-[80%] [&_p]:mx-auto [&_p]:mt-5 [&_p]:leading-5">
            <h2>The widest range of products</h2>
            <p>Choose from one of the product categories above or click the arrow below to view the full range.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-5 grid-cols-2 pt-28 gap-y-32">

            <div className="relative mx-auto bg-[#fff3ce] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/chair.png" alt="Lift Chair" className="h-[200px] w-auto" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto bg-[#e6f3ff] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/wheel-chair.webp" alt="Wheel Chair" className="h-[200px] w-auto" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto bg-[#e6fffd] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/scooter.webp" alt="Lift Chair" className="h-[200px] w-auto" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto bg-[#d5ffea] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/standard.png" alt="Lift Chair" className="w-[65%]" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto bg-[#c7f5ff] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/toilet.png" alt="Lift Chair" className="h-[200px] w-auto" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative mx-auto bg-[#fff2fc] rounded-t-[50%] p-6">
              <div className="flex justify-center mt-[-100px]">
                <img src="/images/img/nova-zoom.png" alt="Lift Chair" className="h-[200px] w-auto" />
              </div>
              <div className="absolute top-10 right-0 bg-[url(/images/img/vector-1.png)] bg-contain h-[110px] bg-no-repeat rounded-full px-5 pt-[35px] text-center">
                <p className="text-xs font-semibold text-gray-700">Starting from</p>
                <p className="text-lg font-bold text-black">$1500</p>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-5 mt-10">Lift Chairs</h2>
                <p className="text-gray-700 text-sm mt-2">
                  Our hope is that with this recliner, you will not only have a favorite seat in the house, but that you will also gain a new level of comfort with our patented wellness positioning and lift options.
                </p>
                <button className="mt-4 bg-[#105790] text-white text-sm font-semibold py-3 px-10 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
          <div className="text-center pt-10">
            <button className="w-fit py-3.5 px-14 bg-[#105790] text-white rounded-md">View All Categories</button>
          </div>
        </div>
      </section>

      <section className="md:py-10 md:pb-20 px-5 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:gap-x-24 lg:grid-cols-3 gap-4">
            <div className="col-span-1 [&_h2]:text-6xl [&_h2]:font-bold [&_h2]:leading-[1.1] [&_p]:text-lg [&_p]:leading-5 [&_p]:py-4 [&_p]:font-medium [&_p]:pb-10">
              <h2>Medical <span className="block">Equipment</span> <span className="block">Rentals</span></h2>
              <p>As the leading home medical equipment retail store, we provide high quality weekly or monthly rentals. Prebook medical supply rentals in Colorado online or in-store.</p>
              <button className="bg-[#105790] p-4 px-12 font-medium rounded-md text-white">View our Rentals</button>
            </div>
            <div className="col-span-2 space-y-4 [&_h3]:text-2xl">
              <div className="py-7 px-10 bg-[#fff3ce]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="font-medium text-gray-900 capitalize">Reclining Lift Chair With Heat & Massage</h3>
                    <p className="mt-1 font-medium text-gray-500">From $150/week</p>
                    <div className="text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit"> <span className="bg-[#ffbc00] p-1 px-4"><img src="/images/img/star-icon.png" alt="icon" className="inline w-3.5 -mt-1 mr-1.5" />4.2</span><span className="bg-[#e3e99f] p-1 px-3">56 Reviews</span></div>
                    <a className="text-sm font-semibold text-primary-600 hover:text-primary-500 tracking-widest" href="/rentals/mobility-scooter-easy-disassemble">REQUEST RENTALS <span className="text-3xl leading-5 align-top text-[#3a729b]">→</span></a>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75">
                      <img src="/images/img/Recliner-Chair--6.png" loading="lazy" alt="Mobility scooter Easy disassemble." className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-7 px-10 bg-[#d5ffea]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="font-medium text-gray-900 capitalize">Reclining Lift Chair With Heat & Massage</h3>
                    <p className="mt-1 font-medium text-gray-500">From $150/week</p>
                    <div className="text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit"> <span className="bg-[#ffbc00] p-1 px-4"><img src="/images/img/star-icon.png" alt="icon" className="inline w-3.5 -mt-1 mr-1.5" />4.2</span><span className="bg-[#e3e99f] p-1 px-3">56 Reviews</span></div>
                    <a className="text-sm font-semibold text-primary-600 hover:text-primary-500 tracking-widest" href="/rentals/mobility-scooter-easy-disassemble">REQUEST RENTALS <span className="text-3xl leading-5 align-top text-[#3a729b]">→</span></a>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75">
                      <img src="/images/img/standard1.png" loading="lazy" alt="Mobility scooter Easy disassemble." className="h-full w-full object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-7 px-10 bg-[#fff2fc]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="font-medium text-gray-900 capitalize">Reclining Lift Chair With Heat & Massage</h3>
                    <p className="mt-1 font-medium text-gray-500">From $150/week</p>
                    <div className="text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit"> <span className="bg-[#ffbc00] p-1 px-4"><img src="/images/img/star-icon.png" alt="icon" className="inline w-3.5 -mt-1 mr-1.5" />4.2</span><span className="bg-[#e3e99f] p-1 px-3">56 Reviews</span></div>
                    <a className="text-sm font-semibold text-primary-600 hover:text-primary-500 tracking-widest" href="/rentals/mobility-scooter-easy-disassemble">REQUEST RENTALS <span className="text-3xl leading-5 align-top text-[#3a729b]">→</span></a>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75">
                      <img src="/images/img/bed-rails-support_2.png" loading="lazy" alt="Mobility scooter Easy disassemble." className="h-[150px] w-full object-contain object-right" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* this section bg image and Linear gradient color attached the style.css file */}
      <section className="backgroungOverlay px-5 py-20 bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto">
          <div className="[&_h2]:text-5xl [&_h2]:pb-3 [&_h2]:font-bold [&_p]:text-lg [&_p]:font-medium">
            <h2>SkyMed Difference</h2>
            <p className="lg:w-[50%]">Choose from one of the product categories above or click the arrow below to view the full range.</p>
            <div className="my-5 [&_span]:block [&_span]:font-medium [&_span]:uppercase [&_span]:tracking-wider [&_span]:text-xl bg-[url(/images/img/right-icon.png)] bg-no-repeat bg-[length:26px_18px] bg-[left_top_6px] pl-10">
              <span>Product experts</span>
              <p>Benefits form our experience</p>
            </div>
            <div className="pb-8 [&_span]:block [&_span]:font-medium [&_span]:uppercase [&_span]:tracking-wider [&_span]:text-xl bg-[url(/images/img/right-icon.png)] bg-no-repeat bg-[length:26px_18px] bg-[left_top_6px] pl-10">
              <span>Product experts</span>
              <p>Benefits form our experience</p>
            </div>
            <button className="bg-[#105790] p-2.5 px-10 font-medium rounded-md text-white">Shop Now</button>
          </div>
        </div>
      </section>

      <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20">
            <div className="grid grid-cols-12 border-b-2">
              <div className="col-span-5 bg-[url(/images/img/call-icon.png)] bg-no-repeat bg-[length:45px_45px] bg-[left_top_14px] pl-16 [&_span]:font-semibold [&_span]:text-xl  [&_span]:text-gray-400 [&_p]:font-bold [&_p]:text-4xl [&_p]:text-[#105790]">
                <span>Call us</span>
                <p>+720 350 4073</p>
              </div>
              <div className="col-span-2 -mb-8">
                <img className="h-36 w-auto" width="44" height="40" src="/images/img/footer-logo.png" alt="sky medical logo" />
              </div>
              <div className="col-span-5 [&_p]:text-3xl [&_p]:uppercase [&_p]:text-black [&_p]:font-bold [&_p]:tracking-widest [&_span]:text-[#105790] [&_span]:text-xl text-end [&_span]:block [&_span]:font-medium">
                <p>6 Days a week</p>
                <span>10:00 am to 6:00 pm</span>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Products
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li>
                        <a href="/products/breathing" className="text-gray-500 hover:text-gray-600">Breathing</a>
                      </li>
                      <li>
                        <a href="/products/compression" className="text-gray-500 hover:text-gray-600">Compression</a>
                      </li>
                      <li>
                        <a href="/products/mobility" className="text-gray-500 hover:text-gray-600">Mobility</a>
                      </li>
                      <li>
                        <a href="/products/assistive-devices" className="text-gray-500 hover:text-gray-600">Assistive Devices</a>
                      </li>
                      <li>
                        <a href="/products" className="text-gray-500 hover:text-gray-600">More Products</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Customer Service
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li>
                        <a href="/contact" className="text-gray-500 hover:text-gray-600">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li>
                        <a href="/about" className="text-gray-500 hover:text-gray-600">Who we are</a>
                      </li>
                      <li>
                        <a href="/blog" className="text-gray-500 hover:text-gray-600">Blog</a>
                      </li>
                      <li>
                        <a href="/terms-and-conditions" className="text-gray-500 hover:text-gray-600">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="https://info.simplyrenting.com/FHQ" className="text-gray-500 hover:text-gray-600">Addition Info</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Legal
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li>
                        <a href="/terms-service" className="text-gray-500 hover:text-gray-600">Terms of Service</a>
                      </li>
                      <li>
                        <a href="/return-policy" className="text-gray-500 hover:text-gray-600">Return Policy</a>
                      </li>
                      <li>
                        <a href="/privacy-policy" className="text-gray-500 hover:text-gray-600">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/shipping-policy" className="text-gray-500 hover:text-gray-600">Shipping Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
              <div className="mx-auto max-w-sm">
                <h3 className="font-semibold text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <div className="mt-4 sm:mt-6 sm:flex">

                  {/* <form className="mailchimp-signup-subscribe-form space-y-4 sm:flex sm:space-y-0" data-drupal-selector="mailchimp-signup-subscribe-block-maichimp-footer-signup-form-1" action="/" method="post" id="mailchimp-signup-subscribe-block-maichimp-footer-signup-form-1" accept-charset="UTF-8" data-once="cvJqueryValidate" novalidate="novalidate">
                    <div id="mailchimp-newsletter-3774445b58-mergefields" className="mailchimp-newsletter-mergefields"><div className="js-form-item form-item js-form-type-email form-type-email js-form-item-mergevars-email form-item-mergevars-email">

                      <div for="edit-mergevars-email" class="js-form-item form-item js-form-type- form-type- js-form-item- form-item-">
                        <label htmlFor="emailAddress" class="sr-only">Email address</label>
                      </div>

                      <input autocomplete="email" placeholder="Enter your email..." data-drupal-selector="edit-mergevars-email" data-msg-required="Email Address field is required." data-msg-email="Email Address does not contain a valid email." data-msg-maxlength="Email Address field has a maximum length of 254." type="email" id="edit-mergevars-email" name="mergevars[EMAIL]" value="" size="25" maxlength="254" class="form-email required w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" required="required" aria-required="true">

                    </div>
                    </div><input data-drupal-selector="form-alzncpnqfi7tick94d8nr3hhozjtugvxfzwwn-ubioy" type="hidden" name="form_build_id" value="form-aLZNcPNqfi7TIcK94D8nr3HhoZJtUgvXFZwwN_UbioY" className="form-item__textfield">
                      <input data-drupal-selector="edit-mailchimp-signup-subscribe-block-maichimp-footer-signup-form-1" type="hidden" name="form_id" value="mailchimp_signup_subscribe_block_maichimp_footer_signup_form_1" className="form-item__textfield">
                        <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper my-0 sm:ml-4" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Sign up" className="button js-form-submit form-submit cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white">
                        </div>

                      </form> */}

                </div>

              </div>
            </div>
            <div className="relative mt-6 flex items-center py-12 px-6 sm:py-16 sm:px-10 lg:mt-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-primary-600 bg-opacity-90"></div>
              </div>
              <div className="relative mx-auto max-w-sm text-center">


                <h3 className="field field--name-field-headline field--type-string field--label-hidden text-2xl font-bold tracking-tight text-white field__item">Get early access</h3>


                <div className="field field--name-body field--type-text-with-summary field--label-hidden mt-2 text-gray-200 field__item"><p><span>Did you sign up to the newsletter? If so, use the keyword we sent you to get access. </span><a href="/contact"><strong>Go now</strong><span><strong> →</strong></span></a></p></div>

              </div>
            </div>
          </div>
          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">©&nbsp;2024&nbsp;Sky Medical Supplies LLC.&nbsp;All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}
export default Test;