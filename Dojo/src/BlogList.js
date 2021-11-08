import React from "react"

const BlogList = ({blogs, title}) => {
    
    const blogList = blogs.length ? (
            blogs.map(blog => 

             <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>   
                {/* <button onClick={ () => handleDelete(blog.id) }>Delete Blog</button> */}
            </div>

            )

         ) : ( 
            <div><h4>There is no more blogs!</h4></div>
        )

        return (
        <div className="blog-list">
            <h1>{title}</h1>
               { blogList }
        </div>
    )

    }

            

export default BlogList