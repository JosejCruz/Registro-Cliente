import React from 'react'
import '../../css/icon.css'
import './Navbar.css'
import Calendar from '../Calendar/Calendar';
import FormClient from '../FormClient/FormClient';
import FormEditClient from '../FormClient/FormEditClient';

function Navbar(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='p-3 mb-2 text-white sm-12 md-12 lg-12 "d-grid gap-2 d-md-flex justify-content-md-end pt-3 color'>
          <button
            className="btn me-md-2 color text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRightCalendar"
            aria-controls="offcanvasRight"
          >
            <ion-icon name="calendar-outline"></ion-icon>
          </button>
          <button
            className="btn color text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <ion-icon name="person-add-outline"></ion-icon>
          </button>
          <button
            className="btn color text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <ion-icon name="settings-outline"></ion-icon>
          </button>
        </div>
        <FormClient />
        <FormEditClient {...props}/>
        <Calendar {...props} />
      </div>
    </div>
  );
}

export default Navbar
