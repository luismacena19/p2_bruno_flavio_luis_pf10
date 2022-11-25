import axios from 'axios'

const oracleCloudPost = axios.create({
  baseURL: 'https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/',
})

export const postarNoHistorico = (item) => {
  return oracleCloudPost.post('/tb_historico/',item)
}