"use client"
import PinItem from "./PinItem";



const PinList = ({ listOfPins }) => {

  
    
    

    return (
        
        <div className="mt-7 px-2 md:px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-y-6 mx-auto">
            {listOfPins.map((item, index) => (
                <div key = {index}>
                   <PinItem pin = {item}/>
                </div>
            ))}
        </div>
    )
}

export default PinList;
