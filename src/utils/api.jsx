/**
 * Fetches user data from the JSONPlaceholder API
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of user objects
 */
export const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };