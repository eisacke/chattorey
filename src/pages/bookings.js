import React, { Component } from "react";
import axios from "axios";
import Input from "../components/form/input/input";
import Textarea from "../components/form/textarea/textarea";
import bookingStyles from "./bookings.module.styl";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

class Bookings extends Component {
  state = {
    name: "",
    telephone: "",
    email: "",
    message: "",
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const isEmpty = value.length === 0;
    const errors = Object.assign(this.state.errors, { [name]: isEmpty });
    this.setState({ [name]: value, errors });
  };

  submit = e => {
    e.preventDefault();

    const errors = this.validate();
    const hasErrors = Object.keys(errors).some(error => errors[error]);
    if (hasErrors) return this.setState({ errors });

    const { name, telephone, email, message } = this.state;
    const data = { name, telephone, email, message };

    axios
      .post("https://formcarry.com/s/YAi4gts_xjS", data)
      .then(() => {
        this.setState({ submitted: true });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  validate = () => {
    const { name, email, telephone, message } = this.state;
    return {
      name: name.length === 0,
      email: email.length === 0,
      telephone: telephone.length === 0,
      message: message.length === 0
    };
  };
  render() {
    return (
      <Layout>
        <SEO title="Bookings" />
        <div>
          <h1 className="heading-medium push-bottom">Bookings</h1>
          <p className="text-medium push-bottom">
            Please call <a href="tel:01474322123">01474 322123</a> to book or
            use the booking form below.
          </p>

          {this.state.error && (
            <div>
              <p className="text-medium o-text-bold">
                Sorry, it looks like something went wrong when submitting your
                message.
              </p>
              <p className="text-medium o-text-bold">
                Please call us or refresh the page and try again.
              </p>
            </div>
          )}

          {this.state.submitted && (
            <p className="text-medium o-text-bold">
              Great! Thanks for submitting your booking enquiry. One of the team
              will be in touch soon.
            </p>
          )}

          {!this.state.submitted && (
            <form onSubmit={this.submit}>
              <Input
                name="name"
                label="Name"
                type="text"
                handleChange={this.handleChange}
                error={this.state.errors.name}
              />
              <Input
                name="telephone"
                label="Telephone"
                type="text"
                handleChange={this.handleChange}
                error={this.state.errors.telephone}
              />
              <Input
                name="email"
                label="Email"
                type="text"
                handleChange={this.handleChange}
                error={this.state.errors.email}
              />
              <Textarea
                name="message"
                label="Message"
                type="text"
                handleChange={this.handleChange}
                error={this.state.errors.message}
              />

              <button className={bookingStyles.button}>Submit</button>
            </form>
          )}
        </div>
      </Layout>
    );
  }
}

export default Bookings;
