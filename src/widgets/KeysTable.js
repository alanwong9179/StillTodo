import React from "react";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TextField,
  Paper,
  TableHead,
} from "@mui/material";

export default function KeysTable({ keys }) {
  return (
    <TableContainer component={Paper} elevation={6}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys.map((k) => (
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  multiline
                  rows={1}
                  value={k.desc}
                  disabled
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(k.id);
                  }}
                  fullWidth
                  sx={{ lineHeight: 5, textTransform: "none" }}
                >
                  {k.id}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(k.password);
                  }}
                  fullWidth
                  sx={{ lineHeight: 5, textTransform: "none" }}
                >
                  {k.password}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
