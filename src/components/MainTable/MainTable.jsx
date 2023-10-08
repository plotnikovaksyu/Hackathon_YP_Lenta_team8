import './MainTable.css'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';


  function createData(shop, group, category, subcategory, SKU, product, unit, units, day1) {
    return { shop, group, category, subcategory, SKU, product, unit, units, day1 };
  }

  const rows = [
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434691', 'Булочка с маком', 'шт', 65, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434692', 'Булочка с повидлом', 'шт', 93, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434693', 'Булочка с кунжутом', 'шт', 75, 5),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434694', 'Булочка с творогом', 'шт', 74, 12),
    createData(123, 'Хлеб', 'Хлеб мелкоштучный', 'Булочки', '434695', 'Булочка с семенами льна', 'шт', 93, 5),
  ];

function MainTable() {

  return (
    <section className='section__table'>
    <TableContainer sx={{maxWidth:'1780px', height:'452px', boxShadow:'none'}} component={Paper}>
      <Table size='medium' aria-label="прогноз спроса">
        <TableHead>
          <TableRow sx={{}}>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%'}}>ТК</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%'}} align="right">Группа</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%'}} align="right">Категория</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">Подкатегория</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">SKU</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">Товар</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">Ед.изм.</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">Всего,&nbsp;ед.изм.</TableCell>
            <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'450', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">День 1</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.shop}>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} component="th" scope="row">
                {row.shop}
              </TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.group}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.category}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.subcategory}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.SKU}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.product}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.unit}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.units}</TableCell>
              <TableCell sx={{fontFamily:'FUTURA PT', fontWeight:'300', fontSize:'18px', lineHeight:'130%', color:'#2C2A29'}} align="right">{row.day1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  );
}

export default MainTable;