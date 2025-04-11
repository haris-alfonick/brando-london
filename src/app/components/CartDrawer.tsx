import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const CartDrawer = () => {
  return(
    <>

<Drawer direction="right">
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="md:fixed md:inset-0 md:bg-black/40 md:z-[9999]" />
        <DrawerContent className="md:bg-white md:flex md:flex-col md:rounded-t-[10px] md:h-full md:w-[400px] md:mt-24 md:fixed md:bottom-0 md:right-0 md:left-auto md:z-[99999]">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <DrawerTitle className="font-medium mb-4">
                Unstyled drawer for React.
              </DrawerTitle>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>

    </>
  )
}

export default CartDrawer