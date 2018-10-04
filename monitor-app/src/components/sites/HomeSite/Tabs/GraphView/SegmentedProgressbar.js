import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import CircularProgressbar from 'react-circular-progressbar';

// Component that renders an arbitrary
// number of divs on top of CircularProgressbar,
// whose content is centered.
function LayeredProgressbar(props) {
    const { renderOverlays, ...otherProps } = props;
    const overlayStyles = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const overlays = props.renderOverlays();
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <div style={{ position: 'absolute' }}>
                <CircularProgressbar {...otherProps}
                                     initialAnimation={true}
                                     strokeWidth={12}
                                     textForPercentage={null} />
            </div>
            {overlays.map((overlay, index) => (
                <div style={overlayStyles} key={index}>
                    {overlay}
                </div>
            ))}
        </div>
    );
}

function RadialSeparator(props) {
    return (
        <div
            style={{
                background: '#fff',
                width: '3px',
                height: '100%',
                transform: `rotate(${props.degrees}deg)`,
            }}
        />
    );
}

// Expects an even number of separators.
// Can be implemented with non-even numbers
// but requires changing the styling of LayeredProgressbar,
// left as exercise to the reader.
function getRadialSeparators(numSeparators) {
    const degrees = 360 / numSeparators;
    return _.range(numSeparators / 2).map(index => (
        <RadialSeparator degrees={index * degrees} />
    ));
}

const styles = {    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the part that's "complete"
    path: {
        // Tweak path color:
        stroke: '#2196f3',
            // Tweak path to use flat or rounded ends:
            strokeLinecap: 'butt',
            // Tweak transition animation:
            transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the circle behind the path
    trail: {
        // Tweak the trail color:
        stroke: '#d6d6d6',
    },
    // Customize the text
    text: {
        // Tweak text color:
        fill: '#f88',
            // Tweak text size:
            fontSize: '40px',
    },

}

const getColor = (percentage) => {
    let r = 0;
    let g = 200;
    let b = 255;

    r = r + (255*percentage)/100
    g = g - (200*percentage)/100
    b = b - (255*percentage)/100

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

function SegmentedProgressbar(props) {

    const percentage = props.liters*100/props.limit

    const col = getColor(percentage)

    styles['path']['stroke'] = col


    return (
        <LayeredProgressbar
            percentage={percentage}
            styles={styles}
            renderOverlays={() =>
                getRadialSeparators(20).concat(
                    <div style={{ fontSize: 40, fontWeight: 'bold',  color: col }}>
                        {props.liters}<div style={{fontSize: 12, marginLeft: 41, marginTop: 5,
                    color: 'rgba(0,0,0,0.5)'}}>/ {props.limit} liter</div>
                    </div>,
                )
            }
        />
    );
}

export default SegmentedProgressbar;
