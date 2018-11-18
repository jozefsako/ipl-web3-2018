import { retrieveJWT } from "react/services/session";

function sendApiRequest({ url, method = "GET", params = null }) {
  const jwt = retrieveJWT();
  
  const headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", jwt);
 
  function handleResponse(response) {
    
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }
  console.log(url, method);

  return fetch(url, {
    method: method,
    headers: headers,
    mode:'no-cors',
    body: params && JSON.stringify(params)
  }).then(handleResponse);
}

export default sendApiRequest;
