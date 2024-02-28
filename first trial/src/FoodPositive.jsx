
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";


export default function FoodPositive() {
    const [date, setDate] = useState('')
    useEffect(()=>{
        //this is to show you the name of the day rather than the date number figures itself
        const options = {weekday:'long'};
        const currentDate = new Date().toLocaleDateString('en-Uk', options)
        setDate(currentDate)
    },[])
    const [randomFood, setRandomFood] = useState(null)
    // const [foodList, setFoodList] = useState(null);
    const fetchUrl = 'http://localhost:3500/Food'
    useEffect(()=>{
        fetch(fetchUrl)
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            console.log(`the data is ${JSON.stringify(data)}`); 
            // setFoodList(data)})
            const randomIndex = Math.floor(Math.random() * data.length)
            setRandomFood(data[randomIndex]);
        // .catch(err=>console.log(err))
        })
    },[])
    

  return (
    <div className="bg-cyan-700 h-screen flex items-center justify-center">
      <div className="h-4/6 w-6/12 smm:w-10/12   justify-center items-center flex flex-col bg-creamyWhite rounded-xl relative" >
      <Link to='/' className="absolute top-0 left-0">
            <div className="flex items-center p-4">
                <span><KeyboardBackspace /></span>
                <span>Go back</span>
            </div>
     </Link>
        <h1>
            Here is a Meal schedule for <span className="font-bold">{date}:</span>
        </h1>
         <div>
               
                { 
                randomFood && 
                    (

                    
                        <div >
                            <p>
                                your morning meal is {randomFood.Morning}
                            </p>
                            <p>
                                your afternoon meal is {randomFood.Afternoon}
                            </p>
                            <p>
                                your evening meal is {randomFood.Evening}
                            </p>

                        </div>

                    )
                    
                    }
        </div>
      </div>
    </div>
  )
}


