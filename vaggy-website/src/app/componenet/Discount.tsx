import React from 'react'
import Product from './Product'
 const productData = [
    {
        img: "/product-1.jpg",
        name:"Organic Bartlett Pear",
        price:"$35.99",

    },{
        img: "/product-7.jpg",
        name:"Organic Broccoli,1 lb",
        price:"$79.50",

    },{
        img: "/product-8.jpg",
        name:"Organic Fruit Baskit",
        price:"$35.99",

    },{
        img: "/product-9.jpg",
        name:"Dried pineapple Fruit Bar",
        price:"$729.50",

    },
]

const Discount = () => {
  return (
    <div className='py-20'>
        <div className='container'>
            <h2 className='text-xl md:text-4xl pb-4 sm:pb-0'>Discount Product</h2>

            {/*grid*/}
            <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                <div className='relative w-fit mx-auto'>
                    <img className='h-full object-cover' src="discount-bg.jpg" alt="discount_bg" />
                    <div className='absolute w-full h-full top-0 grid place-items-center text-white'>
                        <div className='text-xl flex flex-col gap-4'>
                            <h2 className='text-[40px] font-bold'>$20</h2>
                            <div>
                                <p>Under Products</p>
                                <p>Limited Time Only</p>
                            </div>
                        </div>
                    </div>
                </div> 
                {
                    productData.map((product) => (
                    <Product
                    key={product.name}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    />
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Discount