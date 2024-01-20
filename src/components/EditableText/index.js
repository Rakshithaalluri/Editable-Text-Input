import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {buttonClicked: false, inputText: ''}

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onSaveButton = () => {
    this.setState(prevState => ({buttonClicked: !prevState.buttonClicked}))
  }

  render() {
    const {buttonClicked, inputText} = this.state
    const EditOrSaveButton = buttonClicked ? 'Edit' : 'Save'

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading"> Editable Text Input </h1>
          <div className="input-button-container">
            {buttonClicked ? (
              <p className="inputText"> {inputText} </p>
            ) : (
              <input
                className="input"
                type="text"
                value={inputText}
                onChange={this.onChangeInputText}
              />
            )}

            <button
              className="button"
              type="button"
              onClick={this.onSaveButton}
            >
              {' '}
              {EditOrSaveButton}{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
