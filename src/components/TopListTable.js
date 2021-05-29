import React from 'react'
import { Table, Row } from 'react-bootstrap'
import Loader from './Loader'


const TopListTable = ({ countryCounts, countsFetched }) => {


	const topCountries = countryCounts.sort((a,b) => {
		if(a.TotalConfirmed < b.TotalConfirmed) {
			return 1
		}
		if(a.TotalConfirmed > b.TotalConfirmed) {
			return -1
		}
		return 0
	})


	return (

		<>
			<h3 className='mb-4'>Top Countries</h3>

			{!countsFetched ? <Loader /> : (
				<Row>
					<Table striped hover>
						<thead>
							<tr>
								<th></th>
								<th>Confirmed</th>
								<th>Recovered</th>
								<th>Deaths</th>
							</tr>
						</thead>
						<tbody>
							{ topCountries.slice(0,20).map(country => (
								<tr>
									<td>{country.Country}</td>
									<td>{country.TotalConfirmed.toLocaleString()}</td>
									<td>{country.TotalRecovered.toLocaleString()}</td>
									<td>{country.TotalDeaths.toLocaleString()}</td>
								</tr>
							)) }
						</tbody>
					</Table>
				</Row>
			)}
			
		</>

	)


}

export default TopListTable
