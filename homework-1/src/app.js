import React from 'react';
import ReactDOM from 'react-dom';

var appJSX = (fullName, avatarUrl, birthdate, gender, address, email) => {
    let t = <div class="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">{fullName} !</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div>
              <div className="col-md-3 col-lg-3 " align="center">
                <img src={avatarUrl} className="pull-left" />
              </div>
              <div className=" col-md-9 col-lg-9">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Дата рождения</td>
                      <td>{birthdate}</td>
                    </tr>
                    <tr>
                      <td>Пол</td>
                      <td>{gender}</td>
                    </tr>
                    <tr>
                      <td>Адрес</td>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href="#">{email}</a></td>
                    </tr></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    return (t);
};
export default appJSX;