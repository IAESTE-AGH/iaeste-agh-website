import React from 'react';
import './App.css';
import Carousel from './carousel';

function App() {
  return (
    <div className="App">
      <div className="text">&emsp;&emsp;Oni nam zaufali, teraz kolej na ciebie!</div>
	  <p style={{ margin: '50px'}}></p>
      <Carousel
        direction="ltr"
        images={[
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
        ]}
      />
	  <p style={{ margin: '35px'}}></p>
      <Carousel
        direction="rtl"
        images={[
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
          'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
		  'https://freelogopng.com/images/all_img/1657952217google-logo-png.png',
        ]}
      />
    </div>
  );
}

export default App;
