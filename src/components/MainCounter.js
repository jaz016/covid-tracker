import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'


const MainCounter = () => {


	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState('world')
	const [results, setResults] = useState('today')

	const [activeCases, setActiveCases] = useState(null)

	const [newConfirmed, setNewConfirmed] = useState(0)
	const [newRecovered, setNewRecovered] = useState(0)
	const [newDeaths, setNewDeaths] = useState(0)

	const [confirmed, setConfirmed] = useState(0)
	const [recovered, setRecovered] = useState(0)
	const [deaths, setDeaths] = useState(0)




	const fetchCountries = async () => {

		const res = await fetch('https://api.covid19api.com/countries')
		const data = await res.json()

		setCountries(data)

	}



	const showCounts = async (country) => {

		const res = await fetch('https://api.covid19api.com/summary')
		const { Global } = await res.json()

		setNewConfirmed(Global.NewConfirmed)
		setNewRecovered(Global.NewRecovered)
		setNewDeaths(Global.NewDeaths)
		setConfirmed(Global.TotalConfirmed)
		setRecovered(Global.TotalRecovered)
		setDeaths(Global.TotalDeaths)

	}



	useEffect(() => {
		fetchCountries()
		showCounts()
	}, [])


	return (
		<>
			<Row className='my-4'>
				<Col xs={1}>
					<Form.Label htmlFor="world"><strong>Country:</strong></Form.Label>
					</Col>
				<Col xs={3}>
					<Form.Control as="select" custom onChange={(e) => setCountry(e.target.value)}>
						<option value='world'>World</option>
						{
							countries.map(country => (
								<option key={country.Slug} value={country.Slug}>{country.Country}</option>
							))
						}
					</Form.Control>
				</Col>
				<Col xs={1}></Col>
				<Col><strong>Active Cases:</strong> {activeCases}</Col>
				<Col xs={2}>
					<Form.Label htmlFor="results"><strong>Show results for:</strong></Form.Label>
				</Col>
				<Col>
					<Form.Check inline label='Today' name='results' type='radio' value='today' checked={results === 'today'} onChange={(e) => setResults(e.target.value)} ></Form.Check>
					<Form.Check inline label='All-Time' name='results' type='radio' value='all-time' checked={results === 'all-time'} onChange={(e) => setResults(e.target.value)} ></Form.Check>
				</Col>
			</Row>


			<Row className='my-4'>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-user-plus text-warning'></i> Confirmed</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{results === 'today' ? newConfirmed.toLocaleString() : confirmed.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-heartbeat text-success'></i> Recovered</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{results === 'today' ? newRecovered.toLocaleString() : recovered.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-skull-crossbones text-primary'></i> Deaths</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{results === 'today' ? newDeaths.toLocaleString() : deaths.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}



export default MainCounter