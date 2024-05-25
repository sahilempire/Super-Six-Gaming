import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/data');
      setData(result.data);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Credit Score</th>
            <th>Credit Lines</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.creditScore}</td>
              <td>{item.creditLines}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} />
    </div>
  );
};

export default DataTable;
