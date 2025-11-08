interface SpinnerProps {
  width?: number;
  height?: number;
}

export default function SpinnerBtn({ width, height }: SpinnerProps) {
  return (
    <div
      className="border-2 border-white/30 border-t-white rounded-full animate-spin"
      style={{ width, height }}
    />
  );
}
