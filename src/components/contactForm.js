import React from 'react'
import Script from 'react-load-script'
import * as emailjs from 'emailjs-com'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.streetAddress = React.createRef();
    this.state = {
      contactData: {
        first_name: null,
        last_name: null,
        street_number: "", //House Number
        route: "", //Street
        subpremise: "", //Apartment Number
        street_address: null, //Complete Street Address: Number + Street
        locality: "", //City
        administrative_area_level_1: "", //State
        postal_code: "", //Zip Code
        phone: "",
        email: null,
        errors: {
          name: "Please provide a first and last name",
          email: "Please provide a valid email"
        }
      },
      membershipData: {
        adult1: "",
        adult2: "",
        children: ""
      }
    }
  }

  // Store User Input in Contact Data Fields

  handleUserInput = event => {
    this.setState({
      contactData: {
        ...this.state.contactData,
        [event.target.name]: event.target.value
      }
    })
  }

  handleMembershipChange = (event, index) => {
    this.setState({
      membershipData: {
        ...this.state.membershipData,
        [event.target.name]: event.target.value
      }
    })
  }

  // Load the Google Places Script

  handleGoogleScriptLoad = () => {
    let options = {
      types: ['address'],
    };

    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      this.streetAddress.current, options
    );
    this.autocomplete.addListener('place_changed', this.setAddressData);
  }

  // Set Form Data from Google Places Autocomplete

  setAddressData = () => {
    let place = this.autocomplete.getPlace();
    let componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      subpremise: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      postal_code: 'short_name'
    }
    let addressData = {};
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        let data = place.address_components[i][componentForm[addressType]];
        addressData = {...addressData, [addressType]: data}
      }
    }
    addressData = {...addressData, street_address: `${addressData.street_number} ${addressData.route}`}
    
    this.setState({contactData: {...this.state.contactData, ...addressData}})
  }

  // Email data to EHCC Gmail Account

  validateData = () => {
    let errors = {}
    let isValid = true
    if(!this.state.contactData.first_name || !this.state.contactData.last_name) {
      alert(`${this.state.contactData.errors.name}`)
      isValid = false;
    }
    let validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if(!this.state.contactData.email || !validEmail.test(this.state.contactData.email)) {
      alert(`${this.state.contactData.errors.email}`)
      isValid = false;
    }
    this.setState({contractData: {...this.state.contactData, errors}})
    return isValid;
  }

  submitData = (event) => {
    event.preventDefault();
    if(!this.validateData()){
      return
    }
    let streetAddress = `${this.state.contactData.street_address}, ${this.state.contactData.locality}, ${this.state.contactData.administrative_area_level_1} ${this.state.contactData.postal_code}`
    let template_params = {
      from_name: `${this.state.contactData.first_name} ${this.state.contactData.last_name} (${this.state.contactData.email})`,
      to_name: `nbultuis@colgate.edu`,
      subject: `New Signup`,
      name: `${this.state.contactData.first_name} ${this.state.contactData.last_name}`,
      address: `${this.state.contactData.street_address ? streetAddress : ``}`,
      phone: `${this.state.contactData.phone ? this.state.contactData.phone : ``}`,
      email: `${this.state.contactData.email}`
    };
    emailjs.send('gmail', 'volunteer_form', template_params, `user_wqd51Sa0eZnaNaIwUiqDw`)
    .then(
      function(response){
        console.log("success!", response.status, response.text);
      }, function(error){
        console.log("Failed", error)
      }
    )
  }

  render() {
    return (
      <form style={{margin: "0 auto", width: "100%", padding: "5px", textAlign: "left", border: "1px solid black"}}>
        <div>
          <p>
            <span style={{paddingRight: 10}}>First Name: <input type="text" name="first_name" value={this.state.contactData.first_name} onChange={this.handleUserInput}/></span>
            Last Name:<input type="text" name="last_name" value={this.state.contactData.last_name} onChange={this.handleUserInput}/>
          </p>
        </div>
        <div>
          <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}&libraries=places`}
            onLoad={this.handleGoogleScriptLoad}
          />
            Street Address: <input ref={this.streetAddress} name="street_address" value={this.state.contactData.street_address} onChange={this.handleUserInput} 
            style={{
              margin: '0 auto',
              maxWidth: '800px',
              minWidth: '400px'
            }}
            />
        </div>
        <div>
          <p>Apt/Suite #: <input type="text" value={this.state.contactData.subpremise} /></p>
        </div>
        <div>
          <p>City: <input type="text" value={this.state.contactData.locality} /></p>
        </div>
        <div>
          <p>
            <span style={{paddingRight: 10}}>State: <input type="text" value={this.state.contactData.administrative_area_level_1} /></span>
            Zip Code: <input type="number" pattern="[0-9]{5}" value={this.state.contactData.postal_code}/>
          </p>
        </div>
        <div>
          <p>
            <span style={{paddingRight: 10}}>Telephone Number: <input type="tel" name="phone" onChange={this.handleUserInput} value={this.state.contactData.phone}/></span>
            Email: <input type="email" name="email" onChange={this.handleUserInput} value={this.state.contactData.email}/>
          </p>
        </div>
        {this.props.pool ? (
          <div>
            <div>              
              Adults: 
              <input style={{margin: "10px"}} type="text" name="adult1" value={this.state.membershipData.adult1} onChange={this.handleMembershipChange}/>
              <input style={{margin: "10px"}} type="text" name="adult2" value={this.state.membershipData.adult2} onChange={this.handleMembershipChange} />
            </div>
            <div>
              Children: <input style={{margin: "10px"}} type="text" name="children" value={this.state.membershipData.children} onChange={this.handleMembershipChange} />
            </div>
            <div style={{textAlign: "center", marginBottom: "10px"}}>
              Membership Type:
            </div>
            <div style={{maxWidth: "300px", margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
              <label><input type="radio" name="membership" value="family" />Family</label>
              <label><input type="radio" name="membership" value="individual" />Individual</label>
              <label><input type="radio" name="membership" value="senior citizen family" />Senior Citizen Family</label>
              <label><input type="radio" name="membership" value="senior citizen individual" />Senior Citizen Individual</label>
            </div>
          </div>
        ) : null}
        <div style={{textAlign: "center"}}>
          <input type="submit" onClick={event => this.submitData(event)}/>
        </div>
      </form>
    );
  }
}

export default ContactForm