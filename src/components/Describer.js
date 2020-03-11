import React from 'react';
import {connect} from 'react-redux';

const Describer = ({wordDescription,translation}) => {

    let DescriptionList = wordDescription.map((el,i)=>{
        return  (
            <div className="item" key={i}>
                <div className="header">{el.pos}</div>
                {el.tr[0].text}
            </div>
        )
    });

    if(wordDescription.length !== 0 && translation){
        return(
            <div className="ui segment" >
                <h3 className="ui header">Description</h3>
                <div className="ui list" >
                    {DescriptionList}
                </div>
            </div>
        )
    }
    return <div></div>
};

const mapStateToProps = (state) => {
    return {wordDescription:state.wordDescription, translation:state.translation}
}

export default connect(mapStateToProps)(Describer);