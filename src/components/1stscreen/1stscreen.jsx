import './1stscreen.css'
import Header from '../Header/Header';
import LineChart from '../LineChart/LineChart';
import TableChart from '../TableChart/TableChart';
import MainTable from '../MainTable/MainTable';
import Navbar from '../Navbar/Navbar';

function FirstScreen() {
    return (
        <>
            <Navbar />
            <div className='firstscreen'>
                <Header></Header>
                <LineChart></LineChart>
                <TableChart></TableChart>
                <MainTable></MainTable>
            </div>
        </>

    )
}

export default FirstScreen