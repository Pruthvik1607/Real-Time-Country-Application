import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../component/UI/Loader";
import { CountryCard } from "../component/layout/CountryCard";
import { SearchFilter } from "../component/UI/SearchFilter";




export const Country = () => {

    const [isPending, startTransition ] = useTransition();
    const [countries,setCountries]= useState([]);

    //for search and filter data
    const [search , setSearch]= useState();
    const [filter, setFilter]=useState("all");

    useEffect(()=>{

        startTransition( async() => {
           const res = await getCountryData();

           //geting data in the form of array
           setCountries(res.data);
        });
        
    },[])

   if(isPending) return <Loader/>;

   console.log(search);

   // here is logic for filter for search input
    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
return country;
        
    }

    const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

     const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );


   return(
    <section className="country-section">
        
        < SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries}
        setCountries={setCountries}/>

        <ul className="grid grid-four-cols">
            {
                filterCountries.map((curCountry,index)=>{
                    return <CountryCard country={curCountry} key={index}/>
                })
            }
        </ul>
    </section>
    
   )
    
 }
