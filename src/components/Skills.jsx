import { aboutItems } from "../constant/data";
const Skills = () => {
  return (
    <div>
      <div>
        <h3 className="pt-2 pb-2">Skills</h3>
        <p>
          Here are the frameworks,libaries,services and runtimes i have
          experience with.This is not a complete list i'm constantly going new
          skills.{" "}
        </p>
      </div>
      <div className="flex gap-3.5 flex-wrap mt-8">
        {aboutItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center gap-2">
              <span className="size-6 flex items-center justify-center">
                <img src={item.icon} alt={item.label} width={24} height={24} />
              </span>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
