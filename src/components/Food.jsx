import { useState } from 'react'
import { data } from '../data/data.js'
import FoodDetail from './FoodDetail.jsx'

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
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-rose-600 text-white p-1 rounded-md">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
        {selectedFood && <FoodDetail item={selectedFood} />}
        
      </div>
    </div>
  )
}

export default Food
