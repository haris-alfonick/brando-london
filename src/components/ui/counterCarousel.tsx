"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: (node: HTMLDivElement | null) => void
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollTo: (index: number) => void
  slidesCount: number
  orientation: "horizontal" | "vertical"
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel />")
  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [viewportRef, api] = useEmblaCarousel(
      {
        loop: true,
        align: "start",
        axis: orientation === "horizontal" ? "x" : "y",
        ...opts,
      },
      plugins
    )

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [slidesCount, setSlidesCount] = React.useState(0)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
      setSelectedIndex(api.selectedScrollSnap())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api])
    const scrollTo = React.useCallback((i: number) => api?.scrollTo(i), [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      setSlidesCount(api.scrollSnapList().length)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
      return () => {
        api.off("select", onSelect)
        api.off("reInit", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: viewportRef,
          api,
          opts,
          plugins,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          scrollTo,
          slidesCount,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
          <style jsx global>{`
            .carousel-item.active img {
              width: auto;
              height: 400px;
              object-fit: cover;
              transition: .4s ease-in-out;
            }
              @media (max-width: 768px) {
               .carousel-item.active img {
              width: 100%;
              height: 100%;
            }
              }
               .carousel-item img {
    transition: 3s ease-in-out;
  }
          `}</style>
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        data-carousel-items
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index?: number }
>(({ className, ...props }, ref) => {
  const { orientation, selectedIndex } = useCarousel()
  const [localIndex, setLocalIndex] = React.useState<number | null>(null)

  const localRef = React.useCallback((node: HTMLDivElement | null) => {
    if (!node || !node.parentElement) return
    const siblings = Array.from(node.parentElement.children)
    const idx = siblings.indexOf(node)
    setLocalIndex(idx)
    if (typeof ref === "function") ref(node)
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
  }, [ref])

  const isActive = localIndex === selectedIndex

  return (
    <div
      ref={localRef}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "carousel-item min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-[17px]" : "pt-4",
        isActive && "active",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full z-10",
        orientation === "horizontal"
          ? "left-[-105px] top-auto bottom-0 max-md:top-[-45px] max-md:bottom-auto max-md:left-auto max-md:right-[40px]"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full z-10",
        orientation === "horizontal"
          ? "-left-16 top-auto bottom-0 max-md:top-[-45px] max-md:bottom-auto max-md:left-auto max-md:right-0"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = () => {
  const { selectedIndex, scrollTo, slidesCount } = useCarousel()

  return (
    <div className="flex max-md:justify-center justify-start gap-2 mt-4 absolute left-[343px] 2xl:left-[295px] top-auto max-md:bottom-[-30px] bottom-0 max-md:left-0 max-md:right-0">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={cn(
            "h-[10px] w-[10px] rounded-full transition-colors",
            selectedIndex === index
              ? "bg-black border-[3.5px] border-[#B6B6B6] scale-[1.4]"
              : "bg-[#B6B6B6]"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}
