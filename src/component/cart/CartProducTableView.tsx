import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputNumber, Space } from 'antd';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { TableFooter } from '@mui/material';

function Row({ row, handleRemoveCart, handleBidAmountChange, handleItemCountChange }) {
    //   const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [ItemQuantity, setItemQuantity] = React.useState(row.quantity);
    const [bidAmount, setBidAmount] = React.useState(row.bidAmount);

    const onChangeQuantity = (value: number) => {
        setItemQuantity(value);
        handleItemCountChange(row, value);
    };
    const onChangeBidPrice = (value: number) => {
        setBidAmount(value);
        handleBidAmountChange(row, value);
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.vegName}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                    <InputNumber
                        type={'number'}
                        min={1}
                        max={100000}
                        value={ItemQuantity}
                        onChange={onChangeQuantity}
                    />
                </TableCell>
                <TableCell align="center">
                    <InputNumber
                        type={'number'}
                        min={1}
                        max={row.price}
                        value={bidAmount}
                        defaultValue={3}
                        onChange={onChangeBidPrice}
                    />
                </TableCell>
                <TableCell align="center">
                    <IconButton color="error" component="label" onClick={() => handleRemoveCart(row)}>
                        <DeleteIcon color='error' />
                    </IconButton>
                </TableCell>
                {/* <TableCell align="center">{row.protein}</TableCell> */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Price Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Types</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Total (€)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Seller Price
                                        </TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{ItemQuantity}</TableCell>
                                        <TableCell align="center">
                                            {`${(row.price * ItemQuantity).toFixed(2)}`}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Bid Price
                                        </TableCell>
                                        <TableCell align="center">{bidAmount}</TableCell>
                                        <TableCell align="center">{ItemQuantity}</TableCell>
                                        <TableCell align="center">
                                            {`${(bidAmount * ItemQuantity).toFixed(2)}`}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CartProductTableView({
    cartList,
    handleRemoveCart,
    handleBidAmountChange,
    handleItemCountChange,
}) {
    return (
        <Paper className='mx-auto mt-4 shadow shadow-bottom-0' style={{ height: '50vh', overflow: 'auto' }}>
            <TableContainer component={Paper} style={{ overflowX: "initial" }}>
                <Table stickyHeader={true} sx={{ minWidth: 500 }} aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Product Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Bid Price</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartList.map((row: any) => (
                            <Row
                                key={row._id} row={row}
                                handleRemoveCart={handleRemoveCart}
                                handleBidAmountChange={handleBidAmountChange}
                                handleItemCountChange={handleItemCountChange}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}