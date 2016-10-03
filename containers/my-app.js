import React, {Component} from 'react';
import {Components} from 'exponent';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import * as meetingActions from '../store/actions.js';
import TitleBar from '../components/title-bar.js';

class MyApp extends React.Component {

    static propTypes = {
        loaded: React.PropTypes.bool.isRequired,
        load: React.PropTypes.func.isRequired,
    };

    componentDidMount() {
        setTimeout(() => {
            this.props.load()
        }, 500)
    }

    render() {
        if (this.props.loaded) {
            return (
                <View style={styles.container}>
                    <TitleBar />
                </View>
            );
        } else {
            return <Components.AppLoading />
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const mapStateToProps = function(state) {
    return {
        loaded: state.loaded,
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        load: () => {
            dispatch(meetingActions.loaded());
        },
    }
};

// @connect(state => ({
//   state: state.counter
// }))
class App extends Component {

    render() {
        const {state, actions} = this.props;
        return (
            <App
                loaded={state.loaded}
                {...actions}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyApp);