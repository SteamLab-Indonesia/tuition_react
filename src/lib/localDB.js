const Realm = require('realm');
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';
import _ from 'lodash';

const EntitySchema = {
    name: 'Entity',
    primaryKey: 'username',
    properties: {
        email: 'string', // required property
        username: 'string',
        auth_level: {type: 'int', default: 0},
        password: 'string',
        name: {type: 'string', optional: true}, // required property
        phone: {type: 'string', optional: true},
        address: {type: 'string', optional: true},
        profile: {type: 'string', optional: true},        
        push_token: {type: 'string', optional: true},
        push_id: {type: 'string', optional: true},
        logout: {type: 'bool', default: false}
    }
};

const AppsHistorySchema = {
    name: 'AppsHistory',
    primaryKey: 'id',
    properties: {
        id: {type: 'int'},
        latest_entity: {type: 'string', default: ''}
    }
}

let _realm = null;
let _entity = null;
let _apps = null;
let _deviceUser = null;
let _deviceId = null;
let _deviceType = null;

Realm.open({schema: [EntitySchema, AppsHistorySchema], schemaVersion: 2})
    .then(realm => {

        _realm = realm;

        let apps = realm.objects('AppsHistory');        
        if (apps && apps.length > 0)
        {
            _apps = apps[0];
            console.log(_apps);
        }

        // Query current entities
        let entities = realm.objects('Entity');        
        if (entities && entities.length > 0)
        {
            if (_apps && _apps.latest_entity && _apps.latest_entity != '')
            {
                let result = entities.filtered('username = "' + _apps.latest_entity + '"');
                if (result && result.length > 0)
                    _entity = result[0];
            }
            
            if (!_entity)
            {
                _entity = entities[0];
            }
        }
    })
    .catch(error => {
        console.log('error opening realm');
        console.log(error);
    });

_deviceId = DeviceInfo.getUniqueID();
if (Platform.OS === 'ios') {
    _deviceType = 'I';
}
else
{
    _deviceType = 'A';
}

export function getDeviceId() {
    return _deviceId;
}

export function getDeviceType() {
    return _deviceType;
}

export function getDeviceToken() {
    return _deviceUser;
}

// Save account details after login
export function saveAccount(data, pwd) {
    if (data && (data.email || data.username))
    {
        let username = (data.username ? data.username : data.email);
        console.log('save user: ' + username);
        data.email = data.email.toLowerCase();
        username = username.toLowerCase();
        _realm.write(() => {
            _entity = _realm.create('Entity', {
                username: username,
                email: data.email,
                password: pwd,
                name: data.name,
                auth_level: data.authorization_level,
                logout: false
            }, true);

            _apps = _realm.create('AppsHistory', {
                id: 1,
                latest_entity: _entity.username
            }, true);

        });        

    }
}

export function saveAuthName(username, name) {

    _realm.write(() => {
        _entity = _realm.create('Entity', {
            username: username,
            name: name
        }, true);                
    });        
}

export function savePushToken(token, id) {
    console.log('save push token:' + id);
    if (id) {
        console.log('save token [' + token + " ; " + id)
        if (_entity)
        {
            _realm.write(() => {
                _entity = _realm.create('Entity', {
                    username: _entity.username,
                    push_token: token,
                    push_id: id
                }, true);                
            });
        }    
        _deviceToken = token;
        _deviceUser = id;
    }
}

export function getEntity() {
    return _entity;
}

export function removeEntity() {
    if (_realm)
    {
        _realm.write(() => {
            let entities = _realm.objects('Entity');
            _realm.delete(entities); // Deletes all entities            
        });
        _entity = null;
    }
}

export function logoutSession() {
    if (_realm)
    {
        _realm.write(() => {
            _entity = _realm.create('Entity', {
                username: _entity.username,
                logout: true
            }, true);                
        });     
    }
}