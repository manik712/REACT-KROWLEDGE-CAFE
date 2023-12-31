import PropTypes from 'prop-types'; // ES6
import { FcBookmark } from 'react-icons/fc';

const Blog = ({blog,handleAddToBookmark}) => {
  // console.log(blog);
  const {title,cover ,author_img,author,reading_time,posted_date,hashtags} = blog;
  return (
    <div className='mb-20'>
       <img  className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
       <div className='flex justify-between'>

         <div className='flex'>
             <img  className='w-14' src={author_img} alt="" />
             <div className='ml-5'>
              <h3 className='text-2xl'>{author}</h3>
              <p>{posted_date}</p>
             </div>
         </div>



         <div>
             <span>{reading_time} min read</span>
             <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl'><FcBookmark></FcBookmark></button>

         </div>


       </div>
       <h2 className='text-4xl'>{title}</h2>
       <p className='mt-4'>
        {
          hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
        }
       </p>
    </div>
  );
};
Blog.propTypes = {
  blog:PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func


}
export default Blog;
