export const LOGIN = 'LOGIN';

export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const UPDATE_DEVICES = 'UPDATE_DEVICES'


const serverAPI = 'http://35.198.75.55:8080/NeerMonitor/api/neer/'

const httpGetAsync = ( theUrl, callback ) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
            console.log( xmlHttp.responseText );
            if ( callback ) {
                callback( xmlHttp.responseText )
            }
        }
    }
    xmlHttp.open( "GET", theUrl, true ); // true for asynchronous
    xmlHttp.send( null );
}

const updateTotal = (total, date) => {
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
    console.log('uid')
    console.log(userId)
    return (dispatch) => {
        httpGetAsync( serverAPI + 'getTotalConsumption?userId='+userId+'&date='+dateToString(date),
            ( responseText ) => {
                const obj = JSON.parse( "" + responseText );
                console.log('response: ',responseText)
                dispatch(updateTotal(parseInt(obj.message), date))
            } )
    }
}

const updateDevices = (deviceDict) => {
    return {
        type: UPDATE_DEVICES,
        val: deviceDict
    }
}

export const getDevices = (userId) => {
    return (dispatch) => {
        httpGetAsync( serverAPI + 'getDevices?userId='+userId,
            ( responseText ) => {
                const obj = JSON.parse( "" + responseText );
                dispatch(updateDevices(obj))
            } )
    }
}