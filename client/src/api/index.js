import axiosInstance from '../config/axiosConfig';

class RickMortyAPIWrapper {
  constructor() {
    this.axiosInstance = axiosInstance;
  }

  /**
   *
   * @param {number} offset - page number to get
   */
  async getCharacters() {
    const queryString = `
    {
      characters(page: 1) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          species
          image
        }
      }
    }
    `;
    return this.axiosInstance.post('', { query: queryString });
  }
}

const rickMortyAPIWrapper = new RickMortyAPIWrapper();

export default rickMortyAPIWrapper;
