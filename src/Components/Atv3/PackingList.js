import React from "react";

const Item = ({name, isPacked}) => {
    let itemContent = name;
    if (isPacked){
        itemContent = name + "✔"
    }
    return(
        <li className="item">
            {itemContent}
        </li>
    );
}

const PackingList = () => {
    return(
        <section>
            <h1>Sally Ride's Packing</h1>
            <uL>
                <Item
                    isPacked={true}
                    name="Space Suit"
                />
                <Item 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </uL>
        </section>
    )
}

export default PackingList;