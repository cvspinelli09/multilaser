import React from "react";

const Scroll = (props) => {
    return(
        <div style={{
            overflow: 'scroll',
            height: '800px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }} >
            {props.children}
        </div>
    )
}

export default Scroll;