import React from 'react';

//This is functional component only use for UI
const Menu = ({ ResId, MenuData }) => {
    //getMenu(ResId);
    //console.log(MenuData);
    
    const menuItems = MenuData.map(Items => {
        var ImgUrl = (Items.ImgUrl !== '') ? Items.ImgUrl : '';
        return (
            <div className="RestItems" key={ Items.ID }>
                <div>{ Items.Name }</div>
                <div><img src={ ImgUrl } alt={ Items.Name }/></div>
                <br/>
            </div>
        )
    });

    return(
        <div className="ResMenuHold">
            {/* <div>{ Restaraunts.Name }</div> */}
            {/* <div><h1> this is the menu </h1></div> */}
            <div>{ menuItems }</div>
            {/* <br/> */}
        </div>
    )
}

export default Menu