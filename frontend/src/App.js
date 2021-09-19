import './App.css';
import React from 'react';
import UserList from './components/Users.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

   componentDidMount() {
       const users = [
           {
               'username': 'KonTroAll',
               'first_name': 'Konstantin',
               'last_name': 'Troshenkin',
               'email': 'kostya@98295@mail.ru'
           },
       ]
       this.setState(
            {
                'users': users
            }
       )
    }
    render () {
        return (
            <div>
                <UserList users={this.state.users} />
            </div>
        )
    }
}
export default App;


