
import { Link } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";

export default function FoodSuggest() {
   
  return (
    <div className="bg-cyan-700 h-screen flex items-center justify-center">
        <div className="h-4/6 w-6/12 smm:w-10/12   justify-center items-center flex flex-col bg-creamyWhite rounded-xl relative">
            <Link to='/' className="absolute top-0 left-0">
            <div className="flex items-center p-4">
                <span><KeyboardBackspace /></span>
                <span>Go back</span>
            </div>
            </Link>
        <h1 className="w-fit lg:text-4xl md:text-2xl xsm:text-xl  font-bold text-center mb-20 py-5 px-3 ">WOULD YOU LIKE A SUGGEST ON YOUR MEAL TODAY?</h1>
        <div className="button flex justify-around  w-full ">
        <Link to='/foodPositive' className="bg-green-700 xsm:w-2/5 md:w-2/5 lg:w-2/5 rounded-md py-4 text-xl flex justify-center">
        <button>YES</button>
        </Link>
        <Link className="flex justify-center bg-red-600 xsm:w-2/5 md:w-2/5 lg:w-2/5 rounded-md py-4 text-xl" >
        <button >NO</button>
        </Link>
        </div>
        {/* {
            foodList.map((food)=>{

                (
                    <div key={food.id}></div>
                )
            })
        } */}
      </div>
    </div>
  )
}
