function getUsers() {
    return new Promise((resolve, reject) => {
        let check = true;
        setTimeout(() => {
            if(check) {
                resolve([
                    {id: 1, name: 'Teo'},
                    {id: 2, name: 'Ty'}
                ])
            } else {
                reject('service fail');
            }
        }, 1000);
    });
}
getUsers()
    .then(user => console.log(user))
    .catch(err => console.log(err));