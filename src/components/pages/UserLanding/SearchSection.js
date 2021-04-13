import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchCityData } from '../../../state/actions/cityData';

import { Input, Space } from 'antd';

const SearchSection = () => {
  const { push } = useHistory();

  const [searchValue, setSearchValue] = useState('');

  // Split search value right by the common
  const splitSearchValue = searchValue.toLowerCase().split(', ');

  // Set the split value to city and state
  const cityAndState = {
    city: splitSearchValue[0],
    state: splitSearchValue[1],
  };

  const { Search } = Input;

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    fetchCityData(cityAndState);
    push(`/${cityAndState.state}/${cityAndState.city}`);
    setSearchValue('');
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search">
          <h1>Aspire to your dream home</h1>
          <div className="search-form">
            <Space>
              <Search
                placeholder="Enter City, State"
                allowClear
                onSearch={() => onSubmit()}
                value={searchValue.city}
                onChange={handleChange}
                size="large"
                style={{ width: 700 }}
              />
            </Space>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
