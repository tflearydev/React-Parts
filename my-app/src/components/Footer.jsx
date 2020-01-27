import React from "react";
import BasicModal from "../components/BasicModal";

function Foot() {
  
    return (
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <BasicModal />
          <small>Copyright &copy; U-Part</small>
        </div>
      </footer>
    );
  }


export default Foot;
