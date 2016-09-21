# Genux Project

## Installing

### Dependencies

- NodeJs
- Npm
- Git

### Install Dependencies

#### On Linux
Open terminal --> Ctrl + Alt + t
```
 sudo apt-get install git
 sudo apt-get install nodejs
 sudo npm install -g n
 sudo n stabile
 node --version // output: 6.5 or 6.6
```

#### On Windows
***git***  --> Download and install git --> [a link](https://git-scm.com/download/win) <br>
***node*** -->Download and install latest version NodeJs from official site --> [a link](https://nodejs.org/en/)
Open CMD
```
 node --version // output: 6.5 or 6.6
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
Open terminal --> Ctrl + Alt + t
```
 npm i
```

#### On Windows
Open CMD
```
 npm i
```

## Run app

#### On Linux
Open terminal --> Ctrl + Alt + t
```
 node app.js
```

#### On Windows
Open CMD
```
 node app.js
```
You should see log: "CONNECT"

### Run Gulp Task from html, css development

#### On Linux
Open terminal --> Ctrl + Alt + t
```
 cd Documents/Genux/public/GenuxApp/
 gulp AccountPage:dev:mockup
```

#### On Windows
Open CMD
```
 cd Documents/Genux/public/GenuxApp/
 gulp AccountPage:dev:mockup
```
