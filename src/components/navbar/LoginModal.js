import React, { useState } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  useInput,
  Spacer,
  Badge,
} from "@nextui-org/react";
import "../../styles/LoginModal.css";
import { AppName } from "../../data/Variables";
import { Call, Hide, Message, Password, Show, User } from "react-iconly";
import interest_selection from "../../data/interest_selection.json";
import DropwdownCategory from "../CreateLobby/DropdownCategory";



export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    setIsRegistered(false);
    console.log(userObject);
  };

  const { value, reset, bindings } = useInput("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState([]);

  const userObject = Object.create({
    email: email,
    password: password,
    passwordConfirm: repeatPassword,
    firstName: name,
    lastName: surname,
    phone: phoneNumber,
    username: username,
    interests: interests,
  });

  function handleInterests(interest) {
    if (!interests.includes(interest)) {
      setInterests((prev) => [...prev, interest]);
    } else {
      setInterests((prev) => prev.filter((i) => i !== interest));
    }
  }

  const [category, setCategory] = useState(new Set(["Pick Your Interests"]));

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      <Button
        color={""}
        css={{
          color: "$secondary",

          backgroundColor: "$white",
          borderColor: "gray",
          border: "1px solid $secondary",
        }}
        auto
        onClick={handler}
        onPress={handler}
      >
        <span style={{ fontWeight: 700 }}>Sign Up</span>
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to <strong>{AppName}</strong>
          </Text>
        </Modal.Header>
        <Modal.Body>
          {isRegistered && (
            <div>
              <Input
                clearable
                bordered
                fullWidth
                value={name}
                onChange={(event) => setName((prev) => event.target.value)}
                color="primary"
                size="lg"
                placeholder="First Name"
                css={{ width: "48%" }}
              />

              <Input
                clearable
                bordered
                fullWidth
                css={{ width: "48%", float: "right" }}
                color="primary"
                size="lg"
                placeholder="Last Name"
                value={surname}
                onChange={(event) => setSurname((prev) => event.target.value)}
              />
            </div>
          )}

          <Input
            {...bindings}
            clearable
            bordered
            fullWidth
            size="lg"
            shadow={false}
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail((prev) => event.target.value)}
            contentLeft={<Message set={"curved"} fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername((prev) => event.target.value)}
            contentLeft={<User set={"curved"} fill="currentColor" />}
          />
          {helper.text && <Spacer y={0.01} />}
          <Input.Password
            clearable
            bordered
            value={password}
            onChange={(event) => setPassword((prev) => event.target.value)}
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password set={"curved"} fill="currentColor" />}
            visibleIcon={<Hide set="bold" fill="currentColor" />}
            hiddenIcon={<Show set="bold" fill="currentColor" />}
          />
          {isRegistered && (
            <>
              <Input.Password
                clearable
                value={repeatPassword}
                onChange={(event) =>
                  setRepeatPassword((prev) => event.target.value)
                }
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Repeat Password"
                contentLeft={<Password set={"curved"} fill="currentColor" />}
                visibleIcon={<Hide set="bold" fill="currentColor" />}
                hiddenIcon={<Show set="bold" fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                value={phoneNumber}
                onChange={(event) =>
                  setPhoneNumber((prev) => event.target.value)
                }
                color="primary"
                size="lg"
                placeholder="Phone Number"
                contentLeft={<Call set={"curved"} fill="currentColor" />}
              />
            </>
          )}

          {/* {console.log(interests)} */}
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          {isRegistered && (
            <>
              <Row justify="center">
                <Text>
                  <span>Pick Your Interests</span>
                </Text>
              </Row>
              {/* {console.log(interest_selection)} */}
              <center>
                {interest_selection.map((interest) => (
                  <Badge
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      handleInterests(interest.interest);
                    }}
                    style={{ margin: 2, cursor: "pointer" }}
                    isSquared
                    variant={"flat"}
                    color={
                      interests.includes(interest.interest)
                        ? "success"
                        : "default"
                    }
                    css={{
                      borderColor: interests.includes(interest.interest)
                        ? "green"
                        : "",
                    }}
                  >
                    {interest.interest}
                  </Badge>
                ))}
              </center>
            </>
          )}
          <Row justify="center"></Row>
        </Modal.Body>
        <Modal.Footer css={{ justifyContent: "space-between" }}>
          <Button
            auto
            light
            onClick={() => setIsRegistered((prev) => !prev)}
            css={{ padding: 8, margin: 0 }}
            color={""}
          >
            {isRegistered ? "Already Registered?" : "Not registered?"}
          </Button>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            {isRegistered ? "Sign in" : "Sign Up"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

