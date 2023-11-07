import ChoseSkills from "./components/ChoseSkills";

export default function Home() {
  return (
    <main className="h-screen flex justify-center flex-col items-center bg-[#EFF6FF] ">
      <h1 className="text-[#172554] text-4xl my-3">Select your top 5 tech skills</h1>
      <section
        className="bg-white p-[4rem] w-2/4"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 44px 64px 0px rgba(37, 99, 235, 0.10)",
        }}
      >
        
        <ChoseSkills />
      </section>
    </main>
  );
}
