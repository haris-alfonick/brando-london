import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { faStripe } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PaymentOptions = () => {
  return(
    <>
      <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
        <h3 className='col-span-12'>Payment Option</h3>
        <div className='col-span-12'>
          <RadioGroup
            className='flex gap-x-10 border py-4 px-5 rounded-lg [&>div]:flex [&>div]:flex-col [&>div]:gap-y-1.5 [&>div]:justify-center [&>div]:items-center [&_div:nth-child(1)_svg]:w-6 [&_div>svg]:h-9 [&_div:nth-child(2)_svg]:w-12 [&>div>span]:text-sm [&>div>span]:pb-1 [&>div>span]:text-[#333333]'
            defaultValue='stripeCard'
          >
            <div>
              {/* <FontAwesomeIcon icon={faPaypal} />
              <span>Paypal</span>
              <RadioGroupItem value='paypalCard' id='paypalCard' /> */}
            </div>
            <div>
              <FontAwesomeIcon icon={faStripe} />
              <span>Stripe</span>
              <RadioGroupItem value='stripeCard' id='stripeCard' />
            </div>
          </RadioGroup>
        </div>
        <div className='col-span-12'>
          <Label htmlFor='cardName'>Name on Card</Label>
          <Input type='text' id='cardName' />
        </div>
        <div className='col-span-12'>
          <Label htmlFor='cardNumber'>Card Number</Label>
          <Input type='tel' id='cardNumber' />
        </div>
        <div className='col-span-6'>
          <Label htmlFor='name'>Expire Date</Label>
          <Input type='date' id='name' />
        </div>
        <div className='col-span-6'>
          <Label htmlFor='cvc'>CVC</Label>
          <Input type='tel' id='cvc' />
        </div>
      </div>
    </>
  )
}

export default PaymentOptions