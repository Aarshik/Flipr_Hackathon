import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Scoreboard.css';
const useStyles = makeStyles({
  table: {
    minWidth: 300,
  
    
  },
});

function createData(player, runs) {
  return { player,runs };
}

const rows = [
  createData('Player1', 15),
  createData('Player2', 31),
  createData('Player3', 22),
  createData('Player4', 54),
  createData('Player5', 45),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div className="table_container" >
<h2>SCOREBOARD</h2>
    
    <TableContainer className="tables" component={Paper}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Runs</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell  component="th" scope="row">
                {row.player}
              </TableCell>
              <TableCell>{row.runs}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
