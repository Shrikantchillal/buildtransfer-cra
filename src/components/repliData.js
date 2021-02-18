import { Table, TableHead, TableCell, TableContainer, TableBody, TableRow } from '@material-ui/core';
import React from 'react';

const repliData = (props) => {
    const {listData} = props;
    if(!listData) return null;
    if(!listData.length === 0) return <p>No repos, sorry</p>;
    return (
        <div>
            {JSON.stringify(listData, null, 2)}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data Route</TableCell>
                            <TableCell>Servers</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listData.map(() => {
                            <TableRow>
                                <TableCell></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default repliData;