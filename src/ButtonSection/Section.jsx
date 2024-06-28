import "./NewSection.css"
function ButtonSection({symbol,clickLogic}){
    return(
        <>
        <div className="flex bg-white wide-box">
          <div onClick={clickLogic} className="flex relative left-24 bg-red-500 h-16 w-20 text-white p-6 font-extrabold">
              {symbol}
          </div>
        </div>
        </>
    )
}
export default ButtonSection