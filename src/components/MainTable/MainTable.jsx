import './MainTable.css';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';


function MainTable({ columns, rows, label }) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (evt, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (evt) => {
    setRowsPerPage(+evt.target.value);
    setPage(0);
  };


  return (
    <section className='section__table' id='section__table'>
      <Paper >
        <TableContainer sx={{ maxWidth: '1720px', height: '452px', boxShadow: 'none' }} component={Paper}>
          <Table stickyHeader size='medium' aria-label={label}>
            <TableHead sx={{ zIndex: '0' }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ fontFamily: 'FUTURA PT', fontWeight: '400', fontSize: '18px', lineHeight: '130%', color: '#2C2A29' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}
                          sx={{ fontFamily: 'FUTURA PT', fontWeight: '300', fontSize: '18px', lineHeight: '130%', color: '#2C2A29' }}
                        >
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Количество строк:'
          labelDisplayedRows={({ to, count }) => `из ${count !== -1 ? count : `more than ${to}`}`}
        />
      </Paper>
    </section>
  );
}

export default MainTable;