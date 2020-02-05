import React from "react";
import BasicModal from "../components/BasicModal";


const footStyle = {
  bottom: "0",
  left: "0",
  backgroundColor: "#212529",
  color: "white",
  // marginTop: "100px",
  position: "absolute",
  width: "100%",
  padding: "10px"
}

function Foot() {

  
    return (
      <footer style={footStyle}>
        
        <div className="container text-center">
          <BasicModal />
          <small>Copyright &copy; U-Part</small>
        </div>
      </footer>
    );
  }


export default Foot;
