import Plus from "@/public/design/Plus.svg";
import Image from "next/image";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface SelectSkillProps {
  setSelectedSkills: (skill: string) => void;
  allSkills: string[];
  selectedSkills: string[];
  setAllSkills: React.Dispatch<React.SetStateAction<string[]>>;
}
const SelectSkill = ({
  selectedSkills,
  setSelectedSkills,
  allSkills,
  setAllSkills,
}: SelectSkillProps) => {
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(selectedSkills);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAllSkills(items)
  };

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
    <div className="w-[50%]">
      
      <div className="flex flex-col">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={`skills ${Math.random()}`}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {selectedSkills.map((skill, index) => (
                  <Draggable
                    key={skill}
                    draggableId={skill}
                    index={index}
                    isDragDisabled={false}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex justify-between items-center bg-[#0D2167] text-white  w-full rounded my-2"
                      >
                        <p className="p-2 ml-4">{index+1}. {skill}</p>
                        <button
                          className="mr-4"
                          onClick={() => {
                            setSelectedSkills(skill);
                          }}
                        >
                          <Image src={Plus} alt="plus" />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {elements}
      </div>
    </div>
  );
};
export default SelectSkill;
