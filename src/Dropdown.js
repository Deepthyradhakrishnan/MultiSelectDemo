
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';


export const EditableDemo= () => {
    const [selectedCities2, setSelectedCities2] = useState(null);


    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
   function getItems(name){
    console.log(name)
    // return <checkbox checked={true}>{name}</Checkbox>
    return <input type="checkbox"  value={name}/>
   }
    return (
        <div className="card flex justify-content-center">
            {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Select a City" className="w-full md:w-14rem" /> */}
                {/* {cities.length} */}
                {/* <select style={{width:"100px"}}>
                    {cities.map((item,index)=>
                    <option key={index}>{getItems(item.name)}</option>
                    )}
                </select> */}
                       <MultiSelect value={selectedCities2} options={cities} onChange={(e) => setSelectedCities2(e.value)} optionLabel="name" 
                       placeholder="Select a City" display="chip" />

        </div>
    )
}
        