export const dynamic = 'force-dynamic'
import dynamicImport from 'next/dynamic'
import Navbar from './components/Navbar/Navbar'
import { ErrorBoundary } from './components/ErrorBoundary'
import CounterSlider from './components/CounterSlider'
import Banner from './components/Banner/page'
import ImageText from './components/ImageWithText'
import PilotCollection from './components/pilotCollection'

// Loading component
const LoadingFallback = () => (
  <div className='h-[400px] bg-gray-100 animate-pulse flex items-center justify-center'>
    <div className='text-gray-500'>Loading...</div>
  </div>
)

// Lazy load components that are not immediately visible
// const Slider = dynamicImport(() => import('./components/Slider'), {
//   loading: LoadingFallback,
//   ssr: true
// })

const FeatureProduct = dynamicImport(
  () => import('./components/FeatureProduct'),
  {
    loading: LoadingFallback,
    ssr: true
  }
)

const CategoryList = dynamicImport(() => import('./components/categories'), {
  loading: LoadingFallback,
  ssr: true
})

const StarProducts = dynamicImport(() => import('./components/StarProducts'), {
  loading: LoadingFallback,
  ssr: true
})

// const Womenjackets = dynamicImport(() => import("./components/WomenJackets"), {
//   loading: LoadingFallback,
//   ssr: true
// });

// const Testimonial = dynamicImport(() => import('./components/Testimonial'), {
//   loading: LoadingFallback,
//   ssr: true
// })

const CallUs = dynamicImport(() => import('./components/CallUs'), {
  loading: LoadingFallback,
  ssr: true
})

const Contact = dynamicImport(() => import('./components/Contact'), {
  loading: LoadingFallback,
  ssr: true
})

const Footer = dynamicImport(() => import('./components/Footer'), {
  loading: LoadingFallback,
  ssr: true
})

export default function Home () {
  
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        {/* <HeroBanner /> GSAP Hero Banner */}
        <Banner />
        {/* <Slider /> */}
        <StarProducts />
        {/* <TextSlider /> */}
        <CategoryList />
        <FeatureProduct />
        {/* <Womenjackets /> */}
        <CounterSlider />
        {/* <ImageText /> shop collection old */}
        <PilotCollection />
        {/* <Testimonial /> */}
        <CallUs />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
