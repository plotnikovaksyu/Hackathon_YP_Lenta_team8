import './2ndscreen.css'
import LineChart from '../LineChart/LineChart';
import TableChart from '../TableChart/TableChart';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function SecondScreen() {
    return (
        <>
            <Navbar />
            <div className='secondscreen'>
                <Header></Header>
                <LineChart></LineChart>
                <TableChart></TableChart>
            </div>
        </>
    )
}

export default SecondScreen