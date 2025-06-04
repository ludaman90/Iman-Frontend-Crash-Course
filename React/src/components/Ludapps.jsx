function Ludapps({ludaprop,TogglePopup}){

    // function handleClick(){
    function deleteHandler(){
        console.log("Delete",ludaprop)
    }

    return(
        <div className="lud-apps">
            <h1>{ludaprop}</h1>
            {/* <button onClick={()=>handleClick()}>Delete</button> */}
            <button onClick={()=>TogglePopup()}>Delete</button>
        </div>
        
    )
}

export default Ludapps;