export default function TextSlider() {
  const items = [
    <span className="text-black pl-5 sm:pl-10 font-sans" key={1}>jackets</span>,
    <span className="text-transparent stroke-black pl-5 sm:pl-10 font-sans" key={2}>wear</span>,
    <span className="text-transparent stroke-black pl-5 sm:pl-10 font-sans" key={3}>everwhere</span>,
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-white md:pt-16">
      <div className="flex w-min animate-scroll textSlider-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex max-md:text-[45px] text-[80px] font-bold uppercase">
            {items.map((item, index) => (
              <span key={`${i}-${index}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}