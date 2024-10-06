import { useNavigate } from 'react-router-dom';
import './BlogPreview.css'

const BlogPreview = ({title, content_preview}) => {
    const navigate = useNavigate()
    return (
        <article className='blog_preview-article'>
            <h3 onClick={()=>navigate('/blogs/agriculture-practices')}>{title}</h3>
            <p>{content_preview}</p>
        </article>
    );
};

export default BlogPreview;