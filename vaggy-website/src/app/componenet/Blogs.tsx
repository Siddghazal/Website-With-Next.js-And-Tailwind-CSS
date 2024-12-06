import BlogCard from "./BlogCard";

const blogData =[
    {
        img:"/post-1.jpg",
        desc: "Sample Description 1 some more text just to make UI a little attractive thats all",
    },
    {
        img:"/post-2.jpg",
        desc: "Sample Description 2 some more text just to make UI a little attractive thats all",
    },
    {
        img:"/post-3.jpg",
        desc: "Sample Description 3 some more text just to make UI a little attractive thats all",
    },
    {
        img:"/post-4.jpg",
        desc: "Sample Description 4 some more text just to make UI a little attractive thats all",
    },
]

const Blogs = () => {
  return (
    <div className="bg-[#f7f5ee]">
    <div className='py-20'>
        <div className='container '>
            <h2 className='text-xl md:text-4xl pb-4 sm:pb-0'>Our Blogs</h2>

         {/*grid*/}
         <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                   {blogData.map((blog,index) => (
                    <BlogCard
                    key={index}
                    img={blog.img}
                    desc={blog.desc}
                    />
                ))
                }
            </div>
            </div>

        </div> 
    </div>
  );

};
export default Blogs