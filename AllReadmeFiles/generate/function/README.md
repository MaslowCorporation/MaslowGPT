
# generate (a function written in some desired computer language)

This command allows you to generate a function, based on your description (the code's language, logic, etc...) , using one of OpenAI's GPT models. 

This function is created in a folder/file specified by you.

Let's go !

Run the 

```
npx maslow
``` 

command.

<p align="center">
  <img src="assets\9dea2b11a5170fb03883a7a7b8577858.png" alt="">
</p>

Choose ```generate```

<p align="center">
  <img src="assets\9dbe598cc8e5e1de5192f1c0cd85b7c3.png" alt="">
</p>

You can also run the 

```
npx maslow generate
``` 

command directly.

<p align="center">
  <img src="assets\dc498f3f81585209a293df02ccca5787.png" alt="">
</p>

Choose ```Create a function ....```

<p align="center">
  <img src="assets\2f43f049aca962ea17c2032f9a50c5c5.png" alt="">
</p>

Give a name to this function. For this example, I call this function ```TestFunction```. 

<p align="center">
  <img src="assets\b1e7610e251ed145948bfdac21b9f3e3.png" alt="">
</p>

Type an approximation of the folder where you want to create the function's folder. 

Typically, in a real life case, we add functions and code somewhere in the ```src``` folder of an app, like src/services or similar, so you would type ```src``` as an approximation folder, for example. To get in the next step a list of all the subfolders within this src folder.

<p align="center">
  <img src="assets\8035d9c2234ea3c1835956275da2ab01.png" alt="">
</p>

Based on the approximation you just gave, you'll get a list of all the folders and subfolders starting from this approximation. 

Choose the desired folder where you want to create the function folder. The function folder will be created inside whatever folder you choose in this list.

Typically, in a real life case, you would do something like creating some service in the ```src/services``` folder. So in this list, you would pick ```src/services```

<p align="center">
  <img src="assets\2318e7f02acd8c704d896b3852d3d5e0.png" alt="">
</p>

You can choose the first version of the code history if you want (an integer between 0 and whatever ;-) or just press <Enter> to start with v1.0

<p align="center">
  <img src="assets\e477418589454aab27c3f81fdf90ce0a.png" alt="">
</p>

Type the name of computer language you want to function to be in. In my case I need a ```Javascript``` function. But your needs are unique to you, you may need some ```Python```, or some ```Racket```, or some ```C++```, so type whatever you need here.

<p align="center">
  <img src="assets\2f730d01abc7d169fa01cd9396d73c89.png" alt="">
</p>

Here, type the file extension (without a dot) of the generated function code file. In my case, since I wabnt Javascript code, I typed ```js```. But if you generate some Python code, you would type ```py```

<p align="center">
  <img src="assets\f942ef221857b25ad823e998d2d070b1.png" alt="">
</p>

You will be asked to describe the function's arguments. Press <Enter> to open the text editor.

<p align="center">
  <img src="assets\272d6905363c54d6928d2c191cdbdf83.png" alt="">
</p>

In my case, I'm trying to make an example function that adds together 2 numbers x and y, so here's my stoopid description ;-) ```x (a number), y (a number)```

<p align="center">
  <img src="assets\2f2b1054d79e4dc3afc552307702fc61.png" alt="">
</p>

Press ```F10``` to save the text.

Press ```Y``` to confirm the saving.

<p align="center">
  <img src="assets\e4e653d4bb6c5471285f7bc2580f496e.png" alt="">
</p>

You will be asked to describe what this function does. Press <Enter> to open the text editor.

<p align="center">
  <img src="assets\31b0d22e0968b3bed98806aacb0efb0c.png" alt="">
</p>

Here you give a SIMPLE, SHORT, 1 sentence long description of what you want your function to do. In my dummy example, here's my description: ```Add together x and y, and return the result.```

<p align="center">
  <img src="assets\fce1572fe5b5435e060878edd63eba86.png" alt="">
</p>

Now you'll be asked to give a detailed description of what you want your function to do. Press <Enter> to open the editor.

<p align="center">
  <img src="assets\a9aa002965a930eea091cb2c97676892.png" alt="">
</p>

By default, the content of this description is the same as the short description.

Here you give a LONG and DETAILED description of what you want your function to do. In my dummy example, I just keep the same short description I just typed earlier: ```Add together x and y, and return the result.```.

But if your function is anything serious, you must provide here a clear description of what you need.

<p align="center">
  <img src="assets\65a360405627882f762254a87071d3b5.png" alt="">
</p>

Press ```F10``` to save the text.

Press ```Y``` to confirm the saving.

Now, the code generation will start ! Sit back and enjoy a lemonade ;-)

<p align="center">
  <img src="assets\e0b3c46c70cb9c9ce166b37a2614864c.png" alt="">
</p>

Success !!

<p align="center">
  <img src="assets\5fde83b3b056b398e39204118fd5b856.png" alt="">
</p>

Now check the created folder.

<p align="center">
  <img src="assets\4c8c860f81fb86db457a4da3e9cd1422.png" alt="">
</p>

As you can see, a function folder has been created inside the folder I chose in the list of folders earlier.

In this stoopid example, I created a ```TestFunction``` folder inside a ```TestFunction``` parent folder.

<p align="center">
  <img src="assets\ad77a277696ff2ae0ac9e531b0b461fb.png" alt="">
</p>

The generated function folder contains several files:

<p align="center">
  <img src="assets\0033edef042910d9b0e10c5570d68d75.png" alt="">
</p>

- A code file, containing the generated code. In my case, it's ```TestFunction.js```. Yours will vary ;-)

<p align="center">
  <img src="assets\53e75e1b696cdddd2a3814b40f582138.png" alt="">
</p>

- A Maslow.json file containing metadata 5DON'T TOUCH THI FILE, OTHERWISE THE CODE RE-GENERATION WILL NOT WORK)

- A prompts/ folder containing the code generation prompts you just typed earlier (these files are used for code re-generation. You can edit their contents as you wish, but don't DELETE the files.)

<p align="center">
  <img src="assets\c1ce7a0008245ee741706c13c274c824.png" alt="">
</p>

- A pieces/history/ folder containing code generation history files for this function.

<p align="center">
  <img src="assets\83ab8e94263de97b7737ef6f6cffe24d.png" alt="">
</p>

Mission accomplished !!
