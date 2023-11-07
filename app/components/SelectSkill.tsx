import Plus from "@/public/design/Plus.svg";
import Image from "next/image";

interface SelectSkillProps {
  setSelectedSkills: (skill: string) => void;
  allSkills: string[];
  selectedSkills: string[];
  setAllSkills: React.Dispatch<React.SetStateAction<string[]>> 
  onDragStart: () => void;
  onDragOver: () => void;
  onDrop: () => void;
}
const SelectSkill = ({
  selectedSkills,
  setSelectedSkills,
  allSkills,
  onDragStart,
  onDragOver,
  onDrop,
  setAllSkills,
}: SelectSkillProps) => {
   
    
  const handleDragStart =
    (i: number) => (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData("text/plain", i.toString());
      onDragStart();
    
    };

  const handleDrop =
    (i: number) => (event: React.DragEvent<HTMLDivElement>) => {
        console.log('lolo');
        onDrop()
     
    };
    const handleOver = (i:number)=>(event: React.DragEvent<HTMLDivElement>)=>{
        onDragOver();
    }

  const fiveElements = () => {
    const inputsNeeded = 5 - selectedSkills.length;
    const inputs = [];
    for (let i = 0; i < inputsNeeded; i++) {
      inputs.push(
        <select
          key={`select-${i}`}
          className="bg-[#F7F7FA] h-8 w-full rounded my-2"
          onChange={(e) => {
            setSelectedSkills(e.target.value);
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Add a skill
          </option>
          {allSkills.map(
            (skill) =>
              !selectedSkills.includes(skill) && (
                <option
                  key={skill}
                  value={skill}
                  className="bg-[#e3e5f1] text-[#5a6793]"
                  style={{
                    borderRight: "1px solid #e3e5f1",
                    borderLeft: "1px solid #e3e5f1",
                  }}
                >
                  {skill}
                </option>
              )
          )}
        </select>
      );
    }
    return inputs;
  };

  const elements = fiveElements();

  return (
    <div className="w-4/5">
      {selectedSkills.map((skill, i) => (
        <div
          key={skill}
          className="flex p-1 bg-[#0D2167] justify-between items-center mb-2"
          draggable
          onDragStart={handleDragStart(i)}
          onDragOver={handleOver(i)}
          onDrop={handleDrop(i)}
        >
          <span className="text-white">
            {i + 1}. {skill}
          </span>
          <button
            onClick={() => setSelectedSkills(skill)}
            className=" text-white font-bold py-1 px-2 rounded"
          >
            <Image src={Plus} alt="+" />
          </button>
        </div>
      ))}
      {elements}
    </div>
  );
};
export default SelectSkill;
