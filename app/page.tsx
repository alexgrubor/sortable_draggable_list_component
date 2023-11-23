import ChoseSkills from "./components/ChoseSkills";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-[#EFF6FF] px-4">
  <h1 className="text-[#172554] text-2xl md:text-3xl lg:text-4xl my-3 text-center">Select your top 5 tech skills</h1>
  <section
    className="bg-white p-8 w-full md:w-3/4 lg:w-1/2 mx-auto"
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
