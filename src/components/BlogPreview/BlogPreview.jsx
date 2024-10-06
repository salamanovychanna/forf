import './BlogPreview.css'

const BlogPreview = ({title, content_preview}) => {
    return (
        <article className='blog_preview-article'>
            <h3>{title}</h3>
            <p>{content_preview}</p>
        </article>
    );
};

export default BlogPreview;