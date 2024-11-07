import { useContext } from "react"
import { FirestoreContext } from "../contexts/FirestoreContext"

export function Home ( props ) {
  const db = useContext (FirestoreContext)  
  return (
      <h1>Home</h1>
    )
}