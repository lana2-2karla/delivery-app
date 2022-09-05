import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button,
  Box,
  Table,
  TableContainer,
  FormControl } from '@mui/material';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import NavBarClient from '../../components/NavBarClient';
import TableItemsHead from '../../components/tables/TableItemsHead';
import TableItemsBody from '../../components/tables/TableItemsBody';
import SelectInput from '../../components/forms/SelectInput';
import Context from '../../context/Context';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const { subTotal, setSubTotal } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem('cart')) ?? [];

    const fetchSellers = async () => {
      const response = await axios
        .get('http://localhost:3001/user/sellers');

      setSellers(response.data);
    };

    fetchSellers();
    setProducts(productsList);
    const sumTotal = (items) => {
      const subtotal = items
        .reduce((acc, cur) => (acc + Number(cur.price) * cur.quantity), 0)
        .toFixed(2)
        .replace('.', ',');

      setSubTotal(subtotal);
    };
    sumTotal(productsList);
  }, [setProducts, setSubTotal]);

  const modelOrder = () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const user = jwtDecode(token);
    return {
      userId: user.id,
      totalPrice: Number(subTotal.replace(',', '.')),
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      products,
    };
  };

  const getSelectedSeller = (seller) => sellers.find((slr) => slr.name === seller);

  const finishOrder = async (sellerName) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const seller = getSelectedSeller(sellerName);
    const data = modelOrder();
    data.sellerId = seller.id;

    const http = axios.create({
      baseURL: 'http://localhost:3001/customer/',
      headers: { Authorization: token },
    });

    const response = await http.post('/orders', data);
    console.log(response);
    return response.data;
  };

  const handleFinishOrder = async (e) => {
    const sellerName = e.target.parentElement.parentElement.firstChild.firstChild.value;
    const order = await finishOrder(sellerName);
    localStorage.removeItem('cart');
    navigate(`/customer/orders/${order.id}`);
  };

  return (
    <section>
      <NavBarClient />
      <div>
        <h2>Finalizar Produto</h2>
        <TableContainer>
          <Table sx={ { minWidth: 650 } } aria-label="simple table">
            <TableItemsHead />
            <TableItemsBody items={ products } />
          </Table>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            paddingTop="30px"
            paddingRight="30px"
          >
            <Button
              variant="contained"
              color="success"
              data-testid="customer_checkout__element-order-total-price"
            >
              { subTotal }
            </Button>
          </Box>
        </TableContainer>
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <FormControl fullWidth>
          <Box
            component="form"
            sx={ {
              '& > :not(style)': { m: 1, width: '25ch' },
            } }
            noValidate
            autoComplete="off"
          >
            <SelectInput />
            <input
              type="text"
              id="deliveryAddress"
              label=""
              variant="outlined"
              data-testid="customer_checkout__input-address"
              onChange={ (e) => setAddress(e.target.value) }
            />
            <input
              type="text"
              id="deliveryNumber"
              label="Delivery Number"
              variant="outlined"
              data-testid="customer_checkout__input-addressNumber"
              onChange={ (e) => setAddressNumber(e.target.value) }

            />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="success"
              data-testid="customer_checkout__button-submit-order"
              onClick={ handleFinishOrder }
            >
              Finalizar Pedido
            </Button>
          </Box>
        </FormControl>
      </div>
    </section>
  );
}

export default Checkout;
