/**
 * Fetches data from a given URL and parses it into a JavaScript object.
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {Promise<Object>} The parsed JSON data as an object.
 */

export async function getData(url) {
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}



