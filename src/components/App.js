import React, {useEffect, useState} from 'react'

const App = () => {
    const [image, setImage] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(response => setImage(response.message)) 
        // .then(response => console.log("response", response))
    }, [])

    return(
        <div>
            {image ? <img src={image} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}

export default App