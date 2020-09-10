import React, { Component } from 'react';
import '../assets/css/data.css';
import ReactPaginate from 'react-paginate';
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
            error: null,
            offset: 0,
            elements: [],
            perPage: 2,
            currentPage: 0,
        };
    }


    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    isLoading: false,
                    pageCount: Math.ceil(data.length / this.state.perPage)
                }, () => this.setElementsForCurrentPage())
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    setElementsForCurrentPage() {
        let elements = this.state.users
            .slice(this.state.offset, this.state.offset + this.state.perPage)
            .map(user => {
                const { username, name, email } = user;
                return (
                    <div key={username} className="container mt-3">
                        <div className="item">
                            <div className="card item-card card-block p-3">
                                <h5>UserName:</h5> <p> {username}</p>
                                <h5>Name:</h5> <p>{name}</p>
                                <h5>Email:</h5> <p>{email}</p>
                            </div>
                        </div>
                    </div>
                );
            }
            );
        this.setState({ elements: elements });
    }

    handlePageClick = (data) => {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({ currentPage: selectedPage, offset: offset }, () => {
            this.setElementsForCurrentPage();
        });
    };



    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        let paginationElement;

        if (this.state.pageCount > 1) {
            paginationElement = (
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={this.state.pageCount}
                    onPageChange={this.handlePageClick}
                    forcePage={this.state.currentPage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous_page"}
                    nextLinkClassName={"next_page"}
                    disabledClassName={"disabled"}
                    activeClassName={"activePagination"}
                />
            );
        }
        return (
            <>
                <div className="data-container">
                    <h1 className="data-heading">Employee details</h1>
                    <ExcelFile>
                        <ExcelSheet data={this.state.users} name="Employees">
                            <ExcelColumn label="User Name" value="username" />
                            <ExcelColumn label="Name" value="name" />
                            <ExcelColumn label="Email" value="email" />
                        </ExcelSheet>
                    </ExcelFile>
                    {paginationElement}
                    {this.state.elements}
                    {paginationElement}
                </div>
            </>
        );
    }
}
export default Data;