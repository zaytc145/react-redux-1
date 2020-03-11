import React from 'react';
import {connect} from 'react-redux';
import {showHistoryWord} from '../actions'

const History = ({historyArr,showHistoryWord}) => {

    let historyList = historyArr.map((el,i) => {

        return (
            <div className="item" key={i}>
                <div className="content">
                    <a className="header" onClick={showHistoryWord}>{el[0]} - {el[1]}</a>
                </div>
            </div>
        )
    });

    if (historyArr.length !== 0){
        return(
            <div className="ui segment">
                <h3 className="ui header">History</h3>
                <div className="ui relaxed divided list">
                    {historyList}
                </div>
            </div>
        )
    }
    return <div></div>
};

const mapStateToProps = (state) => {
    return {historyArr:state.historyArr}
}
export default connect(mapStateToProps,{showHistoryWord})(History);