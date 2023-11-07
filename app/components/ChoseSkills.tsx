"use client";
import { suggestedTechSkills } from "@/utils/suggestedTechSkills";
import SuggestedSkills from "./SuggestedSkills";
import SelectSkill from "./SelectSkill";
import { useState } from "react";

const ChoseSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill) && selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skill]);

      setSuggestedSkills(
        suggestedSkillsWithoutSelected.filter((s) => s !== skill)
      );
    } else {
      const newSelectedSkills = selectedSkills.filter((s) => s !== skill);
      setSelectedSkills(newSelectedSkills);

      if (!suggestedSkillsWithoutSelected.includes(skill)) {
        setSuggestedSkills([...suggestedSkillsWithoutSelected, skill]);
      }
    }
  };
  const onDragStart = () => {
    console.log("drag start");
  };
  const onDragOver = () => {
    console.log("drag over");
    
  };
  const onDrop = () => {
    console.log("end");
  };

  const [suggestedSkillsWithoutSelected, setSuggestedSkills] =
    useState(suggestedTechSkills);
  return (
    <div className="flex justify-between">
      <SelectSkill
        selectedSkills={selectedSkills}
        setSelectedSkills={addSkill}
        setAllSkills={setSelectedSkills}
        allSkills={suggestedSkillsWithoutSelected}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
      <SuggestedSkills
        allSkills={suggestedSkillsWithoutSelected}
        setSelectedSkills={addSkill}
      />
    </div>
  );
};
export default ChoseSkills;
