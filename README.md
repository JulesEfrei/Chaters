<div id="top"></div>

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  <img src="client/src/assets/img/logo.png" alt="Logo" width="80" height="80" />
  <!-- https://drive.google.com/uc?export=view&id=      => Google drive Link -->

  <h2 align="center">Chaters</h2>

  <p align="center">
    Real-time chat application
    <br />
    <!-- <a href="https://github.com/JulesEfrei/Chaters"><strong>Explore the docs</strong></a> -->
    <br />
    <br />
    <!-- <a href="https://github.com/JulesEfrei/Chaters">View Demo</a>
    · -->
    <a href="https://github.com/JulesEfrei/Chaters/issues">Report Bug</a>
    ·
    <a href="https://github.com/JulesEfrei/Chaters/pulls">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap / Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#credit">Credit</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Instant messaging web application with user management and use of websockets.

**State of the Project => Alpha (v.1.0.0)**


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project.
The application is composed of two parts. A front-end client part and a back-end API. 

* [React.js](https://reactjs.org/)
* [Sass](https://sass-lang.com)
* [Socket.io](https://socket.io)
* [NodeJs](https://nodejs.org/en/)
* [ExpressJs](https://expressjs.com/fr/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JulesEfrei/Chaters.git
   ```
3. Install NPM packages for Front-end & Back-end
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Run API and Front-end (Open two terminal)
   ```sh
    cd client/
    npm start
    cd server/
    npm start
   ```
5. Open your browser on the Front-end port (By default => _http://localhost:3000/_)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To test the application open two browser windows and go to the site. Create two accounts and start a conversation with the email of the second account. Try to send you a message

To test the API separately follow this [Documentation](https://github.com/JulesEfrei/Chaters/blob/main/server/README.md)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

Here is the roadmap of the project. Checked flags mean the features is out and unchecked flags mean that the feature is comming.

- [x] Creation of user account
- [x] Authentification with JWT
- [x] Build API
    - [x] Authentification routes
    - [x] User routes
    - [x] Conversation routes
    - [x] Message routes
- [x] Basic Front-end
- [ ] Settings
- [ ] Dark Mode
- [ ] Conversation in group
- [ ] Share files & images
- [ ] Re-design front-end

See the [open issues](https://github.com/JulesEfrei/Chaters/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Credit -->
## Credit

List of people

* [Me](https://github.com/JulesEfrei)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Linked'in - [Jules](https://www.linkedin.com/in/jules-bruzeau/)

GitHub Profile: [JulesEfrei](https://github.com/JulesEfrei/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information. If no license is available in the Chaters, it will be available one day, I hope.

<p align="right">(<a href="#top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/JulesEfrei/Chaters.svg?style=for-the-badge
[contributors-url]: https://github.com/JulesEfrei/Chaters/graphs/contributors -->
<!-- [stars-shield]: https://img.shields.io/github/stars/JulesEfrei/Chaters.svg?style=for-the-badge
[stars-url]: https://github.com/JulesEfrei/Chaters/stargazers -->
[forks-shield]: https://img.shields.io/github/forks/JulesEfrei/Chaters.svg?style=for-the-badge
[forks-url]: https://github.com/JulesEfrei/Chaters/network/members
[issues-shield]: https://img.shields.io/github/issues/JulesEfrei/Chaters.svg?style=for-the-badge
[issues-url]: https://github.com/JulesEfrei/Chaters/issues
[license-shield]: https://img.shields.io/github/license/JulesEfrei/Chaters.svg?style=for-the-badge
[license-url]: https://github.com/JulesEfrei/Chaters/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jules-bruzeau/
[product-screenshot]: images/screenshot.png