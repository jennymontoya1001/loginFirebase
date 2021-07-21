import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'
import { useForm } from '../hooks/useForm';
import { login } from '../actions/action';
import { useDispatch } from 'react-redux';
import { loginEmailPassword } from '../actions/action';
import { loginGoogle } from '../actions/action';


const Login = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //dispatch(login(email, password));
    dispatch(loginEmailPassword(email, password));
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  }

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>


        <Container className="auth__social-networks">
          <Container
            className="google-btn"
            onClick={handleLoginGoogle}
          >
            <Container className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </Container>
          </Container>
        </Container>

     


      </Form>

    </div>
  )
}


export default Login;