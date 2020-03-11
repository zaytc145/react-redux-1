import React from "react";
import { connect } from "react-redux";
import { takeWord, translationCall, dictionaryCall, clearAll } from "../actions";

class Translator extends React.Component {
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <h1 className="ui center aligned header">Translator app</h1>
        <div className="ui divider"></div>
        <div className="ui three column centered grid">
          <div className="seven wide column">
            <div className="ui segment">
              <div className="ui form">
                <div className="field">
                  <label>You're text</label>
                  <textarea rows="5" onChange={this.props.takeWord} value={this.props.word}></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="center aligned two wide column">
            <div>
              <button
                className="ui button"
                onClick={() => {
                  this.props.translationCall(this.props.word);
                  this.props.dictionaryCall(this.props.word);
                }}
              >
                Translate
              </button>
              <button className="ui button" style={{ marginTop: "3px" }}>
                Add to dictionary
              </button>
              <button className="ui button" style={{ marginTop: "3px" }} onClick={this.props.clearAll}>
                Clear all
              </button>
            </div>
          </div>
          <div className="seven wide column">
            <div className="ui segment">
              <div className="ui form">
                <div className="field">
                  <label>Translated text</label>
                  <textarea rows="5" value={this.props.translation} readOnly></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { word: state.word, translation: state.translation };
};
export default connect(mapStateToProps, { takeWord, translationCall, dictionaryCall, clearAll })(Translator);
