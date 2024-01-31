//export const BASE_URL = 'https://api.mentor.nomoredomainsmonster.ru';
export const BASE_URL = 'http://localhost:3000'

const handleResponse = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`)
    }
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {email, password} ),
    })
      .then(handleResponse)
  };

  export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(handleResponse)
    .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data.token;
        }
      });
  };
  

  export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(handleResponse)
  };