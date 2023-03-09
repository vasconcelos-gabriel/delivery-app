const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className=" max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">O <span className="text-rose-600">Melhor</span> em</h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Food <span className="text-rose-600">Delivery</span></h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg" alt="Hamburguer com batatas fritas" />
      </div>
    </div>
  )
}

export default Hero
