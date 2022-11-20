import axios from 'axios'

const oracleCloudInstance = axios.create({
  baseURL: 'https://g665df6fa3d1993-projetorest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/',
  headers: {'Content-Type': 'application/json'}
})

export const obterHistorico = () => {
  return oracleCloudInstance.get('/tb_historico/')
}