import React from "react";
import "./UserRegister.css";

const UserRegister = props => (
	<div className="card">
			<h5 className="card-header">User Registration</h5>
			<div className="card-body">
				<form>
				<div className="row">
				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Full Name</label>
    				<input type="text" className="form-control" id="fullname" name="fullname"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleInputEmail1">Email</label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
				  </div>
				</div>

				<div className="row">
				  <div class="form-group col-md-6">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="password"></input>
				  </div>

				  <div className="form-group col-md-6">
				    <label for="exampleFormControlSelect1">Address</label>
    				<input type="text" className="form-control" id="address" name="address"></input>
				  </div>
				</div>

				  <div className="form-group">
				    <label for="exampleFormControlSelect1">Link to Photo (Optional)</label>
    				<input type="text" className="form-control" id="photo" name="photo"></input>
				  </div>

				  <div className="form-group">
				    <label for="exampleFormControlTextarea1">Tell Us About Yourself (Optional)</label>
				    <textarea className="form-control" id="bio" rows="3"></textarea>
				  </div>

				  <div className="form-group">
				  	<label for="exampleFormControlTextarea1">Cuisine Preference (Optional)</label>
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

export default UserRegister;