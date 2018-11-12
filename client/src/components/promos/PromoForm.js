// PromoForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PromoField from './PromoField';
// import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class PromoForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={PromoField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onPromoSubmit)}>
          {this.renderFields()}
          <Link to="/promosList" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, errMessage }) => {
    if (!values[name]) {
      errors[name] = errMessage;
    }
  });

  return errors;
}

// validate excute on submit
// form: promoForm = location where redux form stored value in redux store
// destroyOnUnmount: false = will save state of form
export default reduxForm({
  validate,
  form: 'promoForm',
  destroyOnUnmount: false
})(PromoForm);
