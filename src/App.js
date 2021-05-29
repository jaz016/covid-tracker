import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Topbar from './components/Topbar'
import MainCounter from './components/MainCounter'
import TopListTable from './components/TopListTable'
import Footer from './components/Footer'

function App() {


  const [worldCounts, setWorldCounts] = useState({})
	const [countryCounts, setCountryCounts] = useState([])
	const [countsFetched, setCountsFetched] = useState(false)


  const fetchAllCounts = async () => {

		const res = await fetch('https://api.covid19api.com/summary')
		const { Global, Countries } = await res.json()

		setWorldCounts(Global)
		setCountryCounts(Countries)
		setCountsFetched(true)

	}



  useEffect(() => {
    if(!countsFetched) {
			fetchAllCounts()
    }
  }, [countsFetched])


  return (
    <>

      <Topbar />


      <main className='mt-5 mb-3'>
        <Container>


          <MainCounter worldCounts={worldCounts} countryCounts={countryCounts} countsFetched={countsFetched} />
          <TopListTable countryCounts={countryCounts} countsFetched={countsFetched} />
          

        </Container>
      </main>


      <Footer />
    </>
  );
}

export default App;
