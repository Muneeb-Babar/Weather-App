
export async function getWeatherData(input){
    const res=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=91b4369798474fee84b51233233010&q=${input}&days=3&aqi=no`)
    // const res= await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ddd4fe361bc98bd7ee7bdf83fd4da229&units=metric`
    // )
    const result=await res.json()

    return result
}