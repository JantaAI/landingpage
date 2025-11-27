import imgJantaBlackT from "figma:asset/ef2907cd3a5f4b9c92fd7838905f10fd4103cec9.png";

export default function Desktop() {
  return (
    <div className="bg-[#fffdf8] content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <div className="absolute bg-white h-[514px] left-[271px] rounded-[19px] shadow-[0px_0px_18.6px_-1px_rgba(0,0,0,0.25)] top-[149px] w-[737px]" />
      <div className="absolute left-[902px] size-[75px] top-[149px]" data-name="JANTA BLACK T">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-90 pointer-events-none size-full" src={imgJantaBlackT} />
      </div>
      <div className="absolute flex flex-col font-['Inconsolata:Regular',sans-serif] font-normal justify-center leading-[0.9] left-[329px] text-[#2f2f2f] text-[20px] top-[408px] tracking-[-0.6px] translate-y-[-50%] w-[622px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hello World,</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Inconsolata:Bold',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
            In the past year,
          </span>
          <span>{` we rebuilt health insurance by designing new actuarial models and creating AI that predicts claim risk and monthly premiums.`}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['Inconsolata:Bold',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
            In the next year,
          </span>
          <span>{` we’ll launch the first consumer health-platform that gives people transparent pricing, no deductibles, no co-pays and full-body coverage.`}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span>
            Our task is to break the constraints bad systems place on humans.
            <br aria-hidden="true" />
            {`To make health feel like `}
          </span>
          <span className="font-['Inconsolata:Bold',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
            magic again.
          </span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          <span>{`This is `}</span>
          <span className="font-['Inconsolata:Bold',sans-serif] font-bold text-[#2f2f2f]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
  );
}