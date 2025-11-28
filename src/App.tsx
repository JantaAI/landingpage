import imgJantaBlackT from "figma:asset/ef2907cd3a5f4b9c92fd7838905f10fd4103cec9.png";

export default function App() {
  return (
    <div className="bg-[#fffdf8] min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Centered container */}
      <div className="relative w-full max-w-[1200px] h-[812px] flex items-center justify-center px-4">
        
        {/* White Card */}
        <div className="bg-white rounded-[19px] shadow-[0px_0px_18.6px_-1px_rgba(0,0,0,0.25)]
                        w-full max-w-[500px] p-6 relative
                        md:w-[737px] md:h-[514px] md:max-w-none md:p-0">
          
          {/* Logo - Top-right of card */}
          <div className="absolute size-[60px] top-6 right-6
                          md:size-[75px] md:top-0 md:right-[-37px]"
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
                          md:absolute md:left-[58px] md:top-[50%] md:translate-y-[-50%] md:w-[622px] md:text-[20px] md:pt-0 md:pr-0"
               style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">Hello World,</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">this company is about longterm, very longterm success...</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">We try to fix things that are wrong in the world with technology that is new.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Currently we solve the root causes of why everybody hates his health insurance.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">&nbsp;</p>
            <p>inquiries for hardcore week team [at] janta.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
}