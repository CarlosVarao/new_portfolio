import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a1a] text-[#e2e8f0] text-center px-4">
      <h1 className="font-bold animate-bounce text-5xl sm:text-6xl md:text-7xl mb-4">
        404
      </h1>

      <p className="text-lg sm:text-xl mb-3 max-w-md">
        Parabéns! 🎉 Você encontrou a página… que não existe.
      </p>

      <p className="text-xs sm:text-sm italic text-[#e2e8f0] mb-5 max-w-xs sm:max-w-sm">
        Dica profissional: tente clicar em algo que realmente exista da próxima
        vez 👀
      </p>

      <Link
        to="/"
        className="px-5 py-3 bg-[#101828] hover:bg-[#101828]/60 rounded-lg font-medium transition-all text-sm sm:text-base"
      >
        Me tira daqui! 🚀
      </Link>
    </div>
  );
}
