import React, { Component } from "react";
import PropTypes from "prop-types";
import Condition from "../../ui/Condition";
import AddButton from "../../ui/AddButton";
import TaskDialogForm from "../../ui/TaskDialogForm/container";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Notification from "../../ui/Notification";

class TaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props.loadTasks(this.props.options);
  }

  render() {
    const {
      loading,
      data,
      options,
      totalPageCount,
      openNewTaskDialog,
      openEditTaskDialog,
      changeSorted,
      changePage,
      isLogin,
      isShowNotification,
      showNotification
    } = this.props;

    const columns = [
      {
        Header: "Name",
        accessor: "username",
        width: 200
      },
      {
        Header: "Email",
        accessor: "email",
        width: 300
      },
      {
        Header: "Text",
        accessor: "text",
        sortable: false
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: props => <Condition status={props.value} />,
        width: 200
      }
    ];

    return (
      <div>
        {isShowNotification && <Notification onShow={showNotification} />}
        <ReactTable
          getTrProps={(state, rowInfo, column) => {
            return {
              className: "cursor-pointer",
              onClick: () => {
                if (rowInfo && isLogin) {
                  openEditTaskDialog(rowInfo.original);
                }
              }
            };
          }}
          loading={loading}
          data={data}
          columns={columns}
          pages={totalPageCount}
          page={options.page}
          defaultPageSize={3}
          resizable={false}
          showPageSizeOptions={false}
          className="-striped -highlight"
          onPageChange={pageIndex => {
            changePage(pageIndex);
          }}
          onSortedChange={newSorted => {
            changeSorted(newSorted);
          }}
          manual
        />
        <AddButton onClick={openNewTaskDialog} />
        <TaskDialogForm />
      </div>
    );
  }
}

TaskPage.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  options: PropTypes.object,
  totalPageCount: PropTypes.number,
  loadTasks: PropTypes.func,
  openNewTaskDialog: PropTypes.func,
  openEditTaskDialog: PropTypes.func,
  changeSorted: PropTypes.func,
  changePage: PropTypes.func,
  isLogin: PropTypes.bool
};

export default TaskPage;
