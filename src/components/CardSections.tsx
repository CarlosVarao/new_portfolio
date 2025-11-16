import type { HTMLAttributes } from "react";

interface Datas extends HTMLAttributes<HTMLDivElement> {
  numberSection?: string;
  inforSection?: string;
  children?: React.ReactNode;
}

export default function CardSections({
  numberSection,
  inforSection,
  children,
  ...rest
}: Datas) {
  return (
    <div
      className="section-glass px-[26px] py-13 md:p-10"
      {...rest}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <div className="font-secondary text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-6 flex items-center gap-3">
            <p className="text-xl text-[#22D3EE] ">{numberSection}</p>
            <p className="text-3xl ">{inforSection}</p>
            <p className="grow h-px bg-white/10 ml-2"></p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
