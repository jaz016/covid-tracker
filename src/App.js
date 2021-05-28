import { Container } from 'react-bootstrap'
import Topbar from './components/Topbar'
import MainCounter from './components/MainCounter'
import TopListTable from './components/TopListTable'
import Footer from './components/Footer'

function App() {
  return (
    <>

      <Topbar />


      <main className='mt-5 mb-3'>
        <Container>


          <MainCounter />
          <TopListTable />
          

        </Container>
      </main>


      <Footer />
    </>
  );
}

export default App;
