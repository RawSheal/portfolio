import React from 'react'
import { BookOpen, Calendar, ChevronRight } from 'lucide-react'
const blog_data = {
    title: 'My first blog',
    sub_title: 'Hello World!!! Welcome to my blog.This is my first blog and expect more of it.',
    created_at: '2026/03/03',
}

function BlogCards(){
    return(
        <>
            <div className='relative w-full sm:flex items-center border border-white/20 p-5 my-5 transition-all duration-500 hover:border-white/30 hover:bg-base group'>
                {/* icon */}
                <div className=' aspect-square md:w-[100px] md:h-[100px] p-5 flex flex-col justify-center items-center border border-white/20'>
                    <span className=' text-white/20 flex justify-center items-center border-b border-b-border p-2 font-black transition-all duration-300 group-hover:text-red/30'>Log-001</span>
                    <span className=' text-white/20 flex justify-center items-center p-2 font-black'><BookOpen size={16} className='transition-all duration-300 group-hover:text-white'/></span>
                </div>
                {/* title */}
                <div className=' text-text/50 p-5 mx-5'>
                    <div className=' flex items-center'><Calendar size={12} className=' mr-5'/> {blog_data.created_at}</div>
                    <div className=' text-text font-black text-[2rem] uppercase transition-all duration-300 group-hover:text-red/30'>{blog_data.title}</div>
                    <div className=' text-text/60'>{blog_data.sub_title}</div>
                </div>
                {/* box */}
                <div className=' absolute w-[2px] h-full bg-red/50 bottom-0 right-0 origin-bottom scale-y-0 transition-all duration-500 sm:group-hover:scale-y-100'></div>
            </div>
        </>
    )
}

function Blog() {
  return (
    <div className=' p-16 flex flex-col justify-center items-center'>
        <div className=' w-full'>
            <div className=' text-text font-black uppercase tracking-[0.5rem] sm:tracking-[0.8rem]'>my personal blog Post</div>
            <div className=' text-text font-black uppercase text-[6rem] bg-gradient-to-r from-red to-orange/20 bg-clip-text text-transparent'>My Recent blogs</div>
        </div>
        <div className=' w-full'>
            <BlogCards />
            <BlogCards />
        </div>

        <div className='flex justify-center items-center w-full p-15 border border-dashed border-border transition-all duration-300 hover:bg-white/5 group'>
            <span className=' font-black uppercase text-text/30 group-hover:text-text tracking-[0.8rem]'>Browse Full Arcive</span>
            <ChevronRight
          size={25}
          className="relative text-text/30  mx-5 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-blue"
        />   
        </div>

    </div>
  )
}

export default Blog