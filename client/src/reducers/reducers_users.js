//CALL THE API to populate the user
import API from '../utils/API'


export default function() {
    API.getUser(localStorage.getItem('user_id')).then((res) => {
        return res.data[0];
    });
}