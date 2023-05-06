import React, {useEffect, Component} from 'react';
import RootNavigators from './src/navigators/RootNavigator';
import DefaultToast from './src/components/Toast';

type Props = {};
type State = {
  isInternetReachable: boolean;
};

class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isInternetReachable: true,
    };
  }

  onConnectionChange = (state: {isInternetReachable: boolean}) => {
    this.setState({isInternetReachable: state.isInternetReachable});
  };
  componentDidMount() {}
  render() {
    const {isInternetReachable} = this.state;
    return (
      <>
        {isInternetReachable === true && (
          <>
            <RootNavigators />
          </>
        )}

        <DefaultToast />
      </>
    );
  }
}
const App = () => {
  return <Root />;
};

export default App;
