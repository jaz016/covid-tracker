import { format } from 'date-fns'
import React from 'react'


const Footer = () => {
	return (
		<footer className='mt-5 mb-4 text-center'>
			<p>Powered by <a href='https://reactjs.org/'><strong>React</strong></a> and <a href='https://covid19api.com/'><strong>covid19api.com</strong></a></p>
			<p>Copyright &copy; {format(Date.now(), 'yyyy')} COVID Tracker</p>
		</footer>
	)
}


export default Footer