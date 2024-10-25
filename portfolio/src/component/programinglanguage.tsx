import Marquee from "./marquee";

function ProgramingLanguage() {
  return (
    <div className="ProgramingLanguage">
      <div className="text text-center mb-4">
        <h1 className="text-2xl font-bold">My Programming Language</h1>
      </div>
      <div className="marquee m-5">
        <Marquee />
      </div>
    </div>
  );
}

export default ProgramingLanguage;
