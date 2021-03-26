import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search">
          <h1>Aspire to your dream home</h1>
          <div className="search-form">
            <Space>
              <Search
                placeholder="Enter City, State, Zip Code"
                onSearch={onSearch}
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
