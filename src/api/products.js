export const productsFetch = (token) => {
  return fetch('https://api.react-learning.ru/products/', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}


export const fetchProductsWithSearch = (token, search) =>
  fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
