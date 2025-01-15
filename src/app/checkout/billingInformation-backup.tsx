"use client"
import { Checkbox } from "@/components/ui/checkbox"
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

const BillingInformationBackup = () => {
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

    if (isShippingSameAsBilling) {
      const updatedShipping = { ...updatedBilling, email: undefined };
      
      setLocalShipping(updatedShipping);
      debouncedDispatchShipping(updatedShipping);
    }
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

  return(
    <>
      <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
        <h3 className='col-span-12'>Billing Information</h3>
        <div className='col-span-6'>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' name="firstName" value={localBilling.firstName} onChange={handleBillingChange} />
        </div>
        <div className='col-span-6'>
          <Label htmlFor='email'>Email Address</Label>
          <Input type='email' name="email" id='email' value={localBilling.email} onChange={handleBillingChange} />
        </div>
        <div className='col-span-12'>
          <Label htmlFor='address'>Address</Label>
          <Input type='text' id='address' name="address" value={localBilling.address} onChange={handleBillingChange} />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='number'>Country </Label>
          <Select onValueChange={(value) => {
            const updatedBilling = { ...localBilling, country: value };
            SetSelectedCountry(value)
            setLocalBilling(updatedBilling); // Update local state
            debouncedDispatch(updatedBilling);
          }} value={selectedCountry}>
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
          <Label htmlFor='number'>Region/State {selectedState}</Label>
          <Select onValueChange={(value) => {
            const updatedBilling = { ...localBilling, state: value };
            setSelectedState(value)
            setLocalBilling(updatedBilling); // Update local state
            debouncedDispatch(updatedBilling);
          }} value={selectedState}>
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
          <Input type='text' id='city' name="city" value={localBilling.city} onChange={handleBillingChange} />
        </div>
        <div className='lg:col-span-3 col-span-6'>
          <Label htmlFor='zipCode'>Zip Code</Label>
          <Input type='text' id='postalCode' name="postalCode" value={localBilling.postalCode} onChange={handleBillingChange} />
        </div>
        <div className='col-span-12'>
          <Label htmlFor='number'>Phone Number</Label>
          <Input type='tel' id='phone' name="phone" value={localBilling.phone} onChange={handleBillingChange} />
        </div>
        {/* <div className='col-span-12 flex justify-start items-center gap-x-2.5 [&>label]:!mb-0 [&>label]:font-medium [&>label]:cursor-pointer [&>label]:text-[13px] [&>label]:tracking-normal [&>label]:!text-[#999999] [&>button]:w-5 [&>button]:h-[18px] [&>button]:pb-[4px] [&>button]:rounded-[2px] [&>button]:border-[#999999] [&>button]:border-[1.5px]'>
        
          <Checkbox
            id="ship"
            onCheckedChange={(checked: boolean) => {
              dispatch(setShippingSameAsBilling(!checked));
              setisSameShippng(checked);
            }}
          />

          <Label htmlFor="ship">Ship to a different address</Label>
        </div> */}
        {/* {isSameShippng && (
          <>
            <h3 className="col-span-12">Shipping Information</h3>
            <div className="col-span-6">
              <Label htmlFor="shippingName">Name</Label>
              <Input
                type="text"
                id="shippingName"
                name="firstName"
                value={localShipping.firstName}
                onChange={handleShippingChange}
              />
            </div>
            <div className="col-span-6">
              <Label htmlFor="shippingPhone">Phone</Label>
              <Input
                type="tel"
                id="shippingPhone"
                name="phone"
                value={localShipping.phone}
                onChange={handleShippingChange}
              />
            </div>
            <div className='col-span-12'>
              <Label htmlFor='address'>Address</Label>
              <Input type='text' id='address' name="address" value={localShipping.address} onChange={handleBillingChange} />
            </div>
            <div className='lg:col-span-3 col-span-6'>
              <Label htmlFor='number'>Country </Label>
              <Select onValueChange={(value) => {
                const updatedShipping = { ...localShipping, country: value };
                SetSelectedShippingCountry(value)
                setLocalShipping(updatedShipping);
                debouncedDispatch(updatedShipping);
              }} value={selectedShippingCountry}>
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
          </>
        )} */}
      </div>
    </>
  )
}

export default BillingInformationBackup