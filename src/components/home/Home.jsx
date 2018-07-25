import React from 'react';


class Home extends React.Component {

    addTrack(){
        if(this.trackInput.value !== ''){
            this.props.onAddTrack(this.trackInput.value);
            this.trackInput.value = '';
        }
    }

    render() {
        const { playlist } = this.props;
        return (
            <div>
                <input type="text" ref={(input) => { this.trackInput = input}}/>
                <button onClick={this.addTrack.bind(this)}>add track</button>
                <ul>
                    { playlist.map((track, index) => { return <li key={index}>{ track }</li> }) }
                </ul>
            </div>
        );
    }
}

export default Home;