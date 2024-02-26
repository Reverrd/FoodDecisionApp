
import { useState, useCallback, useEffect } from "react"

export default function FoodPositive() {
    const [date, setDate] = useState('')
    const [foodList, setFoodList] = useState([])
    const fetchData = useCallback(()=>{
        fetch('./db.json')
        .then(response=>response.json())
        .then(data=>{
            setFoodList(data)
        })
    },[])
    useEffect(()=>{
        
        const options = {weekday:'long'};
        const currentDate = new Date().toLocaleDateString('en-Uk', options)
        setDate(currentDate)
    },[])
    useEffect(()=>{
        fetchData()
    },[fetchData])
    

  return (
    <div className="bg-cyan-700 h-screen flex items-center justify-center">
      <div className="h-4/6 w-6/12 smm:w-10/12   justify-center items-center flex flex-col bg-creamyWhite rounded-xl relative" >
        <h1>
            Here is a Meal schedule for <span className="font-bold">{date}</span>
        </h1>
        <div>
            {

            }
        </div>
      </div>
    </div>
  )
}


