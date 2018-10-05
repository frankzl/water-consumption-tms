export const LOGIN = 'LOGIN';

export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const UPDATE_DEVICES = 'UPDATE_DEVICES';
export const UPDATE_DEVICE_DATA = 'UPDATE_DEVICE_DATA';


const serverAPI = 'http://35.198.75.55:8080/NeerMonitor/api/neer/'

const httpGetAsync = ( theUrl, callback ) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
            if ( callback ) {
                callback( xmlHttp.responseText )
            }
        }
    }
    xmlHttp.open( "GET", theUrl, true ); // true for asynchronous
    xmlHttp.send( null );
}

const updateTotal = ( total, date ) => {
    console.log( 'total', total )
    console.log( 'date', date )
    return {
        type: UPDATE_TOTAL,
        val: total,
        date: date
    }
}

const dateToString = ( date ) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();

    if ( dd < 10 ) {
        dd = '0' + dd
    }

    if ( mm < 10 ) {
        mm = '0' + mm
    }

    return yyyy + '-' + mm + '-' + dd;
}

export const getTotal = ( userId, date ) => {
    return ( dispatch ) => {
        httpGetAsync( serverAPI + 'getTotalConsumption?userId=' + userId + '&date=' + dateToString( date ),
            ( responseText ) => {
                const obj = JSON.parse( "" + responseText );
                dispatch( updateTotal( parseInt( obj.message ), dateToString( date ) ) )
            } )
    }
}

const updateDevices = ( deviceDict ) => {
    return {
        type: UPDATE_DEVICES,
        val: deviceDict
    }
}

export const getDevices = ( userId ) => {
    return ( dispatch ) => {
        httpGetAsync( serverAPI + 'getDevices?userId=' + userId,
            ( responseText ) => {
                const obj = JSON.parse( "" + responseText );
                dispatch( updateDevices( obj ) )
            } )
    }
}

const updateDeviceData = ( data ) => {
    return {
        type: UPDATE_DEVICE_DATA,
        val: data
    }
}

const remapDeviceData = ( array ) => {
    const remapped = array.map( ( dataPoint, idx ) => {
        return { x: idx, y: dataPoint.total }
    } )
    return remapped
}

export const getDeviceData = ( deviceId, fromD, toD ) => {
    return ( dispatch ) => {
        httpGetAsync( serverAPI + 'getDeviceData?deviceId=' +
            deviceId + '&fdate=' + dateToString( fromD ) + '&tdate=' + dateToString( toD ),
            ( responseText ) => {
                const obj = JSON.parse( "" + responseText );
                console.log( "------------" )
                console.log( obj )
                dispatch( updateDeviceData( remapDeviceData( obj ) ) )
            } )
    }
}