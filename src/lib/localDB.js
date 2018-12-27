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
                let result = entities.filtered('email = "' + _apps.latest_entity + '"');
                if (result && result.length > 0)
                    _entity = result[0];
            }
            
            if (!_entity)
            {
                _entity = entities[0];
            }
            console.log(_entity);
            console.log('entityId: ' + _entity.entity_id);
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
    if (data)
    {
        _realm.write(() => {
            _entity = _realm.create('Entity', {
                authentication_string: data.authentication_string_lower,
                password: pwd,
                name: data.name,
                entity_id: data._id,
                authorization_level: data.authorization_level,
                logout: false
            }, true);

            _apps = _realm.create('AppsHistory', {
                id: 1,
                latest_entity: _entity.entity_id
            }, true);

            console.log(_entity);
            console.log(_apps);
        });        

    }
    _isIntercom = false;
}

export function saveAuthName(authentication_string, name) {

    _realm.write(() => {
        _entity = _realm.create('Entity', {
            entity_id: _entity.entity_id,
            authentication_string: authentication_string,
            name: name
        }, true);                
    });        
}

export function savePushToken(token, id) {
    console.log('save push token:' + id);
    if (id) {
        console.log('save token [' + token + " ; " + id)
        // _realm.write(() => {
        //     _entity = _realm.create('Entity', {
        //         entity_id: _entity.entity_id,
        //         push_token: token,
        //         push_id: id
        //     }, true);                
        // });        
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
                entity_id: _entity.entity_id,
                logout: true
            }, true);                
        });     
    }
}