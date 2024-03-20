import { useState } from "react"

function Filter({filterVar,filterFunc}) {

    return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
    <li className="nav-item dropdown" style={{display:"inline-block"}}>
      Status Filter:
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{display:"inline-block",  backgroundColor:"#ff8084"}}
      >
        {filterVar}
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <a className="dropdown-item" href="#!" onClick={(event)=>filterFunc(event,'All')}>
            All
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#!" onClick={(event)=>filterFunc(event,'Completed')}>
            Completed
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#!" onClick={(event)=>filterFunc(event,'Not Completed')}>
            Not Completed
          </a>
        </li>
      </ul>
    </li>
  </ul>
  )
}

export default Filter