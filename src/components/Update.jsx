import React, { Component } from 'react'
import UT from './UT';

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            pwd: '',
            sex: '',
            email: ''

        }
        this.save = this.save.bind(this);
        this.setName = this.setName.bind(this);
        this.setPwd = this.setPwd.bind(this);
        this.setSex = this.setSex.bind(this);
        this.setEmail = this.setEmail.bind(this);
    }

    componentDidMount() {
        UT.getUById(this.state.id).then(res => {
            this.setState({
                name: res.data.name,
                pwd: res.data.pwd,
                sex: res.data.sex,
                email: res.data.email
            })
        });
    }

    save = (e) => {
        e.preventDefault();
        let u = {
            name: this.state.name,
            pwd: this.state.pwd,
            sex: this.state.sex,
            email: this.state.email
        };
        if (u.name == null || u.name == '' || u.pwd == '' || u.pwd == null) {
            return;
        }
        console.log('u => ' + JSON.stringify(u));

        UT.createU(u).then(res => {
            this.props.history.push('/us');
        });

    }

    setName = (e) => {
        this.setState({ name: e.target.value });
    }

    setPwd = (e) => {
        this.setState({ pwd: e.target.value });
    }

    setSex = (e) => {
        this.setState({ sex: e.target.value });
    }

    setEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    getTitle() {
        return (
            <h3 className="text-center">Add u</h3>
        )

    }

    cancel = () => {
        this.props.history.push('/us');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> name: </label>
                                        <input placeholder="name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.setName} />
                                    </div>
                                    <div className="form-group">
                                        <label> pwd: </label>
                                        <input placeholder="pwd" name="pwd" className="form-control"
                                            value={this.state.pwd} type='password' onChange={this.setPwd} />
                                    </div>
                                    <div className="form-group">
                                        <label> sex: </label>
                                        <input placeholder="sex" name="sex" className="form-control"
                                            value={this.state.sex} onChange={this.setSex} />
                                    </div>
                                    <div className="form-group">
                                        <label> email: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                            value={this.state.email} onChange={this.setEmail} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.save}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Update
