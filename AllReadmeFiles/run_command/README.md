
# run-command

Run the `npx maslow` command

<p align="center">
  <img src="assets\0a14982d3d06fd06fe6bb55889943215.png" alt="">
</p>

Choose `run-command`

<p align="center">
  <img src="assets\b5e2553e9c8fb9c2d28a71408807b916.png" alt="">
</p>

Choose the command you want to run, from the list. In this example, I'm running the default command template, located at https://github.com/MaslowCorporation/AwesomeMaslowCommand

This command prompts the user for some info, then it creates a folder based on the contents of the folder `TemplateFolder`. It also runs the main() function from index.js , and prints some hello world to the console.

<p align="center">
  <img src="assets\db65dc15d5000cf99a232ae1651e5f87.png" alt="">
</p>

Give the required info. This info will be used to replace some values in generated template.

<p align="center">
  <img src="assets\cda703bc0717d8212e9b42cb164d8b0d.png" alt="">
</p>

<p align="center">
  <img src="assets\19099c30531cfd8b759894367331c4a7.png" alt="">
</p>

<p align="center">
  <img src="assets\6554040ebff800930424971b81793733.png" alt="">
</p>

<p align="center">
  <img src="assets\02ea0755f5bfbaf599c9f1eb3bdf9ece.png" alt="">
</p>

Since this default command generates a folder from a template, you'll be asked to name the output folder generated, starting from process.cwd (your current Terminal path).

In this example, I named the generated folder `GeneratedShizzle`

<p align="center">
  <img src="assets\0f843d7b2adee5581f088709d2a99778.png" alt="">
</p>

Success ! You can see the Hello World print from the index.js main() function !

<p align="center">
  <img src="assets\ace80a3c27018c0bf1a27f77318b693b.png" alt="">
</p>

You can check the `GeneratedShizzle` folder and see the shizzle ;-)

<p align="center">
  <img src="assets\5ed78d0b12c51205aae596083a2bc9a6.png" alt="">
</p>

For more info about how commands are created and how they work, check out [This documentation](../create_command/README.md)