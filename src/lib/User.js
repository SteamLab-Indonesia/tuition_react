import firebase from 'react-native-firebase';

export const GENDER = {
    MALE: 'm',
    FEMALE: 'f'
};

export const AUTH_LEVEL = {
    SUPER_ADMIN: 500,
    OWNER: 400,

    BRANCH_SUPERVISOR: 302,
    MANAGER: 301,
    FINANCE: 300,

    COORDINATOR: 201,
    TEACHER: 200,

    OPERATOR: 102,
    PARENT: 101,
    STUDENT: 100,
    GUEST: 0
}

export class User {

    name = '';
    email = '';
    username = '';
    birthday = '';
    password = '';
    phone = '';
    address = '';
    school = '';
    gender = GENDER.MALE;
    authorizationLevel = AUTH_LEVEL.GUEST;

    constructor(user)
    {
        if (user)
        {
            this.name = user.name;
            this.email = user.email;
            this.username = user.username;
            this.birthday = user.birthday;
            this.password = user.password;
            this.phone = user.phone;
            this.address = user.address;
            this.school = user.school;
            this.gender = user.gender;
            if (user.authorizationLevel)
            {
                this.authorizationLevel = user.authorizationLevel;
            }    
        }
    }

    toJson = () => {
        return {
            name: this.name,
            email: this.email,
            username: this.username,
            birthday: this.birthday,
            password: this.password,
            phone: this.phone,
            address: this.address,
            school: this.school,
            gender: this.gender,
            authorizationLevel: this.authorizationLevel
        }

    }
}

export function getUser(callback) {
    const db = firebase.firestore();
    db.collection("user").get()
    .then((snapshot) => {
        let user_list = []
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            user_list.push({
                id: doc.id,
                data: doc.data()
            });
        });
        callback(user_list);
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
};

export function getUserDetails(username, callback) {
    const db = firebase.firestore();
    let query = db.collection("user").where("email", "=", username);
    console.log(query);
};

export function addUser(user)
{
    // HAVE TO CHECK WHAT AUTH LEVEL USER can be add
    const db = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });    
    db.collection('user').add(user.toJson());      
}

export function login(username, password, callback)
{
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(username, password)
    .then((user) => {
        let login_user = {
            email: username,
            username: username
        }
        callback(null, login_user);
    })
    .catch((err) => {
        callback(err, null);
    });
}