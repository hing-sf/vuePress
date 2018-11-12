import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './promos/PromoList';

const Dashboard = () => {
  return (
    <div>
    <h5>Promos List</h5>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/promoInstance/new" className="btn-floating btn-small green">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
