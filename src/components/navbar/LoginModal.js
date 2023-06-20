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
} from "@nextui-org/react";

import { AppName } from "../../data/Variables";
import { Hide, Message, Password, Show, User } from "react-iconly";
import DropwdownCategory from "../CreateLobby/DropdownCategory";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [category, setCategory] = useState(new Set(["Pick Your Interests"]));
  const { value, reset, bindings } = useInput("");

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
          <div>
            <Input
              clearable
              bordered
              fullWidth
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
            />
          </div>

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
            contentLeft={<Message set={"curved"} fill="currentColor" />}
          />
          {helper.text && <Spacer y={0.01} />}
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password set={"curved"} fill="currentColor" />}
            visibleIcon={<Hide set="bold" fill="currentColor" />}
            hiddenIcon={<Show set="bold" fill="currentColor" />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Repeat Password"
            contentLeft={<Password set={"curved"} fill="currentColor" />}
            visibleIcon={<Hide set="bold" fill="currentColor" />}
            hiddenIcon={<Show set="bold" fill="currentColor" />}
          />
          <DropwdownCategory
            selected={category}
            setSelected={setCategory}
            type={"multiple"}
          />

          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <Row justify="center">
            <Button
              light
              onPress={() =>
                setIsRegistered((prev) => !prev) + console.log(isRegistered)
              }
              color={""}
            >
              Not registered yet?
            </Button>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
