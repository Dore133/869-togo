import React from 'react';

//This is functional component only use for UI
const Restaraunts = ({ResData, getRes}) => {
    //console.log(this.props);
    //const { ninjas } = props;
    const RestList = ResData.map(Restaraunts => {
        return (
            <div className="ninja" key={Restaraunts.ID}>
                {/* <div>{ Restaraunts.Name }</div> */}
                <div><a href={"/Rest/"+Restaraunts.ID}><img alt={Restaraunts.Name} src={Restaraunts.ImgUrl} /></a></div>
                <br/>
            </div>
        )
    });
    return(
      <div className="ninja-list">
          { RestList }
      </div>
    )
}
//onClick={() => {getRes(Restaraunts.ID)}}
//() => {function goes here} so function with () dont run automatically
export default Restaraunts