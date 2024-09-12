
# create-command

Run the `npx maslow` command

<p align="center">
  <img src="assets\546a518619ea4ab2ce41a7abc7b5f179.png" alt="">
</p>

Choose `create-command`

<p align="center">
  <img src="assets\0866353282638e2c589aa12d8f182cef.png" alt="">
</p>

Name your command.

<p align="center">
  <img src="assets\681207fde934b7f2cc563d7006695d2a.png" alt="">
</p>

Mission accomplished !

<p align="center">
  <img src="assets\e87fd9fa9f85906280b0b5b66d33f620.png" alt="">
</p>

Inside your commands folder that you have set with `npx maslow set-commands-folder` , 
you will see a new folder named whatever your command is. 

<p align="center">
  <img src="assets\6b018b366b73d96e19d7ed815777fee9.png" alt="">
</p>

Let's check what's inside.

<p align="center">
  <img src="assets\b9101c6bcd9d4c27e867d39375d5a2af.png" alt="">
</p>

If you want your command to get some info from the user, keep the `template_prompts.txt` file, There's 4 placeholder prompts in the array, for testing. Delete this shit when you have seen what it looks like running the command the 1st time, and set the individual prompts in the array. They appear to the user in chronological order, as it is in the array.

Each individual prompt is a {
  // 'input' is a simple text prompt.
  // 'list' is a list of choices.
  // 'editor' is a text editor, so the user can type a paragragh
  "type": "input", or "list", or "editor",

  // Your prompt's name, without spaces, 
  // so you can access the user output in your code, 
  // or in your template generator. Keep the name short ;-)
  "name": "THE_PROMPT_NAME",

  // A message explaining to the user what info you need
  "message": "Type your birth year, please."
}

Here's a skeleton prompt:

```
{
  "type": "",
  "name": "",
  "message": ""
}
```

If you don't need any info from the user, delete the `template_prompts.txt` file. Then, no prompts will be shown to the user. If the `template_prompts.txt` file is present within your command folder, then the prompts show up, otherwise, they don't. Simple as that :-)

<p align="center">
  <img src="assets\8fa2514020ca273d92dc18b202638892.png" alt="">
</p>

There's a `TemplateFolder` folder in your command folder. Whatever files you put in there will be recreated in the folder path.join(process.cwd, outputFolder)

outputFolder is an additional prompt that's being added (pushed) to the `template_prompts.txt` prompt array, ONLY IF the `TemplateFolder` exists in your command folder. This prompt asks the user where he wants to create the generated folder, starting from his Terminal's current working directory.

If you don't need to generate a folder from a template, delete the `TemplateFolder` array, `template_edits.txt` file and `template_path_edits.txt` file, and no folder will be generated.
Well, technically, only the `TemplateFolder` folder deletion is necessary to prevent template generation, but since these other 2 files are only useful when a template is being generated, you might as well delete those 2 too ;-)

If you need to generate a folder from a template, keep the `TemplateFolder` folder,
and add your template files there. Then edit the `template_edits.txt` and `template_path_edits.txt` files. 

The `template_edits.txt` file allows you to replace placeholder texts in the template files source code, within `TemplateFolder` , with specific values from the user's prompts. `template_edits.txt` contains an array of replacements to be made.

Each individual text replacement is an object 

{ 
  // 'text' is the actual placeholder text that needs to be replaced, 
  // in your template files source code
  "text": "SomePlaceholderValue",

  // The name of the prompt whose value is what the placeholder text will be replaced with.
  //
  // So, to make things crystal clear, in this example replacement object,
  // the piece of text 'SomePlaceholderValue' will be replaced by whatever value the user has entered
  // for the the prompt 'THE_PROMPT_NAME' , 
  // and this replacement is done in every template file within `TemplateFolder`
  "promptName": "THE_PROMPT_NAME"
}

<p align="center">
  <img src="assets\73749443c00d637e16aff0840727094f.png" alt="">
</p>

The file `template_path_edits.txt` is the exact same mechanism as the `template_edits.txt` file,
but the replacements are made in the template file/folder paths, not in their source code.
So, to make things clear, this array of replacements allows you to rename the generated template files/folders based on user inputs.

<p align="center">
  <img src="assets\ccff2cc6116303c3b43fe420b644b48a.png" alt="">
</p>

The file `index.js` allows you to run your own custom Javascript code, to fulfill whatever purpose you need ;-) The `main` function is being executed after your user prompts have been collected, if you gather prompts, and also after generating the template, if you generate a template. 

If you just want to run your JS code without gathering prompts or creating template alongside, then of course, you can do so too, just delete the stuff as I described previously, and keep only the index.js file and the package.json file, in your command folder.

And at last, if you don't want to run any javascript code, then just delete the `index.js` file, and you're good to go. As you can see, you can do whatever you want with this simple command mechanism.

<p align="center">
  <img src="assets\711755f452be596304253b23815da64d.png" alt="">
</p>

To illustrate the template creation mechanism, I have added 2 dummy files in the `TemplateFolder` folder:

`cucu.js.txt` and `patate.py`

The default `template_edits.txt` and `template_path_edits.txt` files are doing some example replacements in those file's source code, and in the file paths too. Have fun creating something great, for the world ;-)

<p align="center">
  <img src="assets\c4ba2a42e01f93f144de099550703cba.png" alt="">
</p>

<p align="center">
  <img src="assets\9f198aad0404870fa814695eaa92d22f.png" alt="">
</p>