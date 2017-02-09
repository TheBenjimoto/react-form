import React from 'react';

const NewPlaylist = function (props) {

  const inputIsValid = props.inputValue !== '' && props.inputValue.length <= 16;
  const inputIsEmpty = props.inputValue === '';

return (
  <div className="well">

    <form className="form-horizontal" onSubmit={props.playlistTitleSubmit} >
      <fieldset>
        <legend>New Playlist</legend>
        {inputIsEmpty ? <div className="alert alert-warning">Please enter a name</div> : null}
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input onChange={props.playlistTitleChange} value={props.inputValue} className="form-control" type="text" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button disabled={!inputIsValid} type="submit" className="btn btn-success">Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)}

export default NewPlaylist;
