jest.mock('@restqa/restqa-plugin-bootstrap', () => {
  return { 
    World: class {
      constructor () {
        this.setup()
      }
      
      get data () {
        return this._data
      }
    }
  }
}, { virtual: true })

