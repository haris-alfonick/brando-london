export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-4 border-[#333] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#333] font-medium">Loading...</p>
      </div>
    </div>
  )
} 