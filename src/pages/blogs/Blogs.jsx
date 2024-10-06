import { Outlet, useLocation } from "react-router-dom";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import "./Blogs.css"

const Blogs = () => {
    const location = useLocation();
    const isNestedRoute = location.pathname.includes('/blogs/');


    const _static_array = [
        {
            id: 1,
            title: 'When is the best time to do watering?', 
            content_preview: 'Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros. Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus, laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas...'
        },
        {
            id: 2,
            title: 'When is the best time to do watering?', 
            content_preview: 'Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros. Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus, laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas...'
        },
        {
            id: 3,
            title: 'When is the best time to do watering?', 
            content_preview: 'Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros. Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus, laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas...'
        },
        {
            id: 4,
            title: 'When is the best time to do watering?', 
            content_preview: 'Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros. Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus, laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas...'
        },
        {
            id: 5,
            title: 'When is the best time to do watering?', 
            content_preview: 'Our project is hugely influential towards our planet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a lectus nibh. Proin vehicula nibh orci, vel commodo est ultrices nec. Donec in lectus tempor, dapibus lectus eget, tempor eros. Quisque eget dictum elit. Duis odio mi, pulvinar efficitur nulla in, viverra maximus neque. Donec vel augue porttitor, pharetra lacus vel, maximus massa. Pellentesque luctus turpis id enim scelerisque, vel posuere massa dignissim. Sed scelerisque velit lectus, laoreet tincidunt lorem blandit eget. Cras a egestas neque. Maecenas...'
        }
    
    ]
    return <main> <div className="blogs-wrapper">
        {!isNestedRoute && (<>
        <h1 style={{marginBotton: '45px'}}>Blogs with tips</h1>
        <div className="blogs-search">
            <input type="text" placeholder="Find article by name" style={{marginRight: '18px', width:'600px'}}/>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 37.3609L31.2194 26.5784C33.1161 23.7679 34.1281 20.454 34.125 17.0635C34.125 7.65545 26.4734 0 17.0635 0C7.65545 0 0 7.65545 0 17.0635C0 26.4734 7.65545 34.1269 17.0635 34.1269C20.4542 34.1309 23.7683 33.1189 26.5784 31.2213L37.3571 42L42 37.3609ZM17.0635 28.875C13.9313 28.872 10.9282 27.6264 8.71343 25.4116C6.49863 23.1968 5.25303 20.1937 5.25 17.0615C5.25354 13.9295 6.4993 10.9268 8.71399 8.71208C10.9287 6.49739 13.9314 5.25163 17.0635 5.24809C20.1955 5.25163 23.1982 6.49739 25.4129 8.71208C27.6276 10.9268 28.8734 13.9295 28.8769 17.0615C28.8734 20.1936 27.6276 23.1963 25.4129 25.411C23.1982 27.6257 20.1955 28.8715 17.0635 28.875Z" fill="#0032A0" />
            </svg>
        </div>
        {_static_array.map(({title, content_preview})=> {
            return <BlogPreview title={title} content_preview={content_preview}/>
        })} </>)}
        <Outlet/>
        </div>
      
        
    </main>
}

export default Blogs;