const API_URL = 'http://localhost:3000/api/v1';

export async function fetchChats() {
  return fetch(`${API_URL}/chats`).then((res) => res.json());
}
