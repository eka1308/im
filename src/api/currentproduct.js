export const currentProductFetch = (token, id) => {
    return fetch(`https://api.react-learning.ru/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  