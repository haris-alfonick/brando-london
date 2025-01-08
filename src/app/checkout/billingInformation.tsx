"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Region } from "../components/FormField/Region/page"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setBillingInfo } from "@/lib/features/checkout/orderSlice"
import debounce from "lodash.debounce";
import { useEffect, useState } from "react"
import { Country, State, City } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BillingInformation = () => {
  const dispatch = useAppDispatch();
  const [selectedCountry, SetSelectedCountry] = useState<any>()
  const [selectedState, setSelectedState] = useState<string>();
  const billing = useAppSelector((state) => state.order.billing);
  const [localBilling, setLocalBilling] = useState(billing);

  // Debounced dispatch function
  const debouncedDispatch = debounce((updatedBilling: any) => {
    dispatch(setBillingInfo(updatedBilling));
  }, 300);

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedBilling = { ...localBilling, [name]: value };
    setLocalBilling(updatedBilling); // Update local state for immediate feedback
    debouncedDispatch(updatedBilling); // Dispatch after debounce delay
  };
 const countries = Country.getAllCountries()
 
 
 useEffect(() => {
  if (billing.country) {
    SetSelectedCountry(billing.country);
    
  }
}, [billing.country]);

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
        <div className='col-span-12 flex justify-start items-center gap-x-2.5 [&>label]:!mb-0 [&>label]:font-medium [&>label]:cursor-pointer [&>label]:text-[13px] [&>label]:tracking-normal [&>label]:!text-[#999999] [&>button]:w-5 [&>button]:h-[18px] [&>button]:pb-[4px] [&>button]:rounded-[2px] [&>button]:border-[#999999] [&>button]:border-[1.5px]'>
          <Checkbox id='ship' />
          <label htmlFor='ship'>Ship into different address</label>
        </div>
      </div>
    </>
  )
}

export default BillingInformation