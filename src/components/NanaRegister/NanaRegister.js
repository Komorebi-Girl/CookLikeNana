import React from "react";
import "./NanaRegister.css";

const NanaRegister = props => (
	<div className="card">
			<h5 className="card-header">Nana Registration</h5>
			<div className="card-body">
				<form>
				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">First Name</label>
    				<input type="text" className="form-control" id="firstname" name="firstname"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Last Name</label>
    				<input type="text" className="form-control" id="lastname" name="lastname"></input>
				  </div>
				</div>

					
				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Email address</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="password"></input>
				  </div>
				</div>

				<div className="row">
				  <div class="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Location</label>
    				<input type="text" className="form-control" id="location" name="location"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Link to Photo</label>
    				<input type="text" className="form-control" id="photo" name="photo"></input>
				  </div>
				</div>

				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">YouTube Link</label>
    				<input type="text" className="form-control" id="youtube" name="youtube"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Rate Per Hour</label>
    				<input type="text" className="form-control" id="rate" name="rate"></input>
				  </div>
				</div>


				  <div className="form-group">
				    <label for="exampleFormControlTextarea1">Tell Us About Yourself</label>
				    <textarea className="form-control" id="bio" rows="3"></textarea>
				  </div>

				  <div className="form-group">
				  	<label for="exampleFormControlTextarea1">Cuisine Specialty</label>
				    <div>
						<input type="checkbox" id="italian" name="italian" value="1"></input>
				    	<label for="checkbox1">Italian</label>
					</div>
					
					<div>
					    <input type="checkbox" id="vegan" name="vegan" value="2"></input>
					    <label for="checkbox2">Vegan/Vegetarian</label>
					</div>

					<div>
					    <input type="checkbox" id="southern" name="southern" value="3"></input>
					    <label for="checkbox3">Southern</label>
					</div>

					<div>
					    <input type="checkbox" id="baking" name="baking" value="4"></input>
					    <label for="checkbox4">Baking</label>
					</div>

					<div>
					    <input type="checkbox" id="hispanic" name="hispanic" value="5"></input>
					    <label for="checkbox5">Hispanic</label>
					</div>
				  </div>


				
				<button type="button" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
);

export default NanaRegister;