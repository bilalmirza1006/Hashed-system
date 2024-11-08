// API interaction example

/**
 * Fetch data from a sample API endpoint.
 */
export async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log("new dta",data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  