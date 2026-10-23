import React from 'react'

export const Catalog = ({ products, handleAddToCart }) => {
  return (
    // 1. Contenedor de CSS Grid (1 columna en móvil, hasta 4 en monitores grandes)
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
    {products.map((product) => (
        // 2. aspect-square hace que la tarjeta sea un cuadrado perfecto
        <div key={product.id} className='border border-violet-200 shadow-md rounded-xl flex flex-col items-center p-6 text-center aspect-square justify-between bg-white hover:shadow-lg transition-shadow'>
          
          {/* 3. Renderizamos la imagen */}
          <img src={product.img} alt={product.name} className="w-32 h-32 object-cover rounded-md mb-4" />
          
          <div className="flex flex-col flex-grow w-full">
              <h2 className="font-bold text-xl capitalize">{product.name}</h2>
              <p className="text-sm text-violet-500 flex-grow mt-1">{product.description}</p>
              <p className="font-semibold text-violet-800 my-3">Disponible: {product.quantity}</p>
          </div>

          {product.quantity === 0 ? (
            <button
              className='bg-violet-300 text-white px-4 py-2 rounded-lg cursor-not-allowed w-full font-bold'
              disabled
            >
              Agotado
            </button>
          ) : (
            <button 
                className='bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 w-full font-bold transition-colors shadow-sm'
                onClick={() => handleAddToCart(product.id)}
            >
              Agregar al carrito
            </button>
          )}
        </div>
    ))}
    </div>
  )
}