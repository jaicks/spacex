import React, { Component, Fragment } from "react";
import { historyList } from "../actions/spaceAction";
import { connect } from "react-redux";
import FalconComponent from "./FalconComponent";
import Pagination from "@material-ui/lab/Pagination";
//import ReactPaginate from 'react-paginate';

class HistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      per_page: 5,
      activePage: 0,
      searchString: "",
    };
  }
  componentDidMount() {
    this.props.historyList();
  }
  handlePageChange = (event, newPage) => {
console.log(event.target.value, newPage);
    this.setState({ page: newPage });
  };
  filterHandle = () => {
    console.log("test");
    let currentList = [];
    let newList = [];
    let finalList = [];

    if (this.state.searchString !== "") {
      currentList = this.props.list ? this.props.list : [];
      newList = currentList.filter((item) => {
        const lc = item && item.title ? item.title.toLowerCase() : "";
        const filter =
          this.state.searchString && this.state.searchString.toLowerCase();
        var datass = lc.includes(filter);
        console.log(datass);
        if (datass) {
          finalList.push(item);
        }
      });
    } else {
      finalList = this.props.list ? this.props.list : [];
    }
    console.log();
    return finalList;
  };
  
  render() {
    console.log(this.props.list);
    // const {list} = this.props;
    let filterData = this.filterHandle();
    let finalData = [];
    if (filterData && filterData.length > 0) {
      finalData = filterData.slice(
        (this.state.page - 1) * this.state.per_page,
        this.state.page * this.state.per_page
      );
    }
    console.log(finalData);
    let count;
    if ((filterData && filterData.length) % this.state.per_page > 0) {
      count =
        Number(((filterData && filterData.length) / this.state.per_page).toFixed(0)) +
        1;
    } else {
      count =  Number(((filterData && filterData.length) / this.state.per_page).toFixed(0));
    }
    return (
      <Fragment>
        <div className="container mt-2">
          <input
            className="search form-control"
            placeholder="Search by title"
            onChange={(e) => {
              this.setState({ searchString: e.target.value, page:1 });
            }}
          />
        </div>

        <div className="container-fluid">
          <div className="row">
            {finalData &&
              finalData.length > 0 &&
              finalData.map((data, index) => {
                return (
                  <div className="col-sm-4">
                    <FalconComponent
                      title={data.title}
                      detail={data.details}
                      flight_number={data.flight_number}
                    />
                  </div>
                );
              })}
          </div>
          <div>
            <Pagination className="paginationstyles"
              count={count }
              color="secondary"
              showFirstButton
              showLastButton
              size="large"
              onChange={this.handlePageChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.historyData,
});
export default connect(mapStateToProps, { historyList })(HistoryComponent);
