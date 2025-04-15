import BreadCrumbs from "@/app/components/breadcrumbs"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar/Navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
    <Navbar />
    <BreadCrumbs page={"Loading..."} />
    <div className="min-[1300px]:max-w-[1600px] mx-auto w-full my-5">
      <div className="grid grid-cols-12 md:gap-x-9 gap-x-0">
        {/* Product Image Section */}
        <div className="md:col-span-6 col-span-12">
          <Skeleton className="h-[600px] w-full rounded-xl" />
        </div>

        {/* Product Details Section */}
        <div className="md:col-span-6 col-span-12 space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Product Options */}
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Add to Cart Button */}
          <Skeleton className="h-12 w-full" />

          {/* Additional Info */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
} 