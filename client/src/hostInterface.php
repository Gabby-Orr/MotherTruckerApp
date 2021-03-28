


<!DOCTYPE html>
<html>
<head>

    <meta charset = "utf-8"/>
    <title>Host Interface</title>


 <style>

 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

	/* background */
    body {
        background-color: rgb(43, 40, 192);
	}
	

	/* top banner */
    .topBanner{
			background:url("yplogo.png");
			height:120px;
			vertical-align: top;
		}
		
		
		.inBanner{
			color:white;
			float:left;
			padding:50px 0px 0px 300px;
			font-size:2em;
		}

        .right_header {
          color: #fff;
          float: right;

          body{
        background-color: rgb(236, 197, 203);
        
    }

    .f1{
        background-color: lightblue;
        border-color: lightblue;
        font-weight:bold;
        padding:20px; 
    
        

    }

    .f2{
        background-color: plum;
        border-color: rebeccapurple;
        font-weight:bold;
        padding:20px; 
    }

    .l1{
        color: lightblue
    }

    .l2{
        color:rebeccapurple


    }


}
</style>
</head>
<body>

    <ul>
        <li><a class="active" href="#home">Form</a></li>
        <li><a href="#categories">Modify</a></li>
        <li><a href="#about">About Us</a></li>
        <li class = "right_header"><a href="#about">Sign Up</a></li>
    </ul>
    
    <br><br><br>

    </table>
    <form action = #>

        <fieldset div class="f1">

            <legend div class="l1"> Host Information </legend>

            Hosts name <br><input type="text" placeholder="Business Name"> 

            <br><br>

            Phone Number <input type = "tel" placeholder="Format: 123-456-7890">

            <br><br>

            Email Address <input type="text" placeholder="email address">

            <br><br>

        </fieldset>

        <fieldset div class="f2">

            <legend div class="l2"> Location Information </legend>

            Choose your space:

            <br>

            <select id="size" name="apartment">
                <option value="Studio">Gaz Station</option>
                <option value="Home">Parking Lot</option>
                <option value="Duplex">Street</option>
                <option value="Triplex">Other</option>
              </select>

            <br><br>

            Space Rental Term:

            <br>

            <input type="radio" id="short" name="term" value="short">
              <label for="Short Term">Short Term</label><br>
              <input type="radio" id="long" name="term" value="long">
              <label for="Long Term">Long Term</label><br>
              <input type="radio" id="other" name="term" value="other">
             <label for="Both are OK">Both are OK</label>

            <br><br>

            Features:

                 <input type="checkbox" name="features" value = "Balcony"> Proximity to Hotels
                 <input type="checkbox" name="features" value = "Higher Floor"> Proximity to Bathroom
                 <input type="checkbox" name="features" value = "Proximity to Elevators"> Proximity to Restaurants

            <br><br>

            Start date:

            <input type = "date">

            <br><br>

            Special Request:

            <br>

            <textarea name="message" rows="10" cols="100">
             Please specify any special request you might have.
            </textarea>

        </fieldset>


        <p> Thank you for being a part of the Mother Trucker Family! </p>

        <input type = "submit"  value = "Search" />
        <input type = "reset"  value = "Start over" />



    </form>






</body>
</html>