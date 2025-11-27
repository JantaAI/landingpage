import imgJantaBlackT from "figma:asset/ef2907cd3a5f4b9c92fd7838905f10fd4103cec9.png";

export default function App() {
  return (
    <div className="bg-[#fffdf8] min-h-screen w-full flex items-center justify-center p-4 md:p-0">
      {/* Desktop: Fixed positioning | Mobile: Responsive */}
      <div className="relative w-full h-full min-h-[600px] md:min-h-[812px]">
        
        {/* White Card */}
        <div className="bg-white rounded-[19px] shadow-[0px_0px_18.6px_-1px_rgba(0,0,0,0.25)]
                        w-full max-w-[500px] mx-auto p-6 relative
                        md:absolute md:left-[271px] md:top-[149px] md:w-[737px] md:h-[514px] md:max-w-none md:p-0">
          
          {/* Logo - Mobile: Top-right of card | Desktop: Overlapping card edge */}
          <div className="absolute size-[60px] top-6 right-6
                          md:size-[75px] md:left-[631px] md:top-0 md:right-auto"
               data-name="JANTA BLACK T">
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-90 pointer-events-none size-full" 
              src={imgJantaBlackT} 
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col font-['Inconsolata',sans-serif] font-normal justify-center leading-[0.9] text-[#2f2f2f] tracking-[-0.6px]
                          text-[16px] pt-20 pr-2
                          md:absolute md:left-[58px] md:top-[259px] md:translate-y-[-50%] md:w-[622px] md:text-[20px] md:pt-0 md:pr-0"
               style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Hello World,</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span className="font-['Inconsolata',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                In the past year,
              </span>
              <span>{` we rebuilt health insurance by designing new actuarial models and creating AI that predicts claim risk and monthly premiums.`}</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span className="font-['Inconsolata',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                In the next year,
              </span>
              <span>{` we'll launch the first consumer health-platform that gives people transparent pricing, no deductibles, no co-pays and full-body coverage.`}</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span>
                Our task is to break the constraints bad systems place on humans.
                <br aria-hidden="true" />
                {`To make health feel like `}
              </span>
              <span className="font-['Inconsolata',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                magic again.
              </span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              <span>{`This is `}</span>
              <span className="font-['Inconsolata',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
                the mission
              </span>
              <span>{` of our lives.`}</span>
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p>hiring inquiries: team [at] janta.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}