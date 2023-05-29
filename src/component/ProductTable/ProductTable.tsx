import ReactDOM from 'react-dom';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FaTrash } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { useAddItemToCartHooks } from '../../hooks/carts/addintoCart';
import { useDispatch } from 'react-redux';
import { decreaseCartCount, increaseCartCount } from '../../redux/reducer/cart/CartReducer';
import { useRemoveItemFromCart } from '../../hooks/carts/removeFromCart';
import { products } from '../../types';

const RenderTableRow = ({ product }) => {
  const [itemCount, setItemCount] = React.useState(10);
  const [isItemAddedToCart, setIsItemAddedToCart] = React.useState(false);
  const handleAddItemToCart = useAddItemToCartHooks();
  const handleRemoveItemFromCart = useRemoveItemFromCart();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const list = localStorage.getItem('cartData');

    if (list) {
      const cartList = JSON.parse(list);
      const item = cartList.find((item: any) => item.productId === product._id);
      if (item) {
        setItemCount(item.quantity);
        setIsItemAddedToCart(true)
      } else {
        setItemCount(10);
        setIsItemAddedToCart(false);
      }
    } else {
      setItemCount(10);
      setIsItemAddedToCart(false);
    }
  }, []);

  const handleItemCountChange = (value) => {
    const count = parseInt(value, 10);
    if (isNaN(count) || count < 1) {
      return;
    }
    setItemCount(value);
  }

  const handleAddtoCart = () => {
    const data = {
      ...product,
      productId: product._id,
      quantity: itemCount,
      bidAmount: product.price,
      price: product.price,
    }
    handleAddItemToCart(data);
    dispatch(increaseCartCount());
    setIsItemAddedToCart(true);
  }

  const handleRemoveFromCart = async () => {
    const data = {
      productId: product._id,
      removeProduct: 1
    };
    await handleRemoveItemFromCart(data);
    dispatch(decreaseCartCount());
    setIsItemAddedToCart(false);
    setItemCount(10);
  }

  return (
    <TableRow
      key={product._id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {product.engVegName}
      </TableCell>
      <TableCell align="center">{product.price} /(Kg)</TableCell>
      <TableCell align="center">{product.orderQuantity} /(Kg)</TableCell>
      <TableCell align="center">{product.unit.toUpperCase()}</TableCell>
      <TableCell align="center">
        <TextField
          id="standard-number"
          type="number"
          size='small'
          disabled={isItemAddedToCart}
          variant="standard"
          value={itemCount}
          onChange={(e) => handleItemCountChange(e.target.value)}
        />
      </TableCell>
      <TableCell align="center">
        <div className="col-10 ps-5">
          {
            isItemAddedToCart ?
              <Button variant="outlined" onClick={handleRemoveFromCart} fullWidth color="error" size='small' startIcon={<FaTrash />}>
                Remove
              </Button>
              :
              <Button className='ms-auto' onClick={handleAddtoCart} variant="outlined" fullWidth color="success" size='small' startIcon={<FaCartPlus />}>
                Add
              </Button>
          }
        </div>
      </TableCell>
    </TableRow>
  )
}



const ProductTable: React.FC<any> = ({ ProductList, setCurrPage, currPage }) => {
  const tableEl = React.useRef<any>()

  const scrollListener = () => {
    if(!tableEl.current){
      return
    }
    let bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight
    if (tableEl.current.scrollTop === bottom) {
      console.log('Reached bottom');
      setCurrPage(currPage + 1);
    }
  }

  React.useLayoutEffect(() => {
    const tableRef = tableEl.current
    tableRef.addEventListener('scroll', scrollListener)
    return () => {
      tableRef.removeEventListener('scroll', scrollListener)
    }
  }, [scrollListener]);

  return (
    <Paper className='mx-auto mt-4' style={{ height: '68vh', width: '95%', overflow: 'auto' }} ref={tableEl}>
      <TableContainer component={Paper} style={{ overflowX: "initial" }} >
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell width={320}>Product Name</TableCell>
              <TableCell width={160} align="center">Price/&nbsp;(Kg) </TableCell>
              <TableCell width={160} align="center">Min. Qty/&nbsp;(Kg)</TableCell>
              <TableCell width={160} align="center">Unit</TableCell>
              <TableCell width={160} align="center">Qty.</TableCell>
              <TableCell width={260} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {
              ProductList.map((product: any) => <RenderTableRow product={product} />)
            }
          </TableBody>
        </Table>

      </TableContainer>
    </Paper>

  )
}

export default ProductTable;