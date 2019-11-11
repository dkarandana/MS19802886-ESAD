import React, {Component} from "react"
import axios from "axios"

class ListView extends Component {

  list_endpoint = 'https://esad-contacts.herokuapp.com/api/company/contacts/list'
  delete_endpoint = 'https://esad-contacts.herokuapp.com/api/company/contacts/delete'
  state = {
    'contact_list': [],
  }


  componentDidMount(){

    axios.get(this.list_endpoint).then(response => {
      
      this.setState(state => {
        return {
          contact_list: [...state.contact_list, ...response.data]
        }
      })

    }).catch(err => console.log('err', err))
  }

  removeContact = (event) => {
    // get removeid
    let removeBtn = event.target
    let removeID = removeBtn.dataset.id

    let response = confirm(`are you shur to delete record id ${removeID}`)

    // delete contcat
    if(response){
      
      let endpoint = `${this.delete_endpoint}/${removeID}`

      axios.delete(endpoint).then(response => {
        
        // successfully deleted
        if(response.status == 204){
          
          this.setState(state =>{
            return {
              contact_list: this.state.contact_list.filter(contact => contact.pk != removeID)
            }
          })

          alert('successfully deleted')
        }


      }).catch(err => console.log('err', err))
    }

  }

  render(){

    return (
      <div className="columns">
        <div className="column">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>description</th>
                <th>telephone no</th>
                <th>email</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
            {/* contacts not found */}
            {(this.state.contact_list.length == 0) ?
              <tr>
                <td colSpan="6">
                  <div className="notification is-danger">
                    <button className="delete"></button>
                    contacts list are empty
                  </div>
                </td>
              </tr>: 
              this.state.contact_list.map(contact => {
                return(
                  <tr key={'contact' + contact.pk}>
                    <td>{contact.pk}</td>
                    <td>{contact.name}</td>
                    <td>{contact.description}</td>
                    <td>{contact.telephoneNo}</td>
                    <td>{contact.email}</td>
                    <td>
                      <div className="buttons are-small">
                        <button className="button is-warning">E</button>
                        <button data-id={contact.pk} className="button is-danger" onClick={this.removeContact}>D</button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListView