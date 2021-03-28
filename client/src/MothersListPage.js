import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Pages.css";

function MothersListPage(){
    return(
        <div className="MothersListPage" style={{ justifyContent: "center" }}>
            <div class="header">
                <h1><Link to = "/trucker"><button>Back to Trucker Page</button></Link></h1>
                
            </div>
            <h1>Mothers Near You</h1>
            <Mothers />
            </div>
    );
  }

  function Mothers() {
    // const { Frame, sync, configureFrame } = useEasybase();

    // useEffect(() => {
    //     configureFrame({ tableName: "MOTHERS", limit: 10 });
    //     sync();
    //   }, []);

    const backendData = [
        { title: "Walmart Blanco Rd", location: "123 Blanco Rd", phone: "(210)555-5555", message: "Usually full by 6pm. Laundry, showers on site.", truckerFriendly: "yes" },
        { title: "Loves Truck Stop SATX", location: "55 19th Ave", phone: "(210)222-2222", message: "Full availability, must leave by 9am. Access to in-store restrooms.", truckerFriendly: "yes" },
        { title: "First Baptist Church SATX", location: "216 Main St", phone: "(210)231-1111", message: "4 spots on site, call ahead to check availability. No parking Sundays. Safe location with restrooms and showers.", truckerFriendly: "yes" }
    ]

    const noteRootStyle = {
      border: "2px #0af solid",
      borderRadius: 9,
      margin: 20,
      backgroundColor: "#efefef",
      padding: 6
    };
  
    return (
      <div style={{ width: 400 }}>
          <br></br>
          <br></br>
          <br></br>
        {backendData.map(ele => 
          <div style={noteRootStyle}>
            <h3>{ele.title}</h3>
            <p>{ele.location}</p>
            <p>{ele.phone}</p>
            <p>{ele.message}</p>
          </div>
        )}
      </div>
    )
  }

  export default MothersListPage;