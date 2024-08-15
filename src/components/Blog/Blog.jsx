import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover_photo, reading_time, author_name, author_img, hashtags, posted_date } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover_photo} alt={`cover photo of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 mb-4' src={author_img} alt="" />
                    <div className='ml-6 mb-3'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><CiBookmarkPlus></CiBookmarkPlus></button>
                </div>
            </div>
            <h2 className="text-4xl mb-2">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='text-purple-800 text-xl font-bold underline'>mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;