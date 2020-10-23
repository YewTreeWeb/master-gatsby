import React from 'react'
import { Link, navigate } from 'gatsby'

/*
// Example of navigate function as alternative to Link
const goToSliceMasters = () => {
	// 1. Wait for 2 seconds
	setTimeout(() => {
		console.log('Go to slicemasters');
		navigate('/slicemasters', { replace: true })
	}, 2000);
	// 2. Change the page
}
*/

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Hot now</Link>
        </li>
        <li>
          <Link to='/pizzas'>Pizza Menu</Link>
        </li>
        <li>
          <Link to='/'>LOGO</Link>
        </li>
        <li>
          <Link to='/slicemasters'>SliceMasters</Link>
        </li>
        <li>
          <Link to='/orders'>Order Ahead!</Link>
        </li>
        {/* <li>
          <button type="button" onClick={goToSliceMasters}>
            Click me to see slicemasters after 2 seconds
          </button>
        </li> */}
      </ul>
    </nav>
  )
}
