const dbConn = null;

export default {

  connect: async () => {

  },

  getDbConn: () => {
    if(dbConn === null) {
      await this.connect()
    }
    
    return dbConn;
  }
}