import idb from 'idb'

class IndexDBhelp {
  static test() {
    return console.log('Hello');
  }
  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   */
  static get DATABASE_URL() {
    const port = 1337 // Change this to your server port
    return `http://localhost:${port}/restaurants`;
  }

  /**
   * Fetch all restaurants.
   */
  static fetchRestaurants() {
    fetch(this.DATABASE_URL)
      .then(response => response.json())
      .then(restaurants => {
        // Fill the idb with data from fetch
        console.log(`Filling the idb with data`)
        // IDB.dbPromis()
        this.addDataToIDB(restaurants)
      })
      .catch(error => console.log('Fetch failed', error))
  }

  /**
   * Open the DataBase
   */
  static dbPromis() {
    return idb.open('restaurants', 1, (upgradeDb) => {
      // Create the database
      let store = upgradeDb.createObjectStore('restaurants', {
        keyPath: 'id'
      })
      store.createIndex('by-neighborhood', 'neighborhood')
    })
  }

  /**
   * Add data to the database
   */
  static addDataToIDB(data) {
    this.dbPromis().then((db) => {
      if (!db) return

      // Add each data into the database
      let tx = db.transaction('restaurants', 'readwrite'),
          store = tx.objectStore('restaurants')

      data.forEach((restaurant) => {
        store.put(restaurant)
      })
      console.log(`Populate db`);
    })
  }
}
