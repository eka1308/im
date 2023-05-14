import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
  const { token } = useSelector(state => state.user)

  if (!token) return <Navigate to={'/singin'} />

  return children
}
