import { Button, Container, Form, Header } from "semantic-ui-react";
import useAuthentication from "../../hooks/useAuthentication";

function Login() {
    const { login, setValue, data } = useAuthentication();

    return (
        <Container style={{ display: "flex", justifyContent: "center"}}>
            <Form style={{
                padding: "20px",
                width: "400px"
            }}>
                <Header as="h2">Login</Header>
                <Form.Field>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email..." value={data.email} onChange={setValue("email")} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." value={data.password} onChange={setValue("password")} />
                </Form.Field>
                <Button onClick={login}>Login</Button>
            </Form>
        </Container>
    )
}

export default Login;