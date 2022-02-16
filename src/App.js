// import './App.css';
import Messenger from './component/Messenger';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './component/theme/TemplateProvider';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <div className="App">
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
