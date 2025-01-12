
import { useState } from 'react';
import './country.css'
// import CountryDetails from '../CountryDetails/CountryDetails';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    // console.log(country)
    const {name,flags,population,area,cca3} = country
    const [visited,setVisited] = useState(false)
    
    // const passWithParams =()=> handleVisitedCountry(country)
    
    const handleVisited = ()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'white':'crimson'}}>Country-Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedCountry(country)}>Visit Done</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Added Flag</button><br />
            <button onClick={handleVisited}> {visited ? 'Visited':'Go Now'} </button>
            {/* {visited && 'I have visited the country'} */}
            {visited ? 'I have visited the country': 'i want to visit'}
            <hr />

           
        </div>
    );
};

export default Country;