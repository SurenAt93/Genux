# Genux Project

## Installing

### Dependencies

- NodeJs
- Npm
- Gulp4
- Git
- Webpack

### Install Dependencies

#### On Linux
Open terminal --> Ctrl + Alt + t
```
 sudo apt-get install git
 sudo apt-get install nodejs
 sudo npm install -g n
 sudo n stabile
 node --version // output: 6.5 or 6.6
 sudo npm i -g gulpjs/gulp#4.0
```

#### On Windows
***git***   --> Download and install git --> [a link](https://git-scm.com/download/win) <br>
***node***  --> Download and install latest version NodeJs from official site --> [a link](https://nodejs.org/en/)
Open CMD
```
 node --version // output: 6.5 or 6.6
 // install gulp4
 npm i -g gulpjs/gulp#4.0
```

### git clone app

#### On Linux
Open terminal --> Ctrl + Alt + t
```
 cd Document
 git clone https://github.com/SurenAt93/Genux.git
 cd Genux
```

#### On Windows
Open CMD
```
 git clone https://github.com/SurenAt93/Genux.git
 cd Genux
```

### Install package.json dependencies

#### On Linux
In terminal
```
 npm i
```

#### On Windows
In CMD
```
 npm i
```

## Run app

#### On Linux
In terminal
```
 node app.js
```

#### On Windows
In CMD
```
 node app.js
```
You should see log: "CONNECT"

### Run Gulp Task from html, css development

#### On Linux
Open new terminal --> Ctrl + Alt + t
```
 cd Documents/Genux/public/GenuxApp/
 gulp AccountPage:dev:mockup
```

#### On Windows
Open new CMD
```
 cd Documents/Genux/public/GenuxApp/
 gulp AccountPage:dev:mockup
```
