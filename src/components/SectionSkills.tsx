import CardSections from "../components/CardSections";
import skills from "../data/skills.json";

export default function SectionSkills() {
  return (
    <>
      <CardSections numberSection="03." inforSection="Habilidades">
        <div className="font-secondary grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => (
            <div className="text-center rounded-lg p-6 transition-all duration-400 ease-in-out glass-effect hover:-translate-y-[3px]">
              <p className="text-xl font-bold text-white mb-3">{item.title}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {item.tecnologia.map((item) => (
                  <p
                    key={item}
                    className="font-primary text-sm text-[#94a3b8] hover:text-[#22D3EE] cursor-pointer "
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardSections>
    </>
  );
}
