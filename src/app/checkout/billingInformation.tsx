"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setBillingInfo, setShippingInfo } from "@/lib/features/checkout/orderSlice"
import debounce from "lodash.debounce";
import { useEffect, useState } from "react"
import { Country, State } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

interface AddressInfo {
  first_name: string;
  last_name: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface BillingInfo extends AddressInfo {
  email: string;
}

const BillingInformation = () => {
  const dispatch = useAppDispatch();
  const billing = useAppSelector((state) => state.order.billing);
  const isShippingSameAsBilling = useAppSelector(
    (state) => state.order.isShippingSameAsBilling
  );
  
  const [localBilling, setLocalBilling] = useState<BillingInfo>(billing);
  const [selectedCountry, setSelectedCountry] = useState<string>(billing.country || "");
  const [selectedState, setSelectedState] = useState<string>(billing.state || "");

  // Debounced dispatch function
  const debouncedDispatch = debounce((updatedBilling: BillingInfo) => {
    dispatch(setBillingInfo(updatedBilling));
  }, 300);

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedBilling = { ...localBilling, [name]: value };
    setLocalBilling(updatedBilling);
    debouncedDispatch(updatedBilling);

    if (isShippingSameAsBilling) {
      const shippingInfo: Omit<BillingInfo, 'email'> = {
        first_name: updatedBilling.first_name,
        last_name: updatedBilling.last_name,
        phone: updatedBilling.phone,
        address_1: updatedBilling.address_1,
        city: updatedBilling.city,
        state: updatedBilling.state,
        country: updatedBilling.country,
        postalCode: updatedBilling.postalCode
      };
      dispatch(setShippingInfo(shippingInfo));
    }
  };

  useEffect(() => {
    if (isShippingSameAsBilling) {
      const shippingInfo: Omit<BillingInfo, 'email'> = {
        first_name: localBilling.first_name,
        last_name: localBilling.last_name,
        phone: localBilling.phone,
        address_1: localBilling.address_1,
        city: localBilling.city,
        state: localBilling.state,
        country: localBilling.country,
        postalCode: localBilling.postalCode
      };
      dispatch(setShippingInfo(shippingInfo));
    }
  }, [isShippingSameAsBilling, localBilling, dispatch]);

  const countries = Country.getAllCountries();

  useEffect(() => {
    if (billing.country) {
      setSelectedCountry(billing.country);
    }
    if (billing.state) {
      setSelectedState(billing.state);
    }
  }, [billing.country, billing.state]);

  return (
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
            setSelectedCountry(value);
            setLocalBilling(updatedBilling);
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
            setSelectedState(value);
            setLocalBilling(updatedBilling);
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
    </>
  );
};

export default BillingInformation;