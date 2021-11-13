import EventForm from "../component/eventsForm";
import React from "react";
import axios from "axios";
const Style =
{

    position: "absolute",
    left: "20%",
    top:"20%",
    scrollbarWidth: "none",
    scrollbarWidth: "none",
    overFlow: "hidden" 



}
const StyleOne ={

    position : "relative",
    top : "20%",
    left: "20%",
    scrollbarWidth: "none",
    overFlow: "hidden"
  
   
}


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        axios.get("https://a2zbe.cleverapps.io/api/event_module/count").then((response) => {
            if (response.data != null) {
                this.setState({ data: response.data.data.data });
            }
        }).catch((error) => {
            console.log(error);
        });

    }
    



    render() {
        var { data } = this.state;
        return (
            <div className="Event" >
                <div style={StyleOne}>
                    <EventForm />
                </div>
                <div class="container body-content" style={Style}>
                    <div class="page-header">

                        <div class="form-group">
                            <fieldset>
                                <form action="" class="form-group" >
                                    <div class="table-responsive">
                                        <div class="table-responsive">

                                            <table id="escalation" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                                                <thead className="bg-dark text-white">
                                                    <tr>
                                                        <th>event_name</th>
                                                        <th>event_location</th>
                                                        <th>organizer_name</th>
                                                        <th>mobile</th>
                                                        <th>whatsapp</th>
                                                        <th>alternate_contact_person</th>
                                                        <th>alternate_contact_number</th>
                                                        <th>alternate_whatsapp</th>
                                                        <th>email</th>
                                                        <th>about</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {

                                                        data.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{item["event_name"]}</td>
                                                                    <td>{item["event_location"]}</td>
                                                                    <td>{item["organizer_name"]}</td>
                                                                    <td>{item["mobile"]}</td>
                                                                    <td>{item["whatsapp"]}</td>
                                                                    <td>{item["alternate_contact_person"]}</td>
                                                                    <td>{item["alternate_contact_number"]}</td>
                                                                    <td>{item["alternate_whatsapp"]}</td>
                                                                    <td>{item["email"]}</td>
                                                                    <td>{item["about"]}</td>
                                                                    <td><button className="btn btn-primary">Edit</button></td>
                                                                    <td><button className="btn btn-danger">Delete</button></td>
                                                                </tr>
                                                            );
                                                        })

                                                    }
                                                    <tr>

                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

        );
    }
}

export default Events;