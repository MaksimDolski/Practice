// import {useState, useEffect} from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {

  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')
  // const [blogs, setBlogs] = useState([
  //   {title: 'My new website', body: 'lorem ipsum', author: 'mario', id: '1'},
  //   {title: 'Welcome party!', body: 'lorem impsum', author: 'yoshi', id: '2'},
  //   {title: 'Web dec top tips', body: 'lorem impsum', author: 'mario', id: '3'},
  // ])


  // blog delete button
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // const [name, setName] = useState('mario')

    // useEffect( () => {
    //   console.log('use effect function');
    // }) // it runs every time after page refreshing 


    // useEffect( () => {
    //   console.log('use effect function');
    // },[name]) // it runs once, and after when the {name} will be changed

  return (
    
      <div className="home">
        { error && <div> {error} </div>}
        { isPending && <div>Loading...</div> } {/* when isPending is true then div will be shown */ }
        { data && <BlogList blogs={data} title="All Blogs!" /> }
        {/* <BlogList blogs={blogs.filter( (blog) => blog.author === 'mario' )} title="Mario's Blogs"/> */}
      {/* <button onClick={ () => setName('luigi') }>Change name</button>
      <p>{ name }</p> */}
      </div>
  )
}
 
export default Home



