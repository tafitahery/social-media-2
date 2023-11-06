import { Link } from 'react-router-dom';
import './register.scss';

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lebo Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
            quasi repudiandae ad laudantium temporibus obcaecati porro
            reprehenderit vel.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
