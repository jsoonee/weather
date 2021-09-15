import React from "react";

const Desc = (props) => {
    const id = props.name;
    return (
        <div>
          {
            (function() {
                if (Math.floor(id / 100) === 2) return ("뇌우");
                if (Math.floor(id / 100) === 3) return ("이슬비");
                if (id >= 500 && id <= 504) return ("비");
                if (id === 511) return ("눈");
                if (id >= 520 && id <= 531 ) return ("소나기");
                if (Math.floor(id / 100) === 6) return ("눈");
                if (id === 701) return ("박무");
                if (id === 711) return ("연기");
                if (id === 721) return ("연무");
                if (id === 731) return ("먼지");
                if (id === 741) return ("안개");
                if (id === 751) return ("모래바람");
                if (id === 761) return ("먼지");
                if (id === 762) return ("화산재");
                if (id === 771) return ("스콜");
                if (id === 781) return ("토네이도");
                if (id === 800) return ("맑음");
                if (id === 801) return ("맑음");
                if (id === 802) return ("구름조금");
                if (id === 803) return ("구름많음");
                if (id === 804) return ("흐림");
            })()
          }
        </div>
    );
}

export default Desc;