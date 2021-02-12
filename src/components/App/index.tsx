import React from 'react';
import Header from './../Header'

const App:React.FC = ({ children }) => {
  return (
    <>
		<Header />
		{children}
    </>
  );
}

export default App;
