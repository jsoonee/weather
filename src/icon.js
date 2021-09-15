import React from 'react';
import { WiDaySunny } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiNightAltPartlyCloudy } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiNightAltShowers } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiNightAltRain } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiNightAltThunderstorm } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiNightAltSnow } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";

const iconStyle = {
    fontSize: "10rem",
    padding: "30px 0 10px 0",
};

const Icon = (props) => {
    const code = props.weather;
    return (
        <div>
          {
            (function() {
                if (code === '01d') return (<WiDaySunny style={iconStyle}/>);
                if (code === '01n') return (<WiNightClear style={iconStyle}/>);
                if (code === '02d') return (<WiDaySunnyOvercast style={iconStyle}/>);
                if (code === '02n') return (<WiNightAltPartlyCloudy style={iconStyle}/>);
                if (code === '03d') return (<WiDayCloudy style={iconStyle}/>);
                if (code === '03n') return (<WiNightAltCloudy style={iconStyle}/>);
                if (code === '04d') return (<WiCloudy style={iconStyle}/>);
                if (code === '04n') return (<WiCloudy style={iconStyle}/>);
                if (code === '09d') return (<WiDayShowers style={iconStyle}/>);
                if (code === '09n') return (<WiNightAltShowers style={iconStyle}/>);
                if (code === '10d') return (<WiDayRain style={iconStyle}/>);
                if (code === '10n') return (<WiNightAltRain style={iconStyle}/>);
                if (code === '11d') return (<WiDayThunderstorm style={iconStyle}/>);
                if (code === '11n') return (<WiNightAltThunderstorm style={iconStyle}/>);
                if (code === '13d') return (<WiDaySnow style={iconStyle}/>);
                if (code === '13n') return (<WiNightAltSnow style={iconStyle}/>);
                if (code === '50d') return (<WiDayFog style={iconStyle}/>);
                if (code === '50n') return (<WiNightFog style={iconStyle}/>);
            })()
          }
        </div>
    );
}

export default Icon;