
# make-code-fix

This command creates/updates the ```code_fix.txt``` file in your code folder 
(a code folder generated with ```generate-code```). 

This ```code_fix.txt``` file is where you can specify the fixes you want in your code.

Let's go !

First, a quick explanation. When you generate some code using the ```generate-code``` command, then a ```code_fix.txt``` is created. This file contains a text prompt containing the latest code generated, along with an area where you can specify what's wrong in the code. This text within ```code_fix.txt``` is then used to regenerate the code. That's the prompt that's being used in the OpenAI GPT Completion.

Let's say you manually modified the generated code file

(for example ```HelloWorldPrompt.js``` in the example code of ```generate-code```)

and you later want to apply some additional fixes via A.I.

In this case, the ```code_fix.txt``` file is not valid anymore since the original ```HelloWorldPrompt.js``` file content has been edited by you. 

In order to update the ```code_fix.txt``` file of the code folder, to reflect the manual changes applied to the generated code file, you can use the ```make-code-fix``` command.

<p align="center">
  <img src="assets\f93033d080592130dd129313e91b18d8.png" alt="">
</p>

To do so, you can use the 

```
npx maslow make-code-fix path/to/code/folder
``` 

command, to update the contents of the ```code_fix.txt``` file in the code.

<p align="center">
  <img src="assets\204355f998a947dda49e169204f8b006.png" alt="">
</p>

Once the command has done it's job successfully, then the ````code_fix.txt`` file within the code folder specified, will be updated.

<p align="center">
  <img src="assets\23f627485d2698e2b370e70a82a4876d.png" alt="">
</p>

As you can see, the manual changes applied in the ```HelloWorldPrompt.js``` file, are now visible in the ```code_fix.txt``` file

<p align="center">
  <img src="assets\8943d1baeacf51b8d4c3058a3660bbaf.png" alt="">
</p>