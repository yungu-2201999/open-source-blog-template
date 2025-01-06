export function Get(url: string, params?: any, headers?: any) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: headers,
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export function Post(url: string, params?: any, headers?: any) {
 return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
 })
}