import { signOut } from "firebase/auth"
import { useEffect } from "react"

export function Logout( props ) {
    useEffect( () => {
        signOut( props.authapp )
        .then( () => { })
        .catch( (error) => { console.log(error) } )

    } )
    
    return(
        <div></div>
    )
} 