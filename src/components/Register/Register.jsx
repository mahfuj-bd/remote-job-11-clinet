import auth from "../../firebase/firebase.config";
import { TbBrandGoogle } from "react-icons/tb";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { creatUser, setName, setPhoto } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    if (password > 8) {
      return Swal.fire({
        title: "Error!",
        text: "Password must be used 8 characters",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])/.test(password)) {
      return Swal.fire({
        title: 'Error!',
        text: 'must be use capital letter and special character',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

    creatUser(email, password)
      .then((res) => {
        setName(name);
        setPhoto(photo);
        console.log(res.user);
        Swal.fire({
          title: 'Success!',
          text: 'Successfuly',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      });
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="hero min-h-screen bg-base-200 pt-20 pb-10"
    >
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-center mt-10">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Phto url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-300">Register</button>
          </div>
          <p>
            Already have an account? <Link to="/login">LogIn</Link>{" "}
          </p>
        </form>
        <button
          className="flex items-center pb-10 ml-5 "
          onClick={handleGoogleRegister}
          href=""
        >
          <TbBrandGoogle className="mr-2"></TbBrandGoogle>Google LogIn
        </button>
      </div>
    </div>
  );
};

export default Register;
