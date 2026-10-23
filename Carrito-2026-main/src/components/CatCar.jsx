import React, { useState } from "react";
import { Catalog } from "./Catalog";

// 1. Importa tus imágenes de la carpeta assets
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.webp';
import photo5 from '../assets/photo5.jpg';

export const CatCar = () => {
    // 2. Agrega la propiedad 'img' a cada producto
    const [products, setProducts] = useState([
         {name: "camara", id: 1, quantity:3, description:"camara de ultima gen", oncarrito:0, img: photo1},
         {name: "laptop", id: 2, quantity:1, description:"laptop de ultima gen",oncarrito:0, img: photo2},
         {name: "mouse", id: 3, quantity:2, description:"mouse de ultima gen",oncarrito:0, img: photo3},
         {name: "teclado", id: 4, quantity:0, description:"teclado de ultima gen",oncarrito:0, img: photo4},
         {name: "monitor", id: 5, quantity:1, description:"monitor de ultima gen",oncarrito:0, img: photo5}
    ]);

    const handleAddToCart = (productId) => {
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.id === productId && product.quantity > 0) {
                    return { ...product, quantity: product.quantity - 1, oncarrito: product.oncarrito + 1 };
                }
                return product;
            })
        );
    };

    // 3. Función para remover del carrito (devuelve la cantidad al stock)
    const handleRemoveFromCart = (productId) => {
        setProducts(prevProducts => 
            prevProducts.map(product => {
                if (product.id === productId && product.oncarrito > 0) {
                    return { ...product, quantity: product.quantity + 1, oncarrito: product.oncarrito - 1 };
                }
                return product;
            })
        );
    };

    const carrito = products.filter(product => product.oncarrito > 0);

    return (
        <div className="p-8">
            <Catalog products={products} handleAddToCart={handleAddToCart} />
            
            <h2 className="text-3xl font-bold mt-12 mb-6 border-b-2 border-violet-300 pb-2">Carrito</h2>
            <div className="flex flex-col gap-4">
                {carrito.length === 0 && <p className="text-violet-500">Tu carrito está vacío.</p>}
                
                {carrito.map((product) => (
                    <div key={product.id} className='border border-violet-200 p-4 shadow-sm rounded-lg flex items-center justify-between bg-white'>
                        <div className="flex items-center gap-4">
                            <img src={product.img} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                            <div>
                                <h3 className="font-bold text-lg capitalize">{product.name}</h3>
                                <p className="text-violet-700">En carrito: <span className="font-bold text-violet-600">{product.oncarrito}</span></p>
                            </div>
                        </div>
                        {/* 4. Botón para ejecutar la función de remover */}
                        <button 
                            onClick={() => handleRemoveFromCart(product.id)}
                            className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors font-semibold"
                        >
                            Remover 1
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}