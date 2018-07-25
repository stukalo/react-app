import { connect } from "react-redux";
import component from './Home';

export default connect(
    state => ({
        playlist: state.playlist
    }),
    dispatch => ({
        onAddTrack: (track) => {
          dispatch({ type: 'ADD_TRACK', payload: track })
        }
    })
)(component);