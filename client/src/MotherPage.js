//The main mother page


import logo from './logo.svg';
import HostInterface from './hostInterface.php'
import './MotherPage.css';

function MotherPage() {
  return (
    <div className="Mother">
      <h1>Welcome to the mother page!</h1>
    </div>
  );
}

function MotherPage2() {
    return (HostInterface);
}

function MotherPage3() {
    return (
    <div className="Mother3">
        <ul>
            <li><a className="active" href="#home">Form</a></li>
            <li><a href="#categories">Modify</a></li>
            <li><a href="#about">About Us</a></li>
            <li class = "right_header"><a href="#about">Sign Up</a></li>
        </ul>

        <br/>
        
        <form action = "#">

            <fieldset div className="f1">

                <legend div className="l1"> Host Information </legend>

                Hosts name <br/><input type="text" placeholder="Business Name"/> 

                <br/><br/>

                Phone Number <input type = "tel" placeholder="Format: 123-456-7890"/>

                <br/><br/>

                Email Address <input type="text" placeholder="email address"/>

                <br/><br/>

            </fieldset>

            <fieldset div className="f2">

                <legend div className="l2"> Location Information </legend>

                Choose your space:

                <br/>

                <select id="size" className="apartment">
                    <option value="Studio">Gaz Station</option>
                    <option value="Home">Parking Lot</option>
                    <option value="Duplex">Street</option>
                    <option value="Triplex">Other</option>
                </select>

                <br/><br/>

                Space Rental Term:

                <br/>

                <input type="radio" id="short" name="term" value="short"/>
                <label for="Short Term">Short Term</label><br/>
                <input type="radio" id="long" name="term" value="long"/>
                <label for="Long Term">Long Term</label><br/>
                <input type="radio" id="other" name="term" value="other"/>
                <label for="Both are OK">Both are OK</label>

                <br/><br/>

                Features:

                    <input type="checkbox" name="features" value = "Balcony"/> Proximity to Hotels
                    <input type="checkbox" name="features" value = "Higher Floor"/> Proximity to Bathroom
                    <input type="checkbox" name="features" value = "Proximity to Elevators"/> Proximity to Restaurants

                <br/><br/>

                Start date:

                <input type = "date"/>

                <br/><br/>

                Special Request:

                <br/>

                <textarea name="message" rows="10" cols="100">
                Please specify any special request you might have.
                </textarea>

            </fieldset>


            <p> Thank you for being a part of the Mother Trucker Family! </p>

            <input type = "submit"  value = "Search" />
            <input type = "reset"  value = "Start over" />



        </form>
    </div>
        );






}

export default MotherPage3;
