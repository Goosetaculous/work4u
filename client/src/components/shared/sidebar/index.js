import React , { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class SideBar extends Component{
    render(){
        return (
            <div style={{paddingRight:"10px", marginTop:"1px"}}>
                <Card>
                    <CardHeader
                        title="Goose"
                        subtitle="Aranez"
                        avatar="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c27.0.160.160/p160x160/18622112_10158707024565453_346568630785298166_n.jpg?oh=4852f78ec885bf0653776a6092371503&oe=5A4929C4"
                    />
                    <CardTitle title="Expert in:" />
                    <CardText>
                       Moving,sleeping
                    </CardText>
                    <CardActions>
                        <FlatButton label="Post a Job" />
                        <FlatButton label="All Jobs" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default SideBar