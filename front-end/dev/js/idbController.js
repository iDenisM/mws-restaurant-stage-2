import idb from 'idb'

class IDB {
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
      console.log(`Create db`);
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
