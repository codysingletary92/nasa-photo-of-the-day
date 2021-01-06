import React from "react";

const Image = props => {

    const {imageURL} = props
    console.log(`"${imageURL}"`)

    return (
        <div>
            <img src={imageURL} alt={"Space"}/>
        </div>
    )
}

export default Image;