export default function Content() {
  return (
    <div className="grid h-screen">
      <div className="grid items-end justify-center font-extrabold text-3xl">
        <h1>New Arrivals</h1>
      </div>
      <div className="grid items-center justify-center gap-10 p-10">
        <div className="grid grid-flow-col gap-5">
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
        </div>
        <div className="grid grid-flow-col gap-5">
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
          <img src="/crewneck.webp" alt="crewneck" />
        </div>
      </div>
    </div>
  );
}
