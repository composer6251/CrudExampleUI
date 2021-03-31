import axios from 'axios';


class UsersService{

    getAllUsers(){
        console.log('Getting all users in UsersService');
        return axios.get(`http://localhost:8080/get-all-users`);
    }

    createUser(user){
        console.log('Api call to create user :>> ', user);
        return axios.post(`http://localhost:8080/create-user`, user)
    }
    updateUser(user){
        console.log('Api call to update user :>> ', user);
        return axios.post(`http://localhost:8080/update-user`, user)
    }
    deleteUser(id){
        console.log('Api call to delete user with id :>> ', id);
        return axios.delete(`http://localhost:8080/delete-user`, {
            params: {id}
        })
    }
}
export default new UsersService();