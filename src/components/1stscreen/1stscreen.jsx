import './1stscreen.css'
import Header from '../Header/Header';
import LineChart from '../LineChart/LineChart';
import TableChart from '../TableChart/TableChart';

function FirstScreen() {
    return (
        <>
            <div className='firstscreen'>
                <Header></Header>
                <LineChart></LineChart>
                <TableChart></TableChart>
            </div>
        </>

    )
}

export default FirstScreen