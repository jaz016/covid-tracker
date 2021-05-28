import React from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'


const MainCounter = () => {
	return (
		<>
			<Row className='my-4'>
				<Col xs={1}>
					<Form.Label htmlFor="world"><strong>Country:</strong></Form.Label>
					</Col>
				<Col xs={3}>
					<Form.Control as="select" custom>
						<option value='world'>World</option>
						<option value='usa'>USA</option>
						<option value='india'>India</option>
					</Form.Control>
				</Col>
				<Col xs={1}></Col>
				<Col><strong>Active Cases:</strong> 5,325</Col>
				<Col xs={2}>
					<Form.Label htmlFor="results"><strong>Show results for:</strong></Form.Label>
				</Col>
				<Col>
					<Form.Check inline label='Today' name='results' type='radio'></Form.Check>
					<Form.Check inline label='All-Time' name='results' type='radio'></Form.Check>
				</Col>
			</Row>


			<Row className='my-4'>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-user-plus text-warning'></i> Confirmed</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>3,503</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-heartbeat text-success'></i> Recovered</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>3,503</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-skull-crossbones text-primary'></i> Deaths</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>3,503 </Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}



export default MainCounter