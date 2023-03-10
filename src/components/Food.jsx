import { useState } from 'react'
import { data } from '../data/data.js'
import * as Dialog from '@radix-ui/react-dialog'

const Food = () => {
  const [foods, setFoods] = useState(data)
  const [selectedFood, setSelectedFood] = useState(null)

  const handleFoodClick = item => {
    setSelectedFood(item)
  }

  /* Filtrar tipos de comida */
  const filterType = category => {
    setFoods(
      data.filter(item => {
        return item.category === category
      })
    )
  }

  /* Filtrar por preço */
  const filterPrice = price => {
    setFoods(
      data.filter(item => {
        return item.price === price
      })
    )
  }
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-rose-600 font-bold text-4xl text-center">
        Todas as categorias
      </h1>

      {/* Fileira de filtro */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Tipo de filtro */}
        <div>
          <p className="font-bold text-gray-700">Tipo de Filtro</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              Todos
            </button>
            <button
              onClick={() => filterType('burger')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              Hamburgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('carne')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              Churrasco
            </button>
            <button
              onClick={() => filterType('japonesa')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              Japonesa
            </button>
          </div>
        </div>

        {/* Filtro de preço */}
        <div>
          <p className="font-bold text-gray-700">Filtro de preço</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice('$')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className="m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Mostrar comidas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map(item => (
          <div
            key={item.id}
            onClick={() => handleFoodClick(item)}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex flex-wrap justify-between items-center px-2 py-3">
              <p className="font-bold w-full flex justify-center">{item.name}</p>
              <p>
                <span className="w-1/2 text-black-600 items-center font-semibold text-base">
                {`R$ ${item.price.toFixed(2)}`}
                </span>
              </p>
              <Dialog.Root>
                <Dialog.Trigger className="w-1/2 rela flex justify-end mt-1 rounded-lg p-1 gap-2 items-center justify-center text-wh font-semibold text-white bottom-0 bg-zinc-900 hover:bg-zinc-700 ">
                  Detalhes
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                  <Dialog.Content className="fixed flex items-center justify-center p-10 bg-white rounded-2xl w-full max-w-2xl top-[2%] left-[23%] overflow-hidden shadow-lg">
                    <div className='max-w-2xl'>
                      <img
                        src={item.image}
                        alt="/"
                        className="w-full h-[28rem]  object-cover rounded-xl"
                      />
                      <div className="px-6 py-4">
                        <h2 className="font-bold text-xl mb-2">{item.name}</h2>
                        <p className="text-gray-700 text-base">{item.details}</p>
                      </div>
                      
                      <div className="px-6 pt-4 pb-2">
                      <span className="text-gray-600 text-base">{`R$ ${item.price.toFixed(2)}`}</span>
                      </div>
                      
                      
                      
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
