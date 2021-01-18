import React, { useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';

const Table = props => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'criminal', headerName: 'Criminal', width: 70 },
    { field: 'date', headerName: 'Data', width: 70 },
    { field: 'victims', headerName: 'Vitímas', width: 70 },
    { field: 'country', headerName: 'Países', width: 70 },
  ]
  let data = props.data

  return(
    <>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </>
  )
}

export default Table