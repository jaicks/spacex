import React, { Component, Fragment } from "react";
import { addressList } from "../actions/spaceAction";
import { connect } from "react-redux";
import FalconComponent from "./FalconComponent";
import CustomerFalcon from "./CustomerFalcon";
import Pagination from "@material-ui/lab/Pagination";

class PayloadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      per_page: 9,
      activePage: 0,
      searchString: "",
    };
  }
  componentDidMount() {
    this.props.addressList();
  }

  filterHandle = () => {
    let currentList = [];
    let newList = [];
    let finalList = [];

    if (this.state.searchString !== "") {
      currentList = this.props.list ? this.props.list : [];
      newList = currentList.filter((item) => {
        const lc = item && item.payload_id ? item.payload_id.toLowerCase() : "";
        const filter =
          this.state.searchString && this.state.searchString.toLowerCase();
        var datass = lc.includes(filter);
        if (datass) {
          finalList.push(item);
        }
      });
    } else {
      finalList = this.props.list ? this.props.list : [];
    }
    return finalList;
  };
  handlePageChange = (event, newPage) => {
    this.setState({ page: newPage });
  };
  render() {
    let filterData = this.filterHandle();
    let finalData = [];
    if (filterData && filterData.length > 0) {
      finalData = filterData.slice(
        (this.state.page - 1) * this.state.per_page,
        this.state.page * this.state.per_page
      );
    }
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
            placeholder="Search by Payload Id"
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
                    <CustomerFalcon
                      id={data.payload_id}
                      type={data.payload_type}
                      nationality={data.nationality}
                      customers={data.customers}
                    />
                  </div>
                );
              })}
          </div>
          <div>
            <Pagination className="paginationstyles"
              count={count}
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
  list: state.addressData,
});
export default connect(mapStateToProps, { addressList })(PayloadComponent);
