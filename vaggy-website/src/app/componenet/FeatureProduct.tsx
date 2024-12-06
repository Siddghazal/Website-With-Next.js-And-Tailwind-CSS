import Product from "./Product";

const productDeta = [
    {
        img: "/product-1.jpg",
        name:"Organic Bartlett Pear",
        price:"$35.99",

    },
    {
        img: "/product-2.jpg",
        name:"Organic Strawberries,1 lb",
        price:"$79.99",

    },
    {
        img: "/product-3.jpg",
        name:"Blueberry Organic,6 Ounce ",
        price:"$929.00",

    },
    {
        img: "/product-4.jpg",
        name:" Kiwi Organic 1 Each",
        price:"$779.99",

    },{
        img: "/product-5.jpg",
        name:"Organic Banana",
        price:"$399.20",

    },{
        img: "/product-6.jpg",
        name:"McCormick Gourmet Orange",
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

    },{
        img: "/product-10.jpg",
        name:"Holiday Nuts Gift Basket",
        price:"$399.99",

    },
]


const FeatureProduct = () => {
  return (
    <div className="pt-20">
        <div className="container">
            <div className="sm:flex justify-between items-center">
                <div className="text-xl md:text-4xl pb-4 sm:pb-0">Feature Product</div>
                <div className="flex gap-8 items-center text-[14px] md:text-lg hover:">
                    <button className="border-b border-[#000] hover:text-primary transition duration-200 ">Best Seller</button>
                    <button className="hover:text-primary transition duration-200">Most Popular</button>
                </div>
            </div>
            {/*grid*/}
            <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {
                    productDeta.map((product) => (
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

export default FeatureProduct