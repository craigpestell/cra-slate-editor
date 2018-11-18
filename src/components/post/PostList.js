import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const getCaret = direction => {
  if (direction === 'asc') {
    return (
      <span>
        {' '}
        <i className="fa fa-sort-asc" aria-hidden="true" />
      </span>
    );
  }

  if (direction === 'desc') {
    return (
      <span>
        {' '}
        <i className="fa fa-sort-desc" aria-hidden="true" />
      </span>
    );
  }

  return (
    <span>
      {' '}
      <i className="fa fa-sort" aria-hidden="true" />
    </span>
  );
};

const titleFormatter = (cell, row) => {
  const url = `/post/${row._id}`;
  return <Link to={url}>{cell}</Link>;
};

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      sortIndicator: true,
      noDataText: 'No data',
    };

    this.selectRowProp = {
      mode: 'radio',
      bgColor: '#c1f291',
      onSelect: props.handleRowSelect,
      clickToSelect: true,
      hideSelectColumn: true,
    };
  }

  render() {
    return (
      <BootstrapTable
        data={this.props.posts}
        selectRow={this.selectRowProp}
        options={this.options}
        bordered={false}
        striped
        hover
        condensed
      >
        <TableHeaderColumn dataField="_id" isKey hidden>
          Id
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField="title"
          dataFormat={titleFormatter}
          dataSort={true}
          caretRender={getCaret}
          filter={{ type: 'TextFilter', delay: 0 }}
          columnTitle
        >
          Title
        </TableHeaderColumn>

      </BootstrapTable>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  handleRowSelect: PropTypes.func.isRequired,
};

export default PostList;
