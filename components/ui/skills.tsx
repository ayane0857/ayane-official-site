import * as SiIcons from "react-icons/si";

interface SkillsProps {
  icon: keyof typeof SiIcons;
  text: string;
}

export function Skills({ icon, text }: SkillsProps) {
  const IconComponent = SiIcons[icon];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="w-full flex items-center justify-center">
        <IconComponent size={55} className="text-gray-700" />
      </div>
      <span className="text-[#000000] text-base font-normal">{text}</span>
    </div>
  );
}
