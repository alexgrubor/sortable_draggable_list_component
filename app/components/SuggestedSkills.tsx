interface SuggestedSkillsProps {
  allSkills: string[];
  setSelectedSkills: (skill:string) => void;
}

const SuggestedSkills = ({
  allSkills,
  setSelectedSkills,
}: SuggestedSkillsProps) => {
  return (
    <div>
      <h2 className="text-[#0D2167] text-lg my-2">Skills</h2>
      <ul className="text-[#5A6793] flex flex-col items-start gap-[0.375rem]">
        {allSkills.map((skill) => (
          <li key={skill} onClick={()=>setSelectedSkills(skill)}>+ {skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default SuggestedSkills;
