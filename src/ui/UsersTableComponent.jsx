import React, { Component } from 'react';

import UsersService from '../api/UsersService.js';

class UsersTableComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : [],
            createdUserId : "",
            createdUserFirstName : "",
            createdUserLastName : "",
            createdUserAddress : "", 
            createdUserMessage : null,

            updatedUserId : "",
            updatedUserFirstName : "",
            updatedUserLastName : "",
            updatedUserAddress : "", 
            updatedUserMessage : null
        }

         this.getAllUsers = this.getAllUsers.bind(this);
         this.deleteUser = this.deleteUser.bind(this);
         this.updateUser = this.updateUser.bind(this);
         this.createUser = this.createUser.bind(this);
         this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        this.getAllUsers();
    }

    getAllUsers(){
        UsersService.getAllUsers()
        .then(
            response => (
                this.setState({users : response.data})
            )
        )
    }
    createUser(){
        let user = {
            id : this.state.users.length + 1,
            firstName : this.state.createdUserFirstName,
            lastName : this.state.createdUserLastName,
            address : this.state.createdUserAddress

        }
        console.log('creating user :>> ', user);
        UsersService.createUser(user);
        this.getAllUsers();
    }
    updateUser(){
        let updatedUser = {
            id : this.state.updatedUserId,
            firstName : this.state.updatedUserFirstName,
            lastName : this.state.updatedUserLastName,
            address : this.state.updatedUserAddress

        }
        console.log('updating user :>> ', updatedUser);
        UsersService.updateUser(updatedUser);
        this.getAllUsers();
    }
    deleteUser(id){
        UsersService.deleteUser(id)
        .then(
            response => {
                this.setState({message : response.data})
                this.getAllUsers()
            }
        )
    }
    handleChange(event){
        this.setState(
            {[event.target.name] : event.target.value});
            console.log('event.target.name =  :>> ', event.target.value );
            console.log('event.target.value =  :>> ', event.target.value );
    }
    render(){
        return(
                
                <div>
                     {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <h2>Existing Users</h2>
                   <td><button className="btn btn-warning" onClick={() => this.getAllUsers()}>Refresh Users</button></td> 

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.users.map (
                                user => 
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.updateUser(user.id)}>Update User</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteUser(user.id)}>Delete User</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <h2>Create User</h2>
                    <div>
                        First Name: <input type="text" name="createdUserFirstName" value={this.state.createdUserFirstName} onChange={this.handleChange}/>
                        Last Name: <input type="text" name="createdUserLastName" value={this.state.createdUserLastName} onChange={this.handleChange}/>
                        Address: <input type="text" name="createdUserAddress" value={this.state.createdUserAddress} onChange={this.handleChange}/>
                        <button className="btn btn" onClick={this.createUser}>Submit</button>
                    </div>
                    <div>
                        ID: <input type="text" name="updatedUserId" value={this.state.updatedUserId} onChange={this.handleChange}/>
                        First Name: <input type="text" name="updatedUserFirstName" value={this.state.updatedUserFirstName} onChange={this.handleChange}/>
                        Last Name: <input type="text" name="updatedUserLastName" value={this.state.updatedUserLastName} onChange={this.handleChange}/>
                        Address: <input type="text" name="updatedUserAddress" value={this.state.updatedUserAddress} onChange={this.handleChange}/>
                        <button className="btn btn" onClick={this.updateUser}>Submit</button>
                    </div>
                </div>   
        );
    }
}

export default UsersTableComponent;