export async function request(URL, method , payload) {
  const response = await fetch('http://localhost:8000/api/v1' + URL, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.json();
}