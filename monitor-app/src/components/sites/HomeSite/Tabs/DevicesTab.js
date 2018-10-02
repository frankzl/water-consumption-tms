import React, { Component } from 'react'
import DeviceView from "./DeviceView";
import "./DevicesTab.css"

class DevicesTab extends Component {

    state = {
        deviceList: [
            {
                name: 'shower',
                total: 10.4,
                limit: 11
            },
            {
                name: 'tap-kitchen',
                total: 1.4,
                limit: 12
            },{
                name: 'shower',
                total: 20.4,
                limit: 12
            },
            {
                name: 'tap-kitchen',
                total: 5.4,
                limit: 12
            },{
                name: 'shower',
                total: 20.4,
                limit: 12
            },
            {
                name: 'tap-kitchen',
                total: 5.4,
                limit: 12
            },
        ]
    }

    render() {
        return (

            <div className="devices-tab">
                {this.state.deviceList.map(
                    (device, idx) => {
                        return <DeviceView key={idx} name={device.name} total={device.total} limit={device.limit}/>
                    }
                )}
            </div>
        )
    }
}

export default DevicesTab

