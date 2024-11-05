export default function Content() {
  return (
    <div className="p-10 lg:p-20">
      {/* Section title */}
      <div className="flex justify-center items-end font-extrabold text-2xl lg:text-3xl mb-10">
        <h1>New Arrivals</h1>
      </div>
      
      {/* Products grid */}
      <div className="grid gap-8 lg:gap-10 mx-5 lg:mx-20">
        
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
          <div className="text-center">
            <img src="/crewneck.webp" alt="crewneck" className="w-full h-auto object-cover rounded-md" />
            <p className="mt-2 font-medium">Crewneck</p>
            <p className="text-gray-500">Rp 200.000</p>
          </div>
        </div>

      </div>
    </div>
  );
}
