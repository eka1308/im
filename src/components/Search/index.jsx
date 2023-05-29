import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { PARAM_SEARCH } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/slices/filterSlice";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./search.module.css";
import { useLocation, useNavigate } from 'react-router-dom'

export const Search = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname
  }
  const path = usePathname() 
  const handleNavigateCatalog = () => {
    if (path !== "/products")
    return navigate('products')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(() => {
    const fitchSearch = searchParams.get(PARAM_SEARCH)

    return fitchSearch ? fitchSearch : ''
  })

  const debounceValue = useDebounce(searchValue, 500)

  useEffect(() => {
    dispatch(changeSearchValue(debounceValue))
  }, [debounceValue, dispatch])

  const handleChange = (event) => {
    const value = event.target.value
    setSearchValue(value)

    if (value) {
      return setSearchParams((prev) => {
        prev.set(PARAM_SEARCH, value);
        return prev
      })
    }

    return setSearchParams((prev) => {
      prev.delete(PARAM_SEARCH)
      return prev
    })
  }

  return <>
    <input className={styles["form-control"]}
      placeholder="Поиск"
      value={searchValue}
      type = 'search'
      onClick={() => handleNavigateCatalog()}
      onChange={(event) => handleChange(event)}
    />
  </>
}
