import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function TableTitle() {
  return (
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell align="right">Descrição</TableCell>
      <TableCell align="right">Quantidade</TableCell>
      <TableCell align="right">Valor Unitário</TableCell>
      <TableCell align="right">Sub-Total</TableCell>
    </TableRow>
  );
}
