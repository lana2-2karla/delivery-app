import { useEffect, useState } from 'react';
import axios from 'axios';

function SelectInput() {
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');

  useEffect(() => {
    const fetchSellers = async () => {
      const response = await axios
        .get('http://localhost:3001/user/sellers');

      setSellers(response.data);
    };

    fetchSellers();
  }, [setSellers]);

  const handleChange = ({ target }) => {
    setSelectedSeller(target.value);
  };

  return (

    <select
      id="sellerSelect"
      value={ selectedSeller }
      label="P. Vendedora Responsável"
      data-testid="customer_checkout__select-seller"
      onChange={ handleChange }
    >
      {sellers
        .map(({ name, id }) => (
          <option id={ id } key={ id } value={ name }>{name}</option>
        ))}
    </select>
  );
}

export default SelectInput;
