import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { format } from 'date-fns'

const Topbar = () => {

	const [timestamp, setTimestamp] = useState(Date.now())
	const counter = setInterval(() => {
		setTimestamp(Date.now())
	}, 1000)


	useEffect(() => {
		return () => {
			clearInterval(counter)
		}
	})


	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>
					COVID Tracker
				</Navbar.Brand>

				<Navbar.Text>
					{format(timestamp, 'PPpp')}
				</Navbar.Text>
			</Container>
		</Navbar>
	)
}


export default Topbar