
# create-backend-server

This command allows you to create a backend server. To begin/continue/simplify your backend developer journey !

Let's go !

Run the 

```
npx maslow
``` 

command

<p align="center">
  <img src="assets\6184b17cba1e032c761b728af2245fe0.png" alt="">
</p>

Choose ```create-backend-server```

<p align="center">
  <img src="assets\9f1d5f07615a3d40291918a2b02cc926.png" alt="">
</p>

You can also run the 

```
npx maslow create-backend-server
``` 

command directly

<p align="center">
  <img src="assets\ed7e9103ad29d6be471562758a16ca56.png" alt="">
</p>

Name your backend server. I named mine ```my-awesome-server```

<p align="center">
  <img src="assets\066e2ed7d7da61509a53036138c04708.png" alt="">
</p>

Success !

<p align="center">
  <img src="assets\aa4e4ad8fe5f94c356aca7af9e4a1a16.png" alt="">
</p>

You can check the newly created server folder

<p align="center">
  <img src="assets\71aec4a27bb0d38865273ba7924e61b2.png" alt="">
</p>

<p align="center">
  <img src="assets\ac9abf07d8ab34a3550845b06d4d058a.png" alt="">
</p>

Run the 

```
npm i
``` 

command at the root of your server folder, to install all the required dependencies.

If your computer runs Linux or MacOS, you need to install Redis before using the server.

On Windows, you don't need to install Redis. Go to the `Run the server` section ;-)

#### Redis installation Linux 

If you're using Linux, you need to install ```redis-server``` and ```redis-cli``` on your Linux.

Run this long spaghetti command to install the shizzle

```
sudo apt update; sudo apt install redis-server; sudo apt install redis-tools
```

#### Redis installation MacOS

If you're using MacOS, you need to install ```redis-server``` and ```redis-cli``` on your MacOS.

Open Terminal and run the following command, to install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can install Redis by running the following command:

```bash
brew install redis
```

This will install Redis, including the `redis-cli` (command-line interface) and `redis-server`.

#### Redis installation troubleshooting

Test redis-server using the 

```
npm run redis-server-unix
```

or 

```
npm run redis-server-win10
```

command.

If you get an error complaining about the port XXXX already being used, something looking like:

```
......
......
2786:M 22 Dec 2023 18:19:01.115 # Could not create server TCP listening socket *:XXXX: bind: Address already in use
```

You need to configure Redis to use a different port. follow these instructions:

##### Redis port setting Linux MacOS

Open the package.json at the root of your server folder.

You can use nano to do so, with this command:

```
sudo nano ./package.json
```

Find and modify the port setting: Look for the npm script named ```redis-server-unix``` 

```
"redis-server-unix": "redis-server --port XXXX",
```

Change the port number (e.g., 6380).

```
port 6380
```

Save and close the file.

Restart the Redis service for the changes to take effect. use the 

```
npm run redis-server-unix
``` 

command.

##### Redis port setting WINDOWS 10

Open the ```RedisWin10/redis.windows.conf``` file, inside your server folder, using a text editor like Notepad.

Find and modify the port setting: Look for the line that starts with ```port``` in the configuration file. 

```
port 6379
```

By default, it's set to 6379. Change this to the desired port number (e.g., 6380).

```
port 6380
```

Save and close the file.

Restart the Redis service for the changes to take effect. use the 

```
npm run redis-server-win10
``` 

command.


After making these changes, Redis will use the new port (in this example, port 6380). Remember to use the specified port whenever you connect to Redis (for example, when using redis-cli, specify -p 6380 to connect to Redis on the new port).

#### Run the server

At the root of your server folder, run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the 

```
npm run start-server-unix
``` 

command (for Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it, to see the code changes applied during dev.

If you encounter an error looking like this, when trying to start the server using the command:

```
npm run start-server-unix
```

```
SyntaxError: Unexpected token '?'
```

the issue is that your Node version is outdated, 
so run the commands below to update your Node.js version to the latest one:

```
sudo npm cache clean -f; sudo npm install -g n; sudo n stable; node -v
```

Then retry 

```
npm run start-server-unix
```

It should work successfully ! Visit http://localhost:8080/myAPI in your web browser, to see fire !!!

I'm aware that some parts of the documentations are critically under-documented, but in due time, things will get a lot more documented ;-)

In the meantime, check this part of the README, if you want to see more about backend server creation

[More info about backend server creation here](../CreateBackendServer/README.md)