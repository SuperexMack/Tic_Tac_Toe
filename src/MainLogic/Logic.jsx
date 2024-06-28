import { useState } from "react"
import ButtonSection from "../ButtonSection/Section"
function MainLogic(){
    const [boxState , setBoxState] = useState(Array(9).fill(null))
    const [xSign , setxSign] = useState(false)
    const caller = (index)=>{
      const callerArray = [...boxState]
      callerArray[index] = xSign?'X':'O'
      setBoxState(callerArray);
      setxSign(!xSign);
      if(Algo(callerArray)){
        alert("you won")
        window.location.reload()
      }
    }

    let Algo = (winnerArray)=>{
        let winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [0,4,8],
            [2,4,6],
            [2,5,8],
        ]

    //     for(let win of winner){
    //         const [a,b,c] = win;
    //         if(winnerArray[a] && winnerArray[a]===winnerArray[b] && winnerArray[b]===winnerArray[c]){
    //             return true;
    //         }
    //     }
    //     return false;
    // }

      for(let i = 0; i<winner.length ; i++){
        let [a,b,c] = winner[i];
        if(winnerArray[a] && winnerArray[a]==winnerArray[b] && winnerArray[a] ==winnerArray[c]){
            return true;
        }
      }

    }


    return(
        <>
        
        <div className="flex flex-row relative">
         <ButtonSection clickLogic={()=>caller(0)} symbol={boxState[0]}></ButtonSection>
         <ButtonSection clickLogic={()=>caller(1)} symbol={boxState[1]}></ButtonSection>
         <ButtonSection clickLogic={()=>caller(2)} symbol={boxState[2]}></ButtonSection>
        </div>

        <div className="flex flex-row relative">
        <ButtonSection clickLogic={()=>caller(3)} symbol={boxState[3]}></ButtonSection>
        <ButtonSection clickLogic={()=>caller(4)} symbol={boxState[4]}></ButtonSection>
        <ButtonSection clickLogic={()=>caller(5)} symbol={boxState[5]}></ButtonSection>
        </div>

        <div className="flex flex-row relative">
         <ButtonSection clickLogic={()=>caller(6)} symbol={boxState[6]}></ButtonSection>
         <ButtonSection clickLogic={()=>caller(7)} symbol={boxState[7]}></ButtonSection>
         <ButtonSection clickLogic={()=>caller(8)} symbol={boxState[8]}></ButtonSection>
        </div>
        </>
    )
}
export default MainLogic