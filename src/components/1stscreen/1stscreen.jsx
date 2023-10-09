import './1stscreen.css'
import Header from '../Header/Header';
import LineChart from '../LineChart/LineChart';
import TableChart from '../TableChart/TableChart';
import MainTable from '../MainTable/MainTable';
import Navbar from '../Navbar/Navbar';
// import PopupWithTk from '../PopupTK/PopupWithTk';


const columns = [
    { id: 'shop', label: 'ТК', minWidth: 50 },
    { id: 'group', label: 'Группа', minWidth: 100 },
    { id: 'category', label: 'Категория', minWidth: 100 },
    { id: 'subcategory', label: 'Подкатегория', minWidth: 100 },
    { id: 'SKU', label: 'SKU', minWidth: 100 },
    { id: 'product', label: 'Товар', minWidth: 100 },
    { id: 'unit', label: 'Ед.изм.', minWidth: 100 },
    { id: 'units', label: 'Всего, ед.изм.', minWidth: 100 },
    { id: 'day1', label: 'День 1', minWidth: 100, align: 'center' },
    { id: 'day2', label: 'День 2', minWidth: 100, align: 'center' },
    { id: 'day3', label: 'День 3', minWidth: 100, align: 'center' },
    { id: 'day4', label: 'День 4', minWidth: 100, align: 'center' },
    { id: 'day5', label: 'День 5', minWidth: 100, align: 'center' },
    { id: 'day6', label: 'День 6', minWidth: 100, align: 'center' },
    { id: 'day7', label: 'День 7', minWidth: 100, align: 'center' },
    { id: 'day8', label: 'День 8', minWidth: 100, align: 'center' },
    { id: 'day9', label: 'День 9', minWidth: 100, align: 'center' },
    { id: 'day10', label: 'День 10', minWidth: 100, align: 'center' },
    { id: 'day11', label: 'День 11', minWidth: 100, align: 'center' },
    { id: 'day12', label: 'День 12', minWidth: 100, align: 'center' },
    { id: 'day13', label: 'День 13', minWidth: 100, align: 'center' },
    { id: 'day14', label: 'День 14', minWidth: 100, align: 'center' },
]

function createData(shop, group, category, subcategory, SKU, product, unit, units, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14) {
    return { shop, group, category, subcategory, SKU, product, unit, units, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14 };
}



const rows = [
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5),
];


function FirstScreen() {
    return (
        <>
            <Navbar />
            <div className='firstscreen'>
                {/* <PopupWithTk></PopupWithTk> */}
                <Header></Header>
                <LineChart></LineChart>
                <TableChart title='График спроса на 14 дней'></TableChart>
                <MainTable columns={columns} rows={rows} label='прогноз спроса'></MainTable>
            </div>
        </>

    )
}

export default FirstScreen