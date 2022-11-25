import axios from 'axios'

const weatherMapInstance = axios.create({
  baseURL: 'https://api.openweathermap.org'
})

export const obterPrevisoes = (cidade) => {
  return weatherMapInstance.get(
    '/data/2.5/forecast/', 
    {params: {
      q: cidade,
      appid:'6c916327fba2e586d3508924647bf8df',
      units: 'metric',
      cnt: 40
    }}
  )
}
