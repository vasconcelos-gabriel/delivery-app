
const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">A melhor experiencia delivery</p>
        <p className="px-2">Ou retirada</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Novos Restaurantes</p>
        <p className="px-2">Adicionados diariamente</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1651166/pexels-photo-1651166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Refeições para qualquer hora do dia</p>
        <p className="px-2">E deliciosas sobremesas</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Peça agora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default HeadlineCards