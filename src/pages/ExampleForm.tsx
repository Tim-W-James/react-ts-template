import { UserContext } from "@context/UserContext";
import { FormEventHandler } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { BsFillPersonCheckFill } from "react-icons/bs";

interface FormElements extends HTMLFormControlsCollection {
  firstNameInput: HTMLInputElement;
  lastNameInput: HTMLInputElement;
  usernameInput: HTMLInputElement;
  emailInput: HTMLInputElement;
}
interface UserFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const ExampleForm: React.FC<{
  heading: string;
}> = ({ heading }) => {
  const { userState, setUserState } = useContext(UserContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit: FormEventHandler<UserFormElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setUserState &&
        setUserState({
          firstName: form.elements.firstNameInput.value,
          lastName: form.elements.lastNameInput.value,
          username: form.elements.usernameInput.value,
          email: form.elements.emailInput.value,
        });
    }
    setValidated(true);
  };

  return (
    <Container>
      <h2>{heading}</h2>
      <hr />
      <Form noValidate onSubmit={handleSubmit} validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstNameInput" md="6">
            <Form.Label>First name</Form.Label>
            <Form.Control
              defaultValue="John"
              placeholder="First name"
              required
              type="text"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="lastNameInput" md="6">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              defaultValue="Doe"
              placeholder="Last name"
              required
              type="text"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="emailInput" md="6">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="example@example.com"
              required
              type="email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="usernameInput" md="6">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                aria-describedby="inputGroupPrepend"
                placeholder="Username"
                required
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            feedback="You must agree before submitting."
            feedbackType="invalid"
            label="Agree to terms and conditions"
            required
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
      {userState && (
        <>
          <br />
          <BsFillPersonCheckFill />
          {` Welcome ${userState.firstName} ${userState.lastName}`}
        </>
      )}
    </Container>
  );
};

export default ExampleForm;
