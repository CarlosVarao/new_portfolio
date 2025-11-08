import CardSections from "../components/CardSections";
import skills from "../data/skills.json";

export default function SectionSkills() {
  return (
    <>
      <CardSections numberSection="03." inforSection="Habilidades">
        <div className="font-secondary grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skills, index) => (
            <div
              className="text-center rounded-lg p-6 transition-all duration-270 ease-in-out glass-effect hover:-translate-y-[3px]"
              key={index}
            >
              <p className="text-xl font-bold text-white mb-3">
                {skills.title}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.tecnologia.map((item, i) => (
                  <p
                    key={item}
                    className="font-primary text-sm text-[#94a3b8] hover:text-[#22D3EE] cursor-pointer "
                  >
                    {item}
                    <span className="text-[#22D3EE] hover:text-[#94a3b8]">
                      {i < skills.tecnologia.length - 1 && " • "}
                    </span>
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
