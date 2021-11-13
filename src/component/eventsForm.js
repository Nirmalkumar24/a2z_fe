import "./Form.css";
import React from "react";
import axios from "axios";

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      event_name: " ",
      event_location: " ",
      organizer_name: " ",
      mobile: " ",
      whatsapp: " ",
      alternate_contact_person: " ",
      alternate_contact_number: " ",
      alternate_whatsapp: " ",
      email: " ",
      about: " ",
      others: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

  }
  componentDidMount() {
    var modal = document.getElementById("myForm");
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

  }
  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });

  }



  handlesubmit(event) {

    event.preventDefault();
    axios.post("https://a2zbe.cleverapps.io/api/event_module", {


      event_name: this.state.event_name,
      event_location: this.state.event_location,
      organizer_name: this.state.organizer_name,
      mobile: this.state.mobile,
      whatsapp: this.state.whatsapp,
      alternate_contact_person: this.state.alternate_contact_person,
      alternate_contact_number: this.state.alternate_contact_number,
      alternate_whatsapp: this.state.alternate_whatsapp,
      email: this.state.email,
      about: this.state.about,
      others: this.state.others

    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

    console.log(this.state.event_name);
  }
  render() {
    return (

      <div>

        <button className="btn btn-primary " id="myBtn" onClick={() => {
          var modal = document.getElementById("myForm");
          modal.style.display = "block";
        }}
        >Add Events</button>
        <div id="myForm" className="myForm">

          <div className="myForm-content" >
            <span className="close" onClick={() => {
              var modal = document.getElementById("myForm");
              modal.style.display = "none";
            }}>&times;</span>
            <div className="container">

              <form>
                <div className="form-group">
                  <label htmlFor="event_name">Event Name:</label>
                  <input type="text" className="form-control " id="event_name" placeholder="Enter event_name" name="event_name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="event_location">Event Location:</label>
                  <input type="text" className="form-control " id="event_location" placeholder="Enter event_location" name="event_location" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="organizer_name">Organization Name:</label>
                  <input type="text" className="form-control " id="organizer_name" placeholder="Enter organizer_name" name="organizer_name" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile:</label>
                  <input type="text" className="form-control " id="mobile" placeholder="Enter mobile" name="mobile" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">Whatsapp:</label>
                  <input type="text" className="form-control " id="whatsapp" placeholder="Enter whatsapp" name="whatsapp" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="alternate_contact_person">Althernate Contact Person:</label>
                  <input type="text" className="form-control " id="alternate_contact_person" placeholder="Enter alternate_contact_person" name="alternate_contact_person" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="alternate_contact_number">Alternate Contact Number:</label>
                  <input type="text" className="form-control " id="alternate_contact_number" placeholder="Enter alternate_contact_number" name="alternate_contact_number" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="alternate_whatsapp">Alternate Whatsapp Number:</label>
                  <input type="text" className="form-control " id="alternate_whatsapp" placeholder="Enter alternate_whatsapp" name="alternate_whatsapp" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="text" className="form-control " id="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="about">About:</label>
                  <input type="text" className="form-control " id="about" placeholder="Enter about" name="about" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="others">Others:</label>
                  <input type="text" className="form-control " id="others" placeholder="Enter others" name="others" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-50" onClick={this.handlesubmit}>Submit</button>
                <button type="button" className="btn btn-danger  w-50 " onClick={() => {
                  var modal = document.getElementById("myForm");
                  modal.style.display = "none";
                }}>Close</button>
              </form>

            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default EventForm;