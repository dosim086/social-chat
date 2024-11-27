const API_URL = 'http://localhost:3000/api/v1';

// TODO add retry logic
export async function fetchChats() {
  return fetch(`${API_URL}/chats`).then((res) => res.json());
}
