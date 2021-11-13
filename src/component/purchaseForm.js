import "./Form.css";
import React from "react";
import axios from "axios";



class PurchaseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendor_name: " ",
      vendor_location: " ",
      vendor_phone: " ",
      vendor_mail: " ",
      order_date: " ",
      contact_person: " ",
      telephone_number: " ",
      product_name: " ",
      price: " ",
      quantity: " ",
      total_amount: 0,
      payment_status: " ",
      order_status: " ",
      expected_delivery_date: " ",
      shipping_address: " ",
      for_event: " ",
      ordered_by: " ",
      approved_by: " ",
      approve_status: -1,
      others: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
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
  handleStatus(event) {

    if (event.target.value === "Rejected") {
      this.setState({ approve_status: -1 });
    }
    if (event.target.value === "Pending") {
      this.setState({ approve_status: 0 });
    }
    if (event.target.value === "Approved") {
      this.setState({ approve_status: 1 });
    }
  }
  handleTotal(event) {
    this.setState({ quantity: event.target.value });
    let price = Number(this.state.price);
    let quantity = Number(event.target.value);
    let amount = price * quantity;
    this.setState({ total_amount: String(amount) });

  }

  handlesubmit(event) {

    event.preventDefault();
    axios.post("https://a2zbe.cleverapps.io/api/purchase_module", {
      "vendor_name": this.state.vendor_name,
      "vendor_location": this.state.vendor_location,
      "vendor_phone": this.state.vendor_phone,
      "vendor_mail": this.state.vendor_mail,
      "order_date": this.state.order_date,
      "contact_person": this.state.contact_person,
      "telephone_number": this.state.telephone_number,
      "product_name": this.state.product_name,
      "price": this.state.price,
      "quantity": this.state.quantity,
      "total_amount": this.state.total_amount,
      "payment_status": this.state.payment_status,
      "order_status": this.state.order_status,
      "expected_delivery_date": this.state.expected_delivery_date,
      "shipping_address": this.state.shipping_address,
      "for_event": this.state.for_event,
      "ordered_by": this.state.ordered_by,
      "approved_by": this.state.approved_by,
      "approve_status": this.state.approve_status,
      "others": this.state.others

    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (

      <div>

        <button className="btn btn-primary" id="myBtn" onClick={() => {
          var modal = document.getElementById("myForm");
          modal.style.display = "block";
        }}
        >Add Purchase</button>
        <div id="myForm" className="myForm">

          <div className="myForm-content" >
            <span className="close" onClick={() => {
              var modal = document.getElementById("myForm");
              modal.style.display = "none";
            }}>&times;</span>
            <div className="container">

              <form >
                <div className="form-group">
                  <label htmlFor="vendor-name">Vendor Name:</label>
                  <input type="text" className="form-control " id="vendor-name" placeholder="Enter vendor-name" name="vendor_name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="vendor-location">Vendor Location:</label>
                  <input type="text" className="form-control" id="vendor-location" placeholder="Enter vendor-location" name="vendor_location" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="vendor-phone">Vendor Phone:</label>
                  <input type="tel" className="form-control" id="vendor-phone" placeholder="Enter vendor-phone" name="vendor_phone" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="vendor-email">Vendor Email:</label>
                  <input type="email" className="form-control" id="vendor-email" placeholder="Enter vendor-email" name="vendor_mail" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="ordered-date">Ordered Date:</label>
                  <input type="date" className="form-control" id="ordered-date" placeholder="Enter ordered-date" name="order_date" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-person">Contact Person:</label>
                  <input type="tel" className="form-control" id="contact-person" placeholder="Enter contact-person" name="contact_person" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Telephone:</label>
                  <input type="tel" className="form-control" id="telephone" placeholder="Enter telephone" name="telephone_number" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="product-name">Product Name:</label>
                  <input type="text" className="form-control" id="product-name" placeholder="Enter Product Name" name="product_name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input type="number" className="form-control" id="price" placeholder="Enter Price" name="price" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" name="quantity" onChange={this.handleTotal} />
                </div>

                <div className="form-group">
                  {/* Total amount should be quantity * Price */}
                  <label htmlFor="total-amount">Total Amount:</label>
                  <input type="text" className="form-control" id="date" placeholder="Enter Payment status" name="total_amount" value={this.state.total_amount} disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="sel1">Select list (select one):</label>
                  <select className="form-control" id="sel1" onChange={this.handleChange} name="order_status">
                    <option>Planning</option>
                    <option>Pre-purchase</option>
                    <option>Purchase Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="sel1">payment-status:</label>
                  <select className="form-control" id="payment-status" onChange={this.handleChange} name="payment_status">
                    <option>Unpaid</option>
                    <option>Paid</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="expected-devlivery-date">Expected Delivery Date:</label>
                  <input type="date" className="form-control" id="expected-devlivery-date" placeholder="Enter Expected Delivery Date " name="expected_delivery_date" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="shipping-address">Shipping Address:</label>
                  <input type="text" className="form-control" id="shipping-address" placeholder="Enter Shipping Address" name="shipping_address" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="event">For Event:</label>
                  <input type="text" className="form-control" id="event" placeholder="Enter event" name="for_event" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="ordered-by">Orderd by:</label>
                  <input type="text" className="form-control" id="ordered-by" placeholder="ordered-by" name="ordered_by" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="approved-by">Approved by:</label>
                  <input type="text" className="form-control" id="approved-by" placeholder="approved-by" name="approved_by" onChange={this.handleStatus} />
                </div>
                <div className="form-group">
                  <label htmlFor="approve-status">Approve Status(select one):</label>
                  <select className="form-control" id="approve-status" onChange={this.handleStatus} name="approve_status">
                    <option>Rejected</option>
                    <option>Pending</option>
                    <option>Approved</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="others">Others/Comments:</label>
                  <input type="textarea" className="form-control" id="others" placeholder="others" name="others" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-50 " onClick={this.handlesubmit}>Submit</button>
                
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

export default PurchaseForm;