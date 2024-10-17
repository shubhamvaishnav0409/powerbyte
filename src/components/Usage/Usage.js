import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Usage(props) {

  return (
    <>
      <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
          <h1 className='h2'>Energy Consumption</h1>
          <div className='btn-toolbar mb-2 mb-md-0'>
            <div className='btn-group me-2'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                Share
              </button>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'
              >
                Export
              </button>
            </div>
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary dropdown-toggle'
            >
              <span
                data-feather='calendar'
                className='align-text-bottom'
              ></span>
              This week
            </button>
          </div>
        </div>

        {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

        <div className='container-fluid'>
          <h3 className='graph-design'>Recent Usage Trend</h3>
          <div className="card">
            <div className="card-body d-flex">
              <Link to="/panel/usage/zone_A" className="card border-secondary nav-link">
                <h5>Zone-A</h5>
              </Link>
              <Link to="/panel/usage/zone_B" className="card border-secondary nav-link">
                <h5>Zone-B</h5>
              </Link>
              <Link to="/panel/usage/zone_C" className="card border-secondary nav-link">
                <h5>Zone-C</h5>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
