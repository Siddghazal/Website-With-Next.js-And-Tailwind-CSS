import React from 'react' 

const Hero = () => {
  return (
    <div className="relative bg-cover bg-right bg-no-repeat bg-[url(/hero.png)] sm:min ph-[40vh] sm:h-[60vh] sm:max-h-[70vh] "> 
           
    <div className="container max-auto py-8 sm:py-0 sm:flex justify-between items-center h-full">
      <div className='flex items-center h-full'>
      <div>
          <p className='uppercase text-primary font-bold'>Shop Our Freshest</p>
          <h2 className='text-green-700 font-bold text-[24px] sm:text-[30px] md:text-[40px] lg:text-[48px] pb-8 leading-tight'>
            Fresh Hand-Picked Vegetables
          
          <br/>
          <span className='text-primary'>Everyday</span>
          </h2>

          <a className="border-b border-black hover:text-primary transition duration-200" href="#">Discover More</a>
        </div>

      </div>

      <div className='flex items-center h-full text-right'>
        <img src="/veg_basket.png" alt="veg_basket" />

        

      </div>
    </div>
    </div>





  )
}

export default Hero