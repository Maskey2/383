import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Logo from '../../assets/logo.jpg'
import { createMuiTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import Nav from '../features/Nav';



// const styles = withStyles(theme => ({
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     logo: {
//         height: '175px'
//     },
//     color: {
//         background: '#047923',
//         color: 'white',
//         '&:hover': {
//             background: '#ffa500',
//             color: 'white',
//         }
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));
//const classes  = useStyles();

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            islogin: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(event) {
        this.setState({ username: event.target.value });
    }
    handlepassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

    }

    handleClick() {
        let FormData = {
            Username: this.state.username,
            Password: this.state.password
        }
        //  console.log(FormData);
        fetch("https://localhost:44346/api/authentication/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData)
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('invalid login');
                }
            })
            .then((response) => {
                this.setState({ islogin: true });
                console.log(response);
                sessionStorage.setItem('userData', JSON.stringify(response));
            })
            .catch(error => {
                console.error("error:", error)
                alert(error);
            });


    }
    render() {
        const theme = createMuiTheme();
        const { username, password } = this.state;
        if (this.state.islogin) {
            return <Redirect to="/farmfield" />
        }
        return (
            <div>
                <Nav />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="container" style={{
                        marginTop: theme.spacing(8),
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <img src={Logo} className="container1" style={{
                            height: '175px'
                        }} alt="Logo" />

                        <form className=" container2" style={{
                            width: '100%',
                            marginTop: theme.spacing(1),
                        }}
                            onSubmit={this.handleSubmit}
                        >
                            <TextField
                                name="Email"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoComplete="username"
                                value={username}
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={this.handlepassword}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={this.handlepassword}
                            />
                            <Button
                                className="button"
                                type="submit"
                                value="Submit"
                                style={{
                                    margin: theme.spacing(3, 0, 2),
                                    background: '#047923',
                                    color: 'white',
                                    textAlign: "center",
                                    '&:hover': {
                                        background: '#ffa500',
                                        color: 'white'
                                    }
                                }}
                                onClick={this.handleClick} >
                                Register
                         </Button>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Signup;