import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/lib/constants";

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 justify-center max-w-lg xl:max-w-none">
        {skills.map((skill, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-1/6 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300 cursor-pointer">
                    {skill.icon}
                  </div>
                </TooltipTrigger>{" "}
                <TooltipContent className="">
                  <div className="text-lg">{skill.name}</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
