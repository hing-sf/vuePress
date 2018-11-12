import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PromoForm from './PromoForm';
import PromoFormReview from './PromoFormReview';

class PromoNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <PromoFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <PromoForm
        onPromoSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// when navigate away from promoForm, clear all input value. this clear value on successful submit
export default reduxForm({
  form: 'promoForm'
})(PromoNew);