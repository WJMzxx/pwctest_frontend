import React, { Component } from 'react'
import UserUtil from './UserUtil';

class Get extends Component {
    constructor(props) {
        super();

        this.state = {
            us: []

        }
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.del = this.del.bind(this);
    }

    componentDidMount() {
        UserUtil.getAll().then((res) => {
            this.setState({ us: res.data });
            console.log(this.state.us);
        });
    }
    add() {
        this.props.history.push('/add');
    }

    del(id) {
        UserUtil.deleteU(id).then(res => {
            this.setState({ us: this.state.us.filter(u => u.id !== id) });
        });
    }

    edit(id) {
        this.props.history.push(`/edit/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.add}> Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> name</th>
                                <th> pwd</th>
                                <th> sex</th>
                                <th> email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.us.map(
                                    u =>
                                        <tr key={u.id}>
                                            <td> {u.name} </td>
                                            <td> *******</td>
                                            <td> {u.sex}</td>
                                            <td> {u.email}</td>
                                            <td>
                                                <button onClick={() => this.edit(u.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.del(u.id)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }

}

export default Get;