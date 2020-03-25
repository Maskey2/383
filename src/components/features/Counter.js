import React from "react"
import info from './Productinfo'
import { Typography, Button, Grid, GridList } from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleDecrease() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    render() {
        const num = this.state.count;
        return (
            <div style={{ paddding: '10px' }} align="center">
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography > <div align="center" style={{ paddingBottom: '10px' }}>
                            <Button variant="outlined" color="primary" >Choose Quanity</Button></div></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <p>
                            Quanity: {num} bucket/s         </p>
                        <div style={{ paddingBottom: '10px' }}>
                            <Button size="small" variant="outlined" color="secondary" onClick={this.handleIncrease}>Increase</Button>
                            <Button size="small" variant="outlined" color="secondary" onClick={this.handleDecrease}>Decrease</Button>
                        </div>
                        <br></br>
                        <Typography > <div align="center" style={{ paddingBottom: '10px' }}>
                            <Link to='/checkout' style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" color="primary">Buy Ticket</Button>
                            </Link>
                        </div></Typography>

                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default Counter
