import { Skeleton } from "@/components/ui/skeleton"

const SummaryLoading = () => {
  return(
    <>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/4 h-6" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/4 h-6" />
      </div>
      <div className="flex gap-4">
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-1/4 h-6" />
      </div>
    </>
  )
}

export default SummaryLoading