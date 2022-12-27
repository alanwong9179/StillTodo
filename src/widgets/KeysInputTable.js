import React, { useRef } from "react";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TextField,
} from "@mui/material";
import { grey } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function KeysInputTable({newKeyObj, setNewKeyObj}) {

  return (
    <TableContainer >
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell>
          <TextField fullWidth multiline rows={4} onChange={(e)=>{setNewKeyObj({...newKeyObj, desc: e.target.value})}}/>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>
            <TextField fullWidth onChange={(e)=>{setNewKeyObj({...newKeyObj, id: e.target.value})}}/>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Password</TableCell>
          <TableCell>
            <TextField fullWidth onChange={(e)=>{setNewKeyObj({...newKeyObj, password: e.target.value})}}/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  );
}
