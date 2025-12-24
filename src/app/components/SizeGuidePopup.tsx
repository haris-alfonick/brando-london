"use client";

import Image from "next/image";
import {
 Tabs,
 TabsContent,
 TabsList,
 TabsTrigger,
} from "@/app/components/sizeGuidetabs";
import {
 Tabs as InnerTabs,
 TabsContent as InnerTabsContent,
 TabsList as InnerTabsList,
 TabsTrigger as InnerTabsTrigger,
} from "@/app/components/sizeGuidetabstwo";

export default function SizeGuide() {
 return (
  <section className="max-w-[1020px] mx-auto py-10 px-[15px]">
   <div className="grid grid-cols-12 gap-4 bg-[#fff] text-[#333333] w-full">
    <div className="md:col-span-4 col-span-12 order-3 md:order-1 bg-[#F1F1F1] p-[17px] md:relative">
     <div className="[&>span]:text-gray-500 [&>span]:block w-[91%] [&>span]:tracking-wide [&>span]:uppercase [&>span]:text-[13px] [&_strong]:font-semibold [&_strong]:mt-2 [&>img]:lg:block [&>img]:hidden [&>img]:pb-[65px] md:[&>img]:pb-[35px] m-auto top-0 bottom-0 md:absolute h-fit">
      <Image
       src="/images/logo.png"
       alt="Logo"
       width={180}
       height={180}
      />
      <span>Men&apos;s Jacket</span>
      <strong className="text-xl max-md:text-2xl lg:text-3xl">Edward Cafe Racer Black Leather Jacket</strong>
      <div className="w-[93%] h-[2px] bg-gray-400 mt-[30px]"></div>
      <strong className="!text-[21px] max-lg:leading-[1] max-md:leading-[unset] !font-[400] block lg:pt-[15px] pt-[20px]">
       Garment Measurements:
      </strong>
      <span>Taken from size M</span>
     </div>
    </div>

    <div className="md:col-span-4 col-span-6 order-1 md:order-2 [&>img]:w-[100%]">
     <Image
      src="/images/brando1.webp"
      alt="Jacket"
      width={360}
      height={180}
     />
    </div>

    <div className="md:col-span-4 col-span-6 order-2 md:order-3 [&>img]:w-[100%]">
     <Image
      src="/images/brando2.webp"
      alt="Jacket"
      width={360}
      height={180}
     />
    </div>
   </div>

   <div className="flex container mx-auto flex-col gap-6">
    <Tabs defaultValue="SizeFit">
     <TabsList>
      <TabsTrigger value="SizeFit">Size & Fit</TabsTrigger>
      <TabsTrigger value="howToMeasure">How To Measure</TabsTrigger>
     </TabsList>

     <TabsContent value="SizeFit">
      <div className="[&>span]:text-gray-500 sm:pt-[25px] pt-[8px] [&>span]:pt-[12px] [&>span]:block [&>span]:tracking-wide [&>strong]:uppercase [&>span]:text-[13px] [&_strong]:font-400 [&_strong]:text-[17px] sm:[&_strong]:text-[21px] [&_strong]:font-semibold">
       <strong>Jackets</strong>
       <span>
        Sizes are designed to fit the following body measurements
       </span>
      </div>

      <InnerTabs defaultValue="inches" className="sm:text-end text-center mt-6 md:mt-[-55px]">
       <InnerTabsList>
        <InnerTabsTrigger value="inches">Inches</InnerTabsTrigger>
        <InnerTabsTrigger value="centimeter">CM</InnerTabsTrigger>
       </InnerTabsList>

       <InnerTabsContent value="inches">
        <div className="overflow-x-auto sm:mt-10 mt-7">
         <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden [&_th]:text-[15px] sm:[&_th]:text-[20px] [&_th]:font-[500] [&_th]:text-center [&_th]:px-2 sm:[&_th]:px-6 [&_th]:py-3">
          <thead>
           <tr className="bg-black text-white">
            <th>HCO</th>
            <th>Chest (in)</th>
            <th>Arm Length (in)</th>
           </tr>
          </thead>
          <tbody className="text-[16px] [&_td]:px-2 sm:[&_td]:px-6 [&_td]:text-center [&_td]:py-2 sm:[&_td]:py-4 [&>tr:nth-child(even)]:bg-[#EEEEEE] [&>tr>td:first-child]:text-[#222] [&>tr>td:first-child]:font-[600] [&>tr>td:not(:first-child)]:text-[#666]">
           <tr>
            <td>XXS</td>
            <td>28.5 - 31.5</td>
            <td>31</td>
           </tr>
           <tr>
            <td>XS</td>
            <td>31.5 - 34.5</td>
            <td>32</td>
           </tr>
           <tr>
            <td>S</td>
            <td>34.5 - 37.5</td>
            <td>33</td>
           </tr>
           <tr>
            <td>M</td>
            <td>37.5 - 40.5</td>
            <td>34</td>
           </tr>
           <tr>
            <td>L</td>
            <td>40.5 - 43.5</td>
            <td>35</td>
           </tr>
           <tr>
            <td>XL</td>
            <td>43.5 - 46.5</td>
            <td>36</td>
           </tr>
           <tr>
            <td>XXL</td>
            <td>46.5 - 49.5</td>
            <td>37</td>
           </tr>
           <tr>
            <td>XXXL</td>
            <td>49.5 - 52.5</td>
            <td>38</td>
           </tr>
          </tbody>
         </table>
        </div>
       </InnerTabsContent>

       <InnerTabsContent value="centimeter">
        <div className="overflow-x-auto sm:mt-10 mt-7">
         <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden [&_th]:text-[15px] sm:[&_th]:text-[20px] [&_th]:font-[500] [&_th]:text-center [&_th]:px-2 sm:[&_th]:px-6 [&_th]:py-3">
          <thead>
           <tr className="bg-black text-white">
            <th>HCO</th>
            <th>Chest (cm)</th>
            <th>Arm Length (cm)</th>
           </tr>
          </thead>
          <tbody className="text-[16px] [&_td]:px-2 sm:[&_td]:px-6 [&_td]:text-center [&_td]:py-2 sm:[&_td]:py-4 [&>tr:nth-child(even)]:bg-[#EEEEEE] [&>tr>td:first-child]:text-[#222] [&>tr>td:first-child]:font-[600] [&>tr>td:not(:first-child)]:text-[#666]">
           <tr>
            <td>XXS</td>
            <td>72.4 - 80</td>
            <td>78.7</td>
           </tr>
           <tr>
            <td>XS</td>
            <td>80 - 87.6</td>
            <td>81.3</td>
           </tr>
           <tr>
            <td>S</td>
            <td>87.6 - 95.3</td>
            <td>83.8</td>
           </tr>
           <tr>
            <td>M</td>
            <td>95.3 - 102.9</td>
            <td>86.4</td>
           </tr>
           <tr>
            <td>L</td>
            <td>102.9 - 110.5</td>
            <td>88.9</td>
           </tr>
           <tr>
            <td>XL</td>
            <td>110.5 - 118.1</td>
            <td>91.4</td>
           </tr>
           <tr>
            <td>XXL</td>
            <td>118.1 - 125.7</td>
            <td>94</td>
           </tr>
           <tr>
            <td>XXXL</td>
            <td>125.7 - 133.3</td>
            <td>96.5</td>
           </tr>
          </tbody>
         </table>
        </div>
       </InnerTabsContent>
      </InnerTabs>
     </TabsContent>

     <TabsContent value="howToMeasure">


      <div className="sm:pt-[25px] pt-[8px]">
      </div>

      
     </TabsContent>
    </Tabs>
   </div>
  </section>
 );
}
