interface Datas {
  numberSection?: string;
  inforSection?: string;
  children?: React.ReactNode;
}

export default function CardSections({
  numberSection,
  inforSection,
  children,
}: Datas) {
  return (
    <div className="section-glass">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <div className="font-secondary text-2xl md:text-3xl font-bold text-[#e2e8f0] mb-6 flex items-center gap-3">
            <p className="text-xl text-[#22D3EE] ">{numberSection}</p>
            <p className="text-3xl">{inforSection}</p>
            <p className="grow h-px bg-white/10 ml-2"></p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
