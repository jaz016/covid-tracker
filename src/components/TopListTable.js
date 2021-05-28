import React from 'react'
import { Table, Row } from 'react-bootstrap'

const TopListTable = () => {
	return (
		<>


			<h1 className='mb-4'>Top Countries</h1>

			<Row>
				<Table striped hover>
					<thead>
					<tr>
						<th>Country</th>
						<th>Confirmed</th>
						<th>Recovered</th>
						<th>Deaths</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>USA</td>
						<td>133,403</td>
						<td>101,503</td>
						<td>59,507</td>
					</tr>
					<tr>
						<td>India</td>
						<td>133,403</td>
						<td>101,503</td>
						<td>59,507</td>
					</tr>
					<tr>
						<td>Brazil</td>
						<td>133,403</td>
						<td>101,503</td>
						<td>59,507</td>
					</tr>
					</tbody>
				</Table>
			</Row>

		</>
	)
}

export default TopListTable
