
export async function getWeatherData(input){
    const res=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=91b4369798474fee84b51233233010&q=${input}&days=3&aqi=no`)
    const result=await res.json()
    return result
}