# react-spdev-ourteam

> our team block with pagination and caraousel feature

[![NPM](https://img.shields.io/npm/v/react-spdev-ourteam.svg)](https://www.npmjs.com/package/react-spdev-ourteam) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-spdev-ourteam
```

## Usage

```jsx
import React, { Component } from 'react'
import { OurTeamComponent } from 'react-spdev-ourteam'
import 'react-spdev-ourteam/dist/index.css'

function App() {
  return (
    <div className="App">
      <OurTeamComponent />
    </div>
  );
}

export default App;
```


## Css

> Add below css to your css files like index.css or app.css

a {
	text-decoration: none;
}

.text-info {
	color: #31708f;
}

.physicianList ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

.physicianList ul li {
	display: inline-block;
	width: 240px;
	margin-right: 15px;
	margin-bottom: 15px;
}

.physicianBox {
	border: 1px solid #ddd;
	color: #333;
	margin-bottom: 20px;
	position: relative;
	padding-bottom: 20px;
	background-color: #f5f5f5;

}

.physicianBox .physicianPic {
	padding: 15px 0;
	background-color: #fff;
	text-align: center;
}

.physicianBox .physicianPic img {
	border: 6px solid #f8f8f8;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	transition: all 0.3s ease 0s;
	margin: 0 auto;
	height: 120px;
	width: 120px;
}

.physicianInfo {
	padding: 10px;
	text-align: center;
	border-top: 1px solid #eee;
}

.physicianInfo h6 {
	font-size: 16px;
	margin: 0;
}

.physicianBox strong {
	color: #444;
}

.physicianBox p {
	font-size: 13px;
	margin: 0;
	line-height: 22px;
}

.physicianBio {
	position: absolute;
	right: 0;
	bottom: 3px;
}

.physicianModal {
	text-align: center;
}

.physicianModal .physicianPic img {
	border: 6px solid #f8f8f8;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	transition: all 0.3s ease 0s;
	margin: 0 auto;
	height: 180px;
	width: 180px;
}

.physicianModal .info p,
.physicianModal .info .text-info {
	margin: 0;
}

.showBioBtn {
	background-color: #337ab7;
	padding: 5px 10px;
	color: #fff;
	font-size: 12px;
}

.container {
	width: 1275px;
	margin: 0 auto;
}

.physicianList ul li {
	width: 20px;
	margin: 0;
}

ul.slick-dots {
	margin: 0 auto;
}

.slick-prev:before,
.slick-next:before {
	color: #000 !important;
}

.slick-slider .slick-slide {
	padding: 0 15px;
}


## License

MIT © [softpulsedev21](https://github.com/softpulsedev21)
