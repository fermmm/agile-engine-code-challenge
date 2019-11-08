import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import MainPage from '../pages/MainPage/MainPage';

class App extends React.Component {
   componentDidMount(): void {
      document.title = 'Agile Engine challenge - Fernando Medina';
   }

   render(): JSX.Element {
      return (
         <ErrorBoundary>
            <MainPage />
         </ErrorBoundary>
      );
   }
}

export default hot(module)(App);
