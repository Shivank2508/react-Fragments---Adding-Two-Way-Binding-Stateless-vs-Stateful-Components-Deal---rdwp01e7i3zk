import React from 'react';
import ListItems from './ListItems';

const List = ({ listx }) => {
  console.log(listx)
  return (
    // code here


    listx.map((item) => (
      <ListItems valuex={item} />
      //console.log(item);
    ))

    // < ListItems valuex={listx} />



  )
}

export default List;