import { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import profile from '../../images/profile.png';
import ProfileNavBar from '../User/ProfileNav';

const Profile = () => {
	const [user, setUser] = useState({});

	const [dataimg, setDataimg] = useState({});

	const [data, setData] = useState([]);

	const [file, setFile] = useState(null);

	const userBackend = {
		userinfo: ''
	};

	const handleFileChange = (event) => {
		setFile(event.target.files);
		console.log(file);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData();
		data.append('file', file[0]);
		data.append('id',user._id)
		console.log(data);
		axios.post('http://localhost:4001/upload', data).then((res) => {
			console.log(res.statusText);
		});
	};

	useEffect(() => {
		axios.get(`api/v1/me`).then((res) => {
			setUser(res.data.user);
			//setDataimg(res.data.allData);
			
			//console.log(user)
		});
		//console.log("hi",  user._id)
	    userBackend.userinfo = user._id;
		axios
			.post('http://localhost:4001/getImg', userBackend)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err, 'it has an error'));
	},[user]);

	//console.log("single data",data[0])

	

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:4001/getImg',user)
	// 		.then((res) => setData(res.data))
	// 		.catch((err) => console.log(err, 'it has an error'));
	// });
	return (
		<>
			<ProfileNavBar />
			<div className='main'>
				<div className='container bootstrap snippets bootdey'>
					<div className='row'>
						<div className='profile-nav col-md-3'>
							<div className='panel'>
								<div className='user-heading round'>
									{/* <a href="#">
					  <img src={profile} alt="" />
					</a> */}

									{data.map((singleData) => {
										const base64String = btoa(
											new Uint8Array(singleData.img.data.data).reduce(function (
												data,
												byte
											) {
												return data + String.fromCharCode(byte);
											},
											'')
										);
										return (
											<img
												className='profile_pic'
												src={`data:image/png;base64,${base64String}`}
											/>
										);
									})}
									<div>
										<form>
											<div className='form-group'>
												<label htmlFor='file'>Upload File:</label>
												<input
													className='form-control-file mb-3'
													type='file'
													id='file'
													accept='.png'
													multiple
													onChange={handleFileChange}
												/>

                        <button
                          className="btn btn-primary mt-3"
                          onClick={handleSubmit}
                        >
                          Upload
                        </button>
                      </div>
                    </form>

                    {/* Display Image Here */}
                  </div>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <div className="profile-info col-md-9">
              <div className="panel">
                <div className="bio-graph-heading">Your Profile</div>
                <div className="panel-body bio-graph-info">
                  <h1>Basic Information</h1>
                  <div className="row">
                    <div className="bio-row">
                      <p>
                        <span>Name </span>: {user.name}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Country </span>: Bangladesh
                      </p>
                    </div>

										<div className='bio-row'>
											<p>
												<span>Email </span>: {user.email}
											</p>
										</div>
										<div className='bio-row'>
											<p>
												<span>Mobile </span>: +88 {user.phone}
											</p>
										</div>
										<div className='bio-row'>
											<p>
												<span>Bank Account </span>: {user.bankAccount}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='your-order'>your recent orders</div>
				<div class='card'>
					<div class='container'>
						<h4>
							<b>Order Id:</b>
							<b> lnsdhlknldknlks</b>
						</h4>
						<h4>
							<b>Product Name:</b>
							<b> product1</b>
						</h4>
						<h4>
							<b>Quantity:</b>
							<b> 5</b>
						</h4>
						<h4>
							<b>Total Price:</b>
							<b> 500/=</b>
						</h4>
						<h4>
							<b>Date:</b>
							<b> Today</b>
						</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
