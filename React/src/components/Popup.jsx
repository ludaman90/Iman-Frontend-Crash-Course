function Popup({title, ClosePopup}){
        function Confirmed(){
        console.log("Confirm button clicked")
    }
       function Cancelled(){
        console.log("Cancel button clicked")
    }
    return(
        <>
            <div className="popup">
                <span>{title}</span>
                <div className="popup_btns">
                    <button className="popup_btn" onClick={()=>Confirmed()}>Confirm</button>
                    <button className="popup_btn popup_btn--cancel" onClick={()=>ClosePopup()}>Cancel</button>
                </div>
            </div>
            <div className="backdrop" onClick={()=>ClosePopup()}></div>
        </>
    )
}

export default Popup