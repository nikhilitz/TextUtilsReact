import React from "react";

function Alert(props) {
    
  return (
    // yeh props.alert && isliye kiya h kyuki jb props.alert exist krega tb he proceed hoga woh div
    // this happens because all jsx converts to javascript call
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>
  );
}

export default Alert;
