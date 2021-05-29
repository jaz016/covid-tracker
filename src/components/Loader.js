import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
	return (
		<>
			<Spinner animation="grow" size='sm'/>{' '}
			<Spinner animation="grow" size='sm'/>{' '}
			<Spinner animation="grow" size='sm'/>{' '}
		</>
	)
}

export default Loader
