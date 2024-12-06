import './style.css'
const Test = () => {
  return (
    <>
      <div className='specialOfferSec md:py-14 py-4 px-5'>
        <div className='container mx-auto lg:max-w-7xl'>
          <div className='specialOffer grid grid-cols-2 justify-items-end place-items-center sm:py-12 py-8 sm:px-10 px-6 rounded-xl'>
            <div className='[&>img]:w-full'>
              <img src='/images/img/special-offer.png' alt='Special Offer' />
            </div>
            <div>
              <button className='w-fit sm:py-3.5 py-2.5 sm:px-14 px-4 sm:text-base text-sm bg-white text-[#105790] rounded-md'>
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className='md:py-10 md:pt-2 py-4 px-5'>
        <div className='container mx-auto lg:max-w-7xl'>
          <div className='sm:[&_h2]:text-4xl [&_h2]:text-3xl [&_h2]:leading-8 w-fit mx-auto [&_h2]:font-bold text-center [&_p]:text-lg [&_p]:font-medium sm:[&_p]:w-[80%] [&_p]:w-full [&_p]:mx-auto [&_p]:mt-5 [&_p]:leading-5'>
            <h2>The widest range of products</h2>
            <p>
              Choose from one of the product categories above or click the arrow
              below to view the full range.
            </p>
          </div>

          <div className='grid md:grid-cols-3 sm:gap-x-5 gap-x-2.5 grid-cols-2 sm:pt-28 pt-20 sm:gap-y-32 gap-y-20'>
            <div className='relative mx-auto bg-[#fff3ce] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/chair.png'
                  alt='Lift Chair'
                  className='sm:h-[200px] h-[100px] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm sm:mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='relative mx-auto bg-[#e6f3ff] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/wheel-chair.webp'
                  alt='Wheel Chair'
                  className='sm:h-[200px] h-[100px] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='relative mx-auto bg-[#e6fffd] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/scooter.webp'
                  alt='Lift Chair'
                  className='sm:h-[200px] h-[100px] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='relative mx-auto bg-[#d5ffea] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/standard.png'
                  alt='Lift Chair'
                  className='sm:h-[200px] h-[100px] sm:w-[70%] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='relative mx-auto bg-[#c7f5ff] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/toilet.png'
                  alt='Lift Chair'
                  className='sm:h-[200px] h-[100px] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>

            <div className='relative mx-auto bg-[#fff2fc] rounded-t-[50%] sm:p-6 p-4 sm:h-full h-fit'>
              <div className='flex justify-center sm:mt-[-100px] mt-[-60px]'>
                <img
                  src='/images/img/nova-zoom.png'
                  alt='Lift Chair'
                  className='sm:h-[200px] h-[100px] w-auto'
                />
              </div>
              <div className='absolute sm:top-10 top-2 sm:right-0 -right-2 bg-[url(/images/img/vector-1.png)] bg-contain sm:h-[110px] h-[100px] bg-no-repeat rounded-full sm:px-5 px-3.5 pt-[35px] text-center'>
                <p className='text-xs font-semibold text-gray-700'>
                  Starting from
                </p>
                <p className='sm:text-lg text-sm font-bold text-black'>$1500</p>
              </div>
              <div className='text-center mt-4 [&_p]:leading-4 sm:[&_p]:h-full [&_p]:h-16 sm:[&_p]:overflow-y-hidden [&_p]:overflow-y-auto'>
                <h2 className='text-xl font-semibold text-gray-900 sm:mb-5 mb-2 sm:mt-10 mt-12'>
                  Lift Chairs
                </h2>
                <p className='text-gray-700 text-sm mt-2'>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <button className='mt-4 bg-[#105790] text-white text-sm font-semibold sm:py-3 py-2 sm:px-10 px-5 rounded-md'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className='text-center pt-10'>
            <button className='w-fit py-3.5 px-14 bg-[#105790] text-white rounded-md'>
              View All Categories
            </button>
          </div>
        </div>
      </section>

      <div className='md:py-10 md:pb-20 px-5 py-10'>
        <div className='container mx-auto lg:max-w-7xl'>
          <div className='grid grid-cols-1 lg:gap-x-24 lg:grid-cols-3 gap-4'>
            <div className='col-span-1 sm:text-left text-center'>
              <h2 className='text-3xl sm:text-6xl font-bold leading-tight'>
                Medical <span className='sm:block inline'>Equipment</span>
                <span className='block'>Rentals</span>
              </h2>
              <p className='text-base sm:text-lg leading-5 py-4 sm:pb-10 font-medium'>
                As the leading home medical equipment retail store, we provide
                high quality weekly or monthly rentals. Prebook medical supply
                rentals in Colorado online or in-store.
              </p>
              <button
                style={{ backgroundColor: '#105790' }}
                className='sm:p-4 p-3 sm:px-12 px-8 sm:text-lg text-base font-medium rounded-md text-white'
              >
                View our Rentals
              </button>
            </div>

            <div className='col-span-2 space-y-4'>
              <div
                className='sm:py-7 py-5 sm:px-10 px-6 lg:bg-none bg-no-repeat'
                style={{
                  backgroundColor: '#fff3ce',
                  backgroundImage: 'url(/images/img/Recliner-Chair--6.png)',
                  backgroundPosition: 'center right 15px',
                  backgroundSize: '130px 130px'
                }}
              >
                <h3 className='text-lg sm:text-2xl leading-6 sm:pr-0 pr-12 font-medium text-gray-900 capitalize'>
                  Reclining Lift Chair With Heat & Massage
                </h3>
                <p className='mt-1 font-medium text-gray-500'>From $150/week</p>
                <div className='text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit'>
                  <span
                    className='p-1 px-4'
                    style={{ backgroundColor: '#ffbc00' }}
                  >
                    <img
                      src='/images/img/star-icon.png'
                      alt='icon'
                      className='inline w-3.5 -mt-1 mr-1.5'
                    />
                    4.2
                  </span>
                  <span
                    className='p-1 px-3'
                    style={{ backgroundColor: '#e3e99f' }}
                  >
                    56 Reviews
                  </span>
                </div>
                <a
                  className='text-sm font-semibold text-blue-600 hover:text-blue-500 tracking-widest'
                  href='/rentals/mobility-scooter-easy-disassemble'
                >
                  REQUEST RENTALS{' '}
                  <span
                    className='text-3xl leading-5 align-top'
                    style={{ color: '#3a729b' }}
                  >
                    →
                  </span>
                </a>
              </div>

              <div
                className='sm:py-7 py-5 sm:px-10 px-6 lg:bg-none bg-no-repeat'
                style={{
                  backgroundColor: '#d5ffea',
                  backgroundImage: 'url(/images/img/standard255.png)',
                  backgroundPosition: 'center right 15px',
                  backgroundSize: '150px 95px'
                }}
              >
                <h3 className='text-lg sm:text-2xl leading-6 sm:pr-0 pr-12 font-medium text-gray-900 capitalize'>
                  Reclining Lift Chair With Heat & Massage
                </h3>
                <p className='mt-1 font-medium text-gray-500'>From $150/week</p>
                <div className='text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit'>
                  <span
                    className='p-1 px-4'
                    style={{ backgroundColor: '#ffbc00' }}
                  >
                    <img
                      src='/images/img/star-icon.png'
                      alt='icon'
                      className='inline w-3.5 -mt-1 mr-1.5'
                    />
                    4.2
                  </span>
                  <span
                    className='p-1 px-3'
                    style={{ backgroundColor: '#e3e99f' }}
                  >
                    56 Reviews
                  </span>
                </div>
                <a
                  className='text-sm font-semibold text-blue-600 hover:text-blue-500 tracking-widest'
                  href='/rentals/mobility-scooter-easy-disassemble'
                >
                  REQUEST RENTALS{' '}
                  <span
                    className='text-3xl leading-5 align-top'
                    style={{ color: '#3a729b' }}
                  >
                    →
                  </span>
                </a>
              </div>

              <div
                className='sm:py-7 py-5 sm:px-10 px-6 lg:bg-none bg-no-repeat'
                style={{
                  backgroundColor: '#fff2fc',
                  backgroundImage: 'url(/images/img/bed-rails-support_2.png)',
                  backgroundPosition: 'center right 0px',
                  backgroundSize: '100px 200px'
                }}
              >
                <h3 className='text-lg sm:text-2xl leading-6 sm:pr-0 pr-12 font-medium text-gray-900 capitalize'>
                  Reclining Lift Chair With Heat & Massage
                </h3>
                <p className='mt-1 font-medium text-gray-500'>From $150/week</p>
                <div className='text-black my-3 mb-6 text-sm overflow-hidden rounded-xl flex justify-between items-center w-fit'>
                  <span
                    className='p-1 px-4'
                    style={{ backgroundColor: '#ffbc00' }}
                  >
                    <img
                      src='/images/img/star-icon.png'
                      alt='icon'
                      className='inline w-3.5 -mt-1 mr-1.5'
                    />
                    4.2
                  </span>
                  <span
                    className='p-1 px-3'
                    style={{ backgroundColor: '#e3e99f' }}
                  >
                    56 Reviews
                  </span>
                </div>
                <a
                  className='text-sm font-semibold text-blue-600 hover:text-blue-500 tracking-widest'
                  href='#'
                >
                  REQUEST RENTALS{' '}
                  <span
                    className='text-3xl leading-5 align-top'
                    style={{ color: '#3a729b' }}
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this section bg image and Linear gradient color attached the style.css file */}
      <div className='bg-white relative overflow-hidden'>
        <div className='backgroungOverlay sm:pt-10 pt-96 px-5 py-10 md:py-20 xl:py-32 sm:bg-cover bg-contain bg-center bg-no-repeat'>
          <div className='container mx-auto lg:max-w-7xl'>
            <div className='sm:text-left text-center'>
              <h2 className='text-3xl sm:text-5xl font-bold pb-3'>
                SkyMed Difference
              </h2>
              <p className='text-lg sm:text-xl font-normal mb-8 leading-5 lg:w-1/2'>
                Choose from one of the product categories above or click the
                arrow below to view the full range.
              </p>

              <div
                className='my-4 sm:my-5 sm:ml-0 w-fit mx-auto text-left'
                style={{
                  backgroundImage: "url('/images/img/right-icon.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '26px 18px',
                  backgroundPosition: 'left top 4px',
                  paddingLeft: '40px'
                }}
              >
                <span className='font-medium uppercase tracking-wider sm:text-xl text-base block'>
                  Product experts
                </span>
                <p className='text-sm sm:text-base mt-1'>
                  Benefits from our experience
                </p>
              </div>

              <div
                className='my-4 sm:my-5 sm:ml-0 w-fit mx-auto text-left'
                style={{
                  backgroundImage: "url('/images/img/right-icon.png')",
                  backgroundSize: '26px 18px',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 6px top',
                  paddingLeft: '40px'
                }}
              >
                <span className='font-medium uppercase tracking-wider sm:text-xl text-base'>
                  Product experts
                </span>
                <p className='text-sm sm:text-base mt-1'>
                  Benefits from our experience
                </p>
              </div>

              <button
                className='p-3 mt-4 px-10 font-medium rounded-md text-white'
                style={{ background: '#105790' }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* review */}
      <div className='testimonialWrap py-12 px-5 sm:py-20'>
        <div className='container mx-auto lg:max-w-5xl'>
          <div
            className='borderWrap1 border relative p-5 rounded-xl'
            style={{
              position: 'relative',
              borderRadius: '0.75rem',
              padding: '1.25rem'
            }}
          >
            <div
              className='img'
              style={{
                content: "''",
                position: 'absolute',
                width: '200px',
                height: '200px',
                top: '-30px',
                left: '70px',
                backgroundImage: "url('/images/img/test1.webp')",
                backgroundSize: '115px 115px',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            <div
              className='borderWrap2 border relative p-5 rounded-xl'
              style={{
                position: 'relative',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div
                className='img'
                style={{
                  content: "''",
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  top: '-20px',
                  right: '40px',
                  backgroundImage: "url('/images/img/test4.webp')",
                  backgroundSize: '85px 85px',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>

              <div
                className='borderWrap3 border relative p-5 rounded-xl'
                style={{
                  position: 'relative',
                  borderRadius: '0.75rem',
                  padding: '1.25rem'
                }}
              >
                <div
                  className='img'
                  style={{
                    content: "''",
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    bottom: '-165px',
                    left: '100px',
                    backgroundImage: "url('/images/img/test3.webp')",
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>

                <div
                  className='borderWrap4 relative p-5 rounded-xl text-center py-14 sm:py-20'
                  style={{
                    position: 'relative',
                    borderRadius: '0.75rem',
                    padding: '3rem 1.25rem'
                  }}
                >
                  <div
                    className='img'
                    style={{
                      content: "''",
                      position: 'absolute',
                      width: '200px',
                      height: '200px',
                      bottom: '-175px',
                      right: '-110px',
                      backgroundImage: "url('/images/img/test2.webp')",
                      backgroundSize: '70px 70px',
                      backgroundRepeat: 'no-repeat'
                    }}
                  ></div>

                  <div>
                    <img
                      src='/images/img/group-star.png'
                      className='w-32 mx-auto mb-2 md:w-48 md:mb-4'
                      alt='Star Icon'
                    />
                    <strong className='text-2xl sm:text-4xl'>
                      What are people saying?
                    </strong>
                  </div>

                  <div>
                    <p className='w-full py-5 text-sm mx-auto sm:w-[70%] sm:text-lg'>
                      I am an 80 yr. old women from Atlanta, Ga. I spoke on the
                      phone with Hussein about renting a scooter approx. 10 days
                      before my family and I started our vacation in the
                      mid-western area. I rented a 4-wheel scooter because I
                      have a problem walking and I had an exciting and ...
                    </p>
                    <strong className='h text-sm sm:text-2xl'>
                      Linda, Customer
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review */}

      {/* Article */}
      <section className='md:py-16 py-8 px-4 bg-[#f6f6f6]'>
        <div className='container mx-auto lg:max-w-7xl'>
          <div className='sm:[&_h2]:text-4xl [&_h2]:text-3xl [&_h2]:font-bold sm:text-left text-center sm:px-0 px-4 [&_p]:text-base [&_p]:font-medium sm:[&_p]:w-[55%] [&_p]:w-full [&_p]:ml-0 [&_p]:mb-10 sm:[&_p]:mt-4 [&_p]:mt-2 [&_p]:leading-5'>
            <h2>Relevant Articles</h2>
            <p>
              Get weekly articles in your inbox on the latest medical supply
              news, exclusive deals, and helpful tips.
            </p>
          </div>
          <div className='grid sm:grid-cols-3 grid-cols-1 sm:px-0 sm:gap-y-0 gap-y-5 gap-x-6 [&_img]:w-full'>
            <div className='shadow-[0px_0px_10px_0px_#e5e5e5] rounded-lg'>
              <img src='/images/img/man-wheelChair.webp' alt='Wheel Chair' />
              <div className='p-6 pt-3 [&>span]:text-base [&>span]:block [&>span]:text-[#bebebe] [&_strong]:block [&_strong]:text-xl [&_strong]:font-semibold [&_strong]:leading-6 [&_p]:leading-5 [&_p]:py-2.5 [&_p]:pb-4 [&_p]:text-sm'>
                <span>MON, 01/29/2024 - 23:24</span>
                <strong>
                  Elevate Your Sleep, Relieve Pain, And Enhance Your Well-being
                  With Electric Bed Frames
                </strong>
                <p>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <a
                  className='text-sm uppercase font-semibold text-primary-600 hover:text-primary-500 tracking-widest'
                  href='#'
                >
                  Read Full Story{' '}
                  <span className='text-3xl leading-5 align-top text-[#3a729b]'>
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className='shadow-[0px_0px_10px_0px_#e5e5e5] rounded-lg'>
              <img src='/images/img/rest-Chair.webp' alt='Wheel Chair' />
              <div className='p-6 pt-3 [&>span]:text-base [&>span]:block [&>span]:text-[#bebebe] [&_strong]:block [&_strong]:text-xl [&_strong]:font-semibold [&_strong]:leading-6 [&_p]:leading-5 [&_p]:py-2.5 [&_p]:pb-4 [&_p]:text-sm'>
                <span>MON, 01/29/2024 - 23:24</span>
                <strong>
                  Unleashing Endurance: Secrets To Maximize Your Inogen Battery
                  Lifespan And Efficiency.
                </strong>
                <p>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <a
                  className='text-sm uppercase font-semibold text-primary-600 hover:text-primary-500 tracking-widest'
                  href='#'
                >
                  Read Full Story{' '}
                  <span className='text-3xl leading-5 align-top text-[#3a729b]'>
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className='shadow-[0px_0px_10px_0px_#e5e5e5] rounded-lg'>
              <img src='/images/img/women-Chair.webp' alt='Wheel Chair' />
              <div className='p-6 pt-3 [&>span]:text-base [&>span]:block [&>span]:text-[#bebebe] [&_strong]:block [&_strong]:text-xl [&_strong]:font-semibold [&_strong]:leading-6 [&_p]:leading-5 [&_p]:py-2.5 [&_p]:pb-4 [&_p]:text-sm'>
                <span>MON, 01/29/2024 - 23:24</span>
                <strong>
                  Find Peace In Every Breath: Oxygen Concentrator Store
                </strong>
                <p>
                  Our hope is that with this recliner, you will not only have a
                  favorite seat in the house, but that you will also gain a new
                  level of comfort with our patented wellness positioning and
                  lift options.
                </p>
                <a
                  className='text-sm uppercase font-semibold text-primary-600 hover:text-primary-500 tracking-widest'
                  href='#'
                >
                  Read Full Story{' '}
                  <span className='text-3xl leading-5 align-top text-[#3a729b]'>
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='text-center pt-10'>
            <button className='w-fit py-3.5 px-14 bg-[#105790] text-white rounded-md'>
              View All Articles
            </button>
          </div>
        </div>
      </section>
      {/* Article */}

      {/* Footer */}
      <footer
        aria-labelledby='footer-heading'
        className='bg-white border-t border-gray-200 [&_h3]:text-xl [&_h3]:text-[#a4a6a6] [&_h3]:font-bold'
      >
        <div className='sm:pt-16 pt-10 pb-10'>
          {/* <div className="container mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-12 lg:gap-y-0 lg:pb-0 pb-4 sm:justify-items-stretch justify-items-start sm:px-5 px-3">
              <div className="lg:col-span-5 sm:col-span-6 col-span-12 sm:p-0 sm:pr-0 p-3  pr-10 sm:rounded-r-none rounded-r-full sm:bg-transparent bg-[#c7f5ff] lg:order-1 order-2 bg-[url(/images/img/call-icon.png)] bg-no-repeat sm:bg-[length:45px_45px] bg-[length:25px_25px] sm:bg-[left_top_14px] bg-[left_20px_top_24px] sm:pl-16 pl-14 [&_span]:font-semibold sm:[&_span]:text-xl [&_span]:text-sm [&_span]:text-gray-400 [&_p]:font-bold sm:[&_p]:text-4xl [&_p]:text-base [&_p]:text-[#105790]">
                <span>Call us</span>
                <p>+720 350 4073</p>
              </div>
              <div className="lg:col-span-2 col-span-12 lg:order-2 order-1 lg:-mb-8 mb-4">
                <img className="sm:h-36 h-24 w-auto" width="44" height="40" src="/images/img/footer-logo.png" alt="sky medical logo" />
              </div>
              <div className="lg:col-span-5 sm:col-span-6 col-span-12 sm:bg-transparent bg-[#e9fbff] sm:rounded-r-none rounded-r-full sm:p-0 sm:pr-0 p-3 pr-10 lg:order-3 sm:pl-0 pl-10 order-2 [&_p]:text-base sm:[&_p]:text-3xl [&_p]:uppercase [&_p]:text-black [&_p]:font-bold [&_p]:tracking-widest [&_span]:text-[#105790] sm:[&_span]:text-xl [&_span]:text-sm sm:text-end text-start [&_span]:block [&_span]:font-medium">
                <p>6 Days a week</p>
                <span>10:00 am to 6:00 pm</span>
              </div>
            </div>
          </div> */}

          <div className='custom-section'>
            <div className='container mx-auto max-w-7xl'>
              <div className='grid'>
                <div className='contact-info'>
                  <span>Call us</span>
                  <p>+720 350 4073</p>
                </div>
                <div className='logo'>
                  <img
                    src='/images/img/footer-logo.png'
                    alt='sky medical logo'
                    width='44'
                    height='40'
                  />
                </div>
                <div className='working-hours'>
                  <p>6 Days a week</p>
                  <span>10:00 am to 6:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className='py-6 sm:pt-12 pt-6 bg-[#f5fffe] border-t-2 border-b-2'>
            <div className='container mx-auto px-5'>
              <h3 className='text-sm font-medium text-gray-900'>
                Featured Products
              </h3>
              <ul className='flex sm:flex-row flex-col justify-start items-center lg:gap-x-5 gap-x-3 sm:gap-y-0 gap-y-1.5 py-3 [&_li]:pl-10 text-sm [&_li]:py-2 [&_li]:text-[#1a2027] [&_li]:bg-[left_top_5px] sm:[&_li]:w-fit [&_li]:w-full [&_li]:bg-[length:32px_29px] [&_li]:bg-no-repeat'>
                <li className='bg-[url(/images/img/icon-18.png)]'>
                  <a href='#'>Lift Chairs</a>
                </li>
                <li className='bg-[url(/images/img/icon-12.png)]'>
                  <a href='#'>Walkers + Rollators</a>
                </li>
                <li className='bg-[url(/images/img/icon-14.png)]'>
                  <a href='#'>Compression</a>
                </li>
                <li className='bg-[url(/images/img/icon-17.png)]'>
                  <a href='#'>Hospital Beds</a>
                </li>
                <li className='bg-[url(/images/img/icon-16.png)]'>
                  <a href='#'>Bathroom Safety</a>
                </li>
                <li className='bg-[url(/images/img/icon-13.png)]'>
                  <a href='#'>more</a>
                </li>
                <li className='bg-[#c7f5ff] !w-fit sm:mt-0 mt-2 sm:ml-auto sm:mr-0 ml-0 mr-auto bg-[url(/images/img/icon-11.png)] tracking-widest font-semibold !bg-[length:30px_30px] !bg-[left_18px_top_5px] px-6 !pl-14 !py-2.5 rounded-full'>
                  <a href='#'>OFFERS</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto max-lg:max-w-7xl'>
            <div className='sm:mt-8 mt-6 px-5 [&_li]:text-sm'>
              <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                <div className='space-y-4 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Products
                    </h3>
                    <ul role='list' className='mt-2 space-y-1.5'>
                      <li>
                        <a
                          href='/products/breathing'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Breathing
                        </a>
                      </li>
                      <li>
                        <a
                          href='/products/compression'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Compression
                        </a>
                      </li>
                      <li>
                        <a
                          href='/products/mobility'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Mobility
                        </a>
                      </li>
                      <li>
                        <a
                          href='/products/assistive-devices'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Assistive Devices
                        </a>
                      </li>
                      <li>
                        <a
                          href='/products'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          More Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Customer Service
                    </h3>
                    <ul role='list' className='mt-2 space-y-1.5'>
                      <li>
                        <a
                          href='/contact'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Company
                    </h3>
                    <ul role='list' className='mt-2 space-y-1.5'>
                      <li>
                        <a
                          href='/about'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Who we are
                        </a>
                      </li>
                      <li>
                        <a
                          href='/blog'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href='/terms-and-conditions'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://info.simplyrenting.com/FHQ'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Addition Info
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>Legal</h3>
                    <ul role='list' className='mt-2 space-y-1.5'>
                      <li>
                        <a
                          href='/terms-service'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href='/return-policy'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Return Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href='/privacy-policy'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href='/shipping-policy'
                          className='text-gray-500 hover:text-gray-600'
                        >
                          Shipping Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='container mx-auto max-lg:max-w-7xl'>
          <div className='grid lg:grid-cols-2 items-center gap-x-5 sm:gap-y-0 gap-y-2 sm:px-5 px-2'>
            <div className='bg-[#f1f5f9] sm:px-10 px-1 xl:py-8 sm:py-5 py-2 rounded-lg sm:pl-36 max-sm:pt-24 bg-[url(/images/img/icon-15.png)] bg-no-repeat bg-[length:100px_80px] sm:bg-[center_left_24px] bg-[top_16px_center] sm:text-start text-center'>
              <h3 className='!font-semibold !text-black'>
                Sign up for our Newsletter
              </h3>
              <p className='mt-2 text-sm leading-4 sm:pb-0 pb-2 text-gray-500'>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className='my-2 flex justify-between gap-x-3 w-full [&_input]:rounded [&_input]:w-full [&_input]:text-xs [&_input]:p-2 [&_input]:border [&_input]:bg-white [&_input]:focus-visible:ring-0 [&_input]:focus-visible:!outline-0 [&_input]:focus-visible:!outline-none [&_button]:bg-[#105790] [&_button]:w-32 [&_button]:py-2 [&_button]:pb-2.5 [&_button]:px-2 [&_button]:text-sm [&_button]:font-semibold [&_button]:text-white [&_button]:rounded-md'>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter your email...'
                />
                <button>Sign Up</button>
              </div>
            </div>
            <div className='py-8 px-6 sm:py-10 sm:px-10 lg:mt-0 rounded-lg text-[#c5dcdd] bg-gradient-to-r from-[#267994] to-[#27c185]'>
              <div className='relative mx-auto max-w-sm text-center'>
                <h3 className='!font-semibold py-2 !text-white'>
                  Get early access
                </h3>
                <p className='text-sm leading-4'>
                  Did you sign up to the newsletter? If so, use the keyword we
                  sent you to get access.
                  <a href='/contact' className='font-bold'>
                    {' '}
                    Go now{' '}
                    <span className='text-xl font-bold align-sub'>→</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='text-center md:text-left px-5 sm:py-6 py-4'>
            <p className='sm:text-base text-sm text-gray-500 sm:font-semibold font-medium'>
              ©&nbsp;2024&nbsp;Sky Medical Supplies LLC.&nbsp;All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
      {/* Footer */}
    </>
  )
}
export default Test
