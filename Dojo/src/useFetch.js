import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {
    // error removing while we navigate between Home and New Blog buttons, because fetch method still running on backend
      const abortCont = new AbortController()

     setTimeout( () => {
      fetch(url, { signal: abortCont.signal } )
      .then(res => { // response method using .json
        if(!res.ok) {
          throw Error ('Could not fetch data for that resource.')
        }
        return res.json()
      })
      .then(data => {
        setData(data) // we pass the data
        setIsPending(false)
        setError(null); // to remove previous error after reloading
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          
          setIsPending(false); // Loading... div removing 
          setError(err.message); // error message showing 
        }
 
        
      })
     },250 )
     return () => abortCont.abort()
    },[url]) 

    return { data, isPending, error }
}

export default useFetch 