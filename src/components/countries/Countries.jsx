import { useEffect } from "react"
import { useState } from "react"
import Country from "../country/Country"
import './countries.css'


export default function Countries(){
    const [countries,setCountries] =useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])
    const handleVisitedFlags =(flags)=>{
        console.log('adding flags')
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }
    const handleVisitedCountry =(country)=>{
        console.log('i am done')
        console.log(country)
        // visitedCountries.push(country)
        const newVisitedCountry =[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
    }
    return(
        <div className="container">
            
            <h3>Countries : {countries.length}</h3>
            <div>
                <h4>Visited Countries :{visitedCountries.length}</h4>
                <ul>
                   {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                   }
                </ul>
            </div>
            {/* display flasg  */}
            <div className="flags-container">
                {
                     visitedFlags.map((flag,idx) => <img className="box" key={idx} src={flag} alt="" /> )
                } 
            </div>
            {/* display countries */}
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            
            </div>
        </div>
    )
}