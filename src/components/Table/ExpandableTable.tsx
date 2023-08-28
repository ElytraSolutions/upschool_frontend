import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Button,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface Props {
    data: RowData[];
}

interface RowData {
    question: string;
    answer: React.ReactNode;
}

function ExpandableTable(props: Props) {
    const [expandedRows, setExpandedRows] = useState<number[]>([]);
    const { data } = props;

    const toggleRow = (index: number) => {
        if (expandedRows.includes(index)) {
            setExpandedRows(expandedRows.filter((row) => row !== index));
        } else {
            setExpandedRows([...expandedRows, index]);
        }
    };

    const isRowExpanded = (index: number) => expandedRows.includes(index);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {data.map((row, index) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        color: '#242254',
                                        fontSize: '18px',
                                        letterSpacing: '1px',
                                        lineHeight: '24px',
                                        fontWeight: 400,
                                        fontFamily: 'lexend',
                                    }}
                                >
                                    {row.question}
                                    <Button
                                        variant="text"
                                        onClick={() => toggleRow(index)}
                                        startIcon={
                                            isRowExpanded(index) ? (
                                                <ExpandLess
                                                    style={{ color: '#242254' }}
                                                />
                                            ) : (
                                                <ExpandMore
                                                    style={{ color: '#242254' }}
                                                />
                                            )
                                        }
                                    ></Button>
                                </TableCell>
                            </TableRow>
                            {isRowExpanded(index) && (
                                <TableRow>
                                    <TableCell
                                        colSpan={3}
                                        className="bg-[#f4f4f4]  transition-all duration-300 ease-in-out "
                                        style={{
                                            color: '#242254',
                                            fontSize: '14px',
                                            letterSpacing: '1px',
                                            lineHeight: '24px',
                                            fontWeight: 400,
                                            fontFamily: 'lexend',
                                        }}
                                    >
                                        {row.answer}
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ExpandableTable;
