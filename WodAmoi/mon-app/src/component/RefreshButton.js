import React from "react";
import Button from "react-bootstrap/Button";


const RefreshButton = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
      <Button variant="btn btn-dark mt-4 mb-4 rounded border-0 btn-lg px-3" onClick={ refreshPage }>
      Refresh
    </Button>
    )
}

export default RefreshButton;