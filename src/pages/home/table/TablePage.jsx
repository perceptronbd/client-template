import React from 'react';
import { Table } from '../../../components/table/Table';
import { ListTable } from '../../../components/table/ListTable';
import { StockTable } from '../../../components';

const TablePage = () => {
  const generateMockData = () => {
    const data = [];

    // Generate 10 mock items
    for (let i = 1; i <= 10; i++) {
      data.push({
        sn: i,
        name: `Product ${i}`,
        imgUrl: `https://example.com/image${i}.jpg`,
        sales_price: Math.floor(Math.random() * 100) + 50, // Random price between 50 and 150
        csb: Math.floor(Math.random() * 10) + 1, // Random number between 1 and 10 for CSB
        points: Math.floor(Math.random() * 1000) + 100, // Random number between 100 and 1100 for points
        description: `Description for Product ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      });
    }

    return data;
  };
  return (
    <div>
      <div id="table">
        <Table data={generateMockData()} />
      </div>
      <div id="list-table">
        <ListTable data={generateMockData()} />
      </div>
      <div id="stock-table">
        <StockTable data={generateMockData()} />
      </div>
    </div>
  );
};

export default TablePage;
