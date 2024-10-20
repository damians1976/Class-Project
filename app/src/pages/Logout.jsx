import { signOut } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Logout( props ) {
    const navigate = useNavigate()
    
    useEffect( () => {
        signOut( props.authapp )
        .then( () => { })
        .catch( (error) => { console.log(error) } )
        // take the user back to home page
            navigate("/")

    } )
    
    return(
        <div></div>
    )
} 