function getUsers(callback) {
    if(typeof callback !== 'function'){
        return false;
    }
    //let users = [];
    setTimeout(() => {
        // users = [
        //     {id: 1, name: 'Teo', email: 'teo@gmail'},
        //     {id: 2, name: 'Ty', email: 'ty@gmail'},
        // ];
        callback([
            {id: 1, name: 'Teo', email: 'teo@gmail'},
            {id: 2, name: 'Ty', email: 'ty@gmail'},
        ]);
    }, 1000);
    //return users;
}

function findUserById(id, callback) {
    // const users = getUsers();
    // const user = users.find(user => user.id === id);
    // return user;
    getUsers((users) => {
        // tim user
        const user = users.find(user => user.id === id);
        callback(user);
    });
}
console.log(findUserById(1, console.log));
// xu ly callback