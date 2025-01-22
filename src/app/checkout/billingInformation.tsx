"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setBillingInfo, setShippingInfo, setShippingSameAsBilling, } from "@/lib/features/checkout/orderSlice"
import debounce from "lodash.debounce";
import { useEffect, useState } from "react"
import { Country, State } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"
import PaymentOptions from "./paymentOptions"
import PlaceOrder from "./PlaceOrder"
import { updateCartAndCalculateTotals } from "@/utils/cartUtils"

const BillingInformation = () => {
  const dispatch = useAppDispatch();
  const billing = useAppSelector((state) => state.order.billing);
  const shipping = useAppSelector((state) => state.order.shipping)
  const isShippingSameAsBilling = useAppSelector(
    (state) => state.order.isShippingSameAsBilling
  );
  
  const [localBilling, setLocalBilling] = useState(billing);
  const [localShipping, setLocalShipping] = useState(shipping);
  const [selectedCountry, SetSelectedCountry] = useState<any>()
  const [selectedState, setSelectedState] = useState<string>();
  const [selectedShippingCountry, SetSelectedShippingCountry] = useState<any>()
  const [selectedShippingState, setSelectedShippingState] = useState<string>();
  const [isSameShippng, setisSameShippng] = useState<boolean>(false);

  // Debounced dispatch function
  const debouncedDispatch = debounce((updatedBilling: any) => {
    dispatch(setBillingInfo(updatedBilling));
  }, 300);

  const debouncedDispatchShipping = debounce((updatedShipping) => {
    dispatch(setShippingInfo(updatedShipping));
  }, 300);

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedBilling = { ...localBilling, [name]: value };
    setLocalBilling(updatedBilling); // Update local state for immediate feedback
    debouncedDispatch(updatedBilling); // Dispatch after debounce delay

    const updatedShipping = { ...updatedBilling, email: undefined };
    setLocalShipping(updatedShipping);
    debouncedDispatchShipping(updatedShipping);

    // future reference 
    // if (isShippingSameAsBilling) {
    //   const updatedShipping = { ...updatedBilling, email: undefined };
      
    //   setLocalShipping(updatedShipping);
    //   debouncedDispatchShipping(updatedShipping);
    // }
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedShipping = { ...localShipping, [name]: value };
    setLocalShipping(updatedShipping);
    debouncedDispatchShipping(updatedShipping);
  };

  useEffect(() => {
    if (isShippingSameAsBilling) {
      const { email, ...shippingInfo } = localBilling; // Exclude email
      setLocalShipping(shippingInfo); // Exclude email from shipping
      dispatch(setShippingInfo(shippingInfo));
    }
  }, [isShippingSameAsBilling, billing]);

 const countries = Country.getAllCountries()
 
 
 useEffect(() => {
  
  if (billing.country) {
    SetSelectedCountry(billing.country);
  }
  if (billing.state) {
    setSelectedState(billing.state);
  }
  if(shipping.country){
    SetSelectedShippingCountry(shipping.country)
  }
  if (shipping.state) {
    setSelectedShippingState(shipping.state);
  }
}, [billing.country, billing.state, shipping.country, shipping.state]);

const [totals, setTotals] = useState({ subtotal: 0, shipping: 0, total: 0 });
  const cartItemsData = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const updateCart = async () => {
      try {
        const storedCart = cartItemsData;
        if (!storedCart) return;

        const { updatedCart, subtotal, shipping, total } =
          await updateCartAndCalculateTotals(storedCart);

        setTotals({ subtotal, shipping, total });
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage

      } catch (error) {
        console.error("Error updating cart:", error);
      }
    };

    updateCart();
  }, [cartItemsData]);

  return(
    <>
      <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
        <h3 className='col-span-12'>Contact Information</h3>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='first_name'>Name</Label>
          <Input type='text' id='first_name' name="first_name" value={localBilling.first_name} onChange={handleBillingChange} required />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='last_name'>Last Name</Label>
          <Input type='text' id='last_name' name="last_name" value={localBilling.last_name} onChange={handleBillingChange} required />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='email'>Email Address</Label>
          <Input type='email' name="email" id='email' value={localBilling.email} onChange={handleBillingChange} required />
        </div>

        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='number'>Phone Number</Label>
          <Input type='tel' id='phone' name="phone" value={localBilling.phone} onChange={handleBillingChange} required />
        </div>
        <div className='col-span-12'>
          <Label htmlFor='address'>Shipping Address</Label>
          <Input type='text' id='address' name="address_1" value={localBilling.address_1} onChange={handleBillingChange} required />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='number'>Country </Label>
          <Select onValueChange={(value) => {
            const updatedBilling = { ...localBilling, country: value };
            SetSelectedCountry(value)
            setLocalBilling(updatedBilling); // Update local state
            debouncedDispatch(updatedBilling);
          }} value={selectedCountry} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((thisCountry) => (
                <SelectItem key={thisCountry.isoCode} value={thisCountry.isoCode}>
                  {thisCountry.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='number'>Region/State </Label>
          <Select onValueChange={(value) => {
            const updatedBilling = { ...localBilling, state: value };
            setSelectedState(value)
            setLocalBilling(updatedBilling); // Update local state
            debouncedDispatch(updatedBilling);
          }} value={selectedState} required>
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {State?.getStatesOfCountry(selectedCountry).map((thisState) => (
                <SelectItem key={thisState.isoCode} value={thisState.name}>
                  {thisState.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='number'>City</Label>
          <Input type='text' id='city' name="city" value={localBilling.city} onChange={handleBillingChange} required />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='zipCode'>Zip Code</Label>
          <Input type='text' id='postalCode' name="postalCode" value={localBilling.postalCode} onChange={handleBillingChange} required />
        </div>
        <div className='col-span-12'>
          <Label htmlFor='name'>
            Order Notes{' '}
            <span className='text-gray-400'>(Optional)</span>{' '}
          </Label>
          <Textarea
            placeholder='Type your message here.'
            id='message'
          />
        </div>
      </div>
      {/* <PlaceOrder total={totals.total} /> */}
    </>
  )
}

export default BillingInformation