import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <p>This is from my EditExpensePage component</p>
      <p>Editing expense with id of {props.match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;