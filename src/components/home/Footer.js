import React from "react";

//function react (yang disarankan)
// const Footer = () => {
//     var name = "NIOMIC";
//     return (
//         <div>
//             <h4>Ini Footer {name}</h4>
//             <p>@2019</p>
//         </div>
//     );
// };
// export default Footer;

//function react (yang disarankan) dengan props
const Footer = props => {
    return (
        <div>
            <h4>Ini Footer {props.name}</h4>
            <p>@{props.tahun}</p>
        </div>
    );
};
export default Footer;

//function react (yang disarankan) dengan props yang lain
// const Footer = (props) => {
//     return (
//         <div>
//             <h4>Ini Footer {props.name}</h4>
//             <p>@{props.tahun}</p>
//         </div>
//     );
// };
// export default Footer;

//function react juga
// function Footer(){
//     return (
//         <div>
//             <h4>Ini Footer</h4>
//             <p>@2019</p>
//         </div>
//     );
// };
// export default Footer;

//function react juga loh tapi tidak bisa memasukan variable di dalam functionnya :(
// const Footer = () => (
//     <div>
//         <h4>Ini Footer</h4>
//         <p>@2019</p>
//     </div>
// );
// export default Footer;

//function react untuk export bisa juga
// export default () => {
//     var name = "NIOMIC";
//     return (
//         <div>
//             <h4>Ini Footer {name}</h4>
//             <p>@2019</p>
//         </div>
//     );
// };

//function react untuk export bisa juga loh
// export default function Footer() {
//     var name = "NIOMIC";
//     return (
//         <div>
//             <h4>Ini Footer {name}</h4>
//             <p>@2019</p>
//         </div>
//     );
// };
