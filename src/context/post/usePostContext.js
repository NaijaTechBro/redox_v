import { useContext } from "react"
import { PostContext } from "./PostContext"

const usePostContext = () => {
  const AllPostContext = useContext(PostContext)
  if (AllPostContext === undefined) {
    throw new Error("usePostContext must be used within an PostProvider")
  }

  return AllPostContext
}
export default usePostContext
