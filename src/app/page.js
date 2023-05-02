"use client"
import { useRouter } from "next/navigation"

const products = [{
  id: 120555,
  desc: "CAFE CON LECHE 300cc. (BAR)",
  picture: "https://www.eltiempo.com/uploads/2023/01/31/63d92a122f24b.jpeg",
  precio: 390
}, {
  id: 54133,
  desc: "VASO GASEOSA (BAR)",
  picture: "https://img.freepik.com/fotos-premium/bebida-gaseosa-marron-vaso-hielo_159938-66.jpg?w=2000",
  precio: 230
}, {
  id: 54629,
  desc: "LICUADO DURAZNO 300cc. (BAR)",
  picture: "https://cdn.buenavibra.es/wp-content/uploads/2018/08/24091632/bigstock-204800911-e1561466726491.jpg",
  precio: 630
}, {
  id: 54630,
  desc: "LICUADO BANANA 300cc. (BAR)",
  picture: "https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_170853497-min-1.jpg",
  precio: 600
}, {
  id: 56418,
  desc: "SANDWICH BAGUETTE + 1 VASO COCA COLA 300cc.",
  picture: "https://st.depositphotos.com/3220235/4165/i/950/depositphotos_41658829-stock-photo-long-baguette-sandwich-with-lettuce.jpg",
  precio: 230
}, {
  id: 52722,
  desc: "CAFE NEGRO DOBLE 300cc.  (BAR)",
  picture: "https://s10.s3c.es/imag/_v0/770x420/2/3/d/600x400_Una-taza-con-cafe-negro-en-su-interior--iStock.jpg",
  precio: 390
}

]

export default function Example() {

  const router =useRouter()
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group" onClick={()=>{router.push(`/prod/${product.id}`)}}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.picture}
                  alt={product.picture}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.desc}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.precio}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
