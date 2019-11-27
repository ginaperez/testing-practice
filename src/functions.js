const axios = require('axios');

module.exports = {
    sum(a,b) {
        return a + b;
    },

    sayHello() {
        return 'hello';
    },

    fetchUser: async () => {
        const user = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        .catch(err => console.log(err));
        return user.data
    }
}