import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";

function HardCodeDisplayPage(){
    return(
        <div className="HardCodeDisplayPage" style={{ justifyContent: "center" }}>
            <div class="header">
                <h1><Link to = "/"><button>Back to Main Page</button></Link></h1>
                
            </div>
            <h1>Your Mother Listing</h1>
            <div style={noteRootStyle}>
                <h3>{"1st Baptist Church SATX"}</h3>
                <p>{"222 Main Ave, San Antonio, TX 78212"}</p>
                <p>{"(210)555-2222"}</p>
                <p>{"No parking on Sundays. Please call for reservation. Access to bathroom and shower."}</p>
            </div>
            </div>
    );
  }

//   function Mothers() {
//     // const { Frame, sync, configureFrame } = useEasybase();

//     // useEffect(() => {
//     //     configureFrame({ tableName: "MOTHERS", limit: 10 });
//     //     sync();
//     //   }, []);

    const noteRootStyle = {
        border: "2px #0af solid",
        borderRadius: 9,
        margin: 20,
        backgroundColor: "#efefef",
        padding: 6
      };

//     const backendData = [
//         { title: "Walmart Blanco Rd", location: "123 Blanco Rd", phone: "(210)555-5555", message: "Usually full by 6pm. Laundry, showers on site.", truckerFriendly: "yes" },
//         { title: "Loves Truck Stop SATX", location: "55 19th Ave", phone: "(210)222-2222", message: "Full availability, must leave by 9am. Access to in-store restrooms.", truckerFriendly: "yes" },
//         { title: "First Baptist Church SATX", location: "216 Main St", phone: "(210)231-1111", message: "4 spots on site, call ahead to check availability. No parking Sundays. Safe location with restrooms and showers.", truckerFriendly: "yes" }
//     ]

//     const noteRootStyle = {
//       border: "2px #0af solid",
//       borderRadius: 9,
//       margin: 20,
//       backgroundColor: "#efefef",
//       padding: 6
//     };
  
//     return (
//       <div style={{ width: 400 }}>
//           <br></br>
//           <br></br>
//           <br></br>
//         {backendData.map(ele => 
//           <div style={noteRootStyle}>
//             <h3>{ele.title}</h3>
//             <p>{ele.location}</p>
//             <p>{ele.phone}</p>
//             <p>{ele.message}</p>
//           </div>
//         )}
//       </div>
//     )
//   }

  export default HardCodeDisplayPage;