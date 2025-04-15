import { Skeleton } from "@/components/ui/skeleton"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"
import BreadCrumbs from "../components/breadcrumbs"

export default function Loading() {
  return (
    <>
    <Navbar />
    <BreadCrumbs page={"Loading..."} />
    <div className="px-5 2xl:py-12 lg:py-8 py-5">
      <div className="grid grid-cols-12 md:gap-x-8">
        {/* Sidebar */}
        <div className="xl:col-span-3 col-span-12">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="xl:col-span-9 col-span-12">
          <Skeleton className="h-12 w-64 mb-10" />
          <div className="grid grid-cols-12 gap-x-7 md:gap-y-0 gap-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="lg:col-span-3 md:col-span-4 col-span-6">
                <Skeleton className="h-[500px] w-full rounded-xl" />
                <div className="space-y-2 my-3">
                  <Skeleton className="h-5 w-[150px]" />
                  <Skeleton className="h-5 w-[250px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
} 