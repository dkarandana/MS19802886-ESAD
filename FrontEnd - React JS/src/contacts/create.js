import React from "react"
import $ from "jquery"
import axios from "axios"

class CreateContact extends React.Component {
  
  create_endpoint = "https://esad-contacts.herokuapp.com/api/company/contacts/create"
  state = {
    'errors': {}
  }

  getFormData = () => {

    // get form data
    let form = $("#create_form")
    let formDataArray = form.serializeArray()
    let formDataObj = {}

    formDataArray.map(field => {
      formDataObj[field['name']] = field['value']
    })

    return formDataObj
  }

  resetFormErrors(){
    this.setState(state => {
      return {
        errors: {}
      }
    })
  }

  create = (event) => {
    event.preventDefault()

    let formData = this.getFormData()

    // reset form errors
    this.resetFormErrors()

    // create contact
    axios.post(this.create_endpoint ,formData).then(response => {
      alert('successfully create contact')
    }).catch(err => {
      this.setState(state => {
        return {
          errors: {...err.response.data}
        }
      })
    })

  }


  render(){
    return (
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          {(Object.entries(this.state.errors).length != 0) ? 
            <pre><code>{JSON.stringify(this.state.errors, null, 4)}</code></pre>
          : false}
          <form id="create_form" onSubmit={this.create}>
            <div className="field">
              <div className="control">
                <input className="input " name="name" type="text" placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input " name="description" type="text" placeholder="description" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input " name="telephoneNo" type="number" placeholder="telephone number" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input " name="email" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="column"></div>
      </div>
    )
  }
}

export default CreateContact