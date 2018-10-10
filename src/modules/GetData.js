import Axios from 'axios'
import _ from 'lodash'
class GetData {
  constructor() {
    this.url = 'http://localhost:8000/jalan'
    // this.url = ''
  }

  async getInPlay(app) {
    const res = await Axios.get(`${this.url}/index.php/api/get_running`)
    app.setMatchInPlay(res.data)
  }

  async getPregame() {
    // const res = await Axios.get(`${this.url}/index.php/api/get_pregame`)
    // console.log('pregame')
  }

  async getInPlayPregame(app) {
    try {
      const resInplay = await Axios.get(`${this.url}/index.php/api/get_running`)
      const resPregame = await Axios.get(`${this.url}/index.php/api/get_pregame`)
      app.setMatchInPlay(resInplay.data)
      app.setMatchPreagme(resPregame.data)
    } catch (err) {
      // console.log(err)
    }
  }
}
export default GetData
