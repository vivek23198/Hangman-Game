const getPuzzle = async (wordCount)=> {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(response.status === 200){
            const data = await response.json()
            return data.puzzle
        }else{
            throw new Error('Unable to fetch puzzle')
        }
   
}


const getCurrentCountry = async ()=>{
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry =async (countryCode)=> {
    const response = await fetch('//restcountries.eu/rest/v2/all')
        if (response.status === 200){
            const data = await response.json()
            return data.find((country)=> country.alpha2Code === countryCode)
        }else{
            throw new Error("Unable to fetch dta")
        }
    
}

const getLocation = async ()=>{
    const response  = await  fetch("//ipinfo.io/json?token=8a55516a7d3767")
        if(response.status === 200){
            return response.json()
        }else{
            throw new Error("Unable to get the current location")
        }
}



