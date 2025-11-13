import { TbBrandGithub } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="text-center text-[#94a3b8] py-6">
      <div className="flex justify-center gap-4 mb-4 ">
        <a
          className=" hover:text-[#22D3EE] transition-colors"
          data-alt="GitHub profile"
          href="https://github.com/CarlosVarao" target="_blank"
        >
          <TbBrandGithub fontSize={26} />
        </a>

        <a
          className="hover:text-[#22D3EE] transition-colors"
          data-alt="LinkedIn profile"
          href="https://www.linkedin.com/in/carlosvaraofrontend" target="_blank"
        >
          <LuLinkedin fontSize={26} />
        </a>
      </div>
      <p className="font-secondary text-xs text-text-dark">
        Design e construção por Carlos Varão. © 2025
      </p>
    </div>
  );
}
