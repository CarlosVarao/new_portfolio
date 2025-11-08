import CardSections from "../components/CardSections";
import skills from "../data/skills.json";

export default function SectionSkills() {
  return (
    <>
      <CardSections numberSection="03." inforSection="Habilidades">
        <div className="font-secondary flex flex-wrap justify-center gap-6">
          {skills.map((skills, index) => (
            <div
              key={index}
              className="text-center h-min-[300px] flex flex-col gap-5 rounded-lg p-6 transition-all duration-300 ease-in-out glass-effect hover:-translate-y-[3px] flex-1 min-w-[250px]"
            >
              <p className="text-xl font-bold text-white ">{skills.title}</p>

              <div className="flex flex-wrap gap-2 justify-center">
                {skills.tecnologia.map((item, i) => (
                  <p
                    key={item}
                    className="font-primary text-sm text-[#94a3b8] hover:text-[#22D3EE] cursor-pointer"
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
