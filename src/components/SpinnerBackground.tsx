export default function SpinnerOverlay() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#0a0a1a] flex items-center justify-center z-9999">
      <div
        className="
          w-12 h-12
          rounded-full
          border-4
          border-[#94a3b8]
          border-t-[#22D3EE]
          animate-spin
        "
      ></div>
    </div>
  );
}
