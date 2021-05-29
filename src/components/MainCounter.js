import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Card } from 'react-bootstrap'
import Loader from './Loader'


const MainCounter = ({ worldCounts, countryCounts, countsFetched }) => {


	

	const [countries, setCountries] = useState([])
	const [country, setCountry] = useState('world')
	const [results, setResults] = useState('new')

	const [newConfirmed, setNewConfirmed] = useState(0)
	const [newRecovered, setNewRecovered] = useState(0)
	const [newDeaths, setNewDeaths] = useState(0)

	const [confirmed, setConfirmed] = useState(0)
	const [recovered, setRecovered] = useState(0)
	const [deaths, setDeaths] = useState(0)




	const fetchCountries = async () => {

		const res = await fetch('https://api.covid19api.com/countries')
		const data = await res.json()

		data.sort((a,b) => {
			if(a.Country < b.Country) {
				return -1
			}
			if(a.Country > b.Country) {
				return 1
			}
			return 0
		})
		setCountries(data)

	}


	useEffect(() => {


		const showCounts = async (country) => {

			if(country === 'world') {
	
	
				setNewConfirmed(worldCounts.NewConfirmed)
				setNewRecovered(worldCounts.NewRecovered)
				setNewDeaths(worldCounts.NewDeaths)
				setConfirmed(worldCounts.TotalConfirmed)
				setRecovered(worldCounts.TotalRecovered)
				setDeaths(worldCounts.TotalDeaths)
	
			} else {
	
				const countryData = countryCounts.find(foundCountry => foundCountry.Slug === country)
	
				if(countryData) {
					setNewConfirmed(countryData.NewConfirmed)
					setNewRecovered(countryData.NewRecovered)
					setNewDeaths(countryData.NewDeaths)
					setConfirmed(countryData.TotalConfirmed)
					setRecovered(countryData.TotalRecovered)
					setDeaths(countryData.TotalDeaths)
				} else {
					setNewConfirmed(0)
					setNewRecovered(0)
					setNewDeaths(0)
					setConfirmed(0)
					setRecovered(0)
					setDeaths(0)
				}
			}
		}



		
		if(countsFetched) {
			showCounts(country)
		} else {
			fetchCountries()
		}
		
	}, [country, countsFetched, worldCounts, countryCounts])


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
				<Col xs={2}></Col>

				<Col xs={2}>
					<Form.Label htmlFor="results"><strong>Show results for:</strong></Form.Label>
				</Col>
				<Col>
					<Form.Check inline label='New' name='results' type='radio' value='new' checked={results === 'new'} onChange={(e) => setResults(e.target.value)} ></Form.Check>
					<Form.Check inline label='All-Time' name='results' type='radio' value='all-time' checked={results === 'all-time'} onChange={(e) => setResults(e.target.value)} ></Form.Check>
				</Col>
			</Row>


			<Row className='my-4'>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-user-plus text-warning'></i> Confirmed</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{!countsFetched ? <Loader /> : results === 'new' ? newConfirmed.toLocaleString() : confirmed.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-heartbeat text-success'></i> Recovered</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{!countsFetched ? <Loader /> : results === 'new' ? newRecovered.toLocaleString() : recovered.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="mb-2">
						<Card.Header><i className='fas fa-skull-crossbones text-primary'></i> Deaths</Card.Header>
						<Card.Body className='py-4 text-center'>
							<Card.Title>{!countsFetched ? <Loader /> : results === 'new' ? newDeaths.toLocaleString() : deaths.toLocaleString()}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}



export default MainCounter