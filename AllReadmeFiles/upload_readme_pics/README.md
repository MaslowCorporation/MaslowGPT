
# upload-readme-pics

This command allows you to upload all the photos of a README.md file, to a ImgBB account, then replaces all the local photo paths in this README, with the uploaded pic URLS !

Let's say, for example, that you have a `Desktop/READMEFixes/README.md` file and a `Desktop/READMEFixes/pics` folder containing this README's pics. 

<p align="center">
  <img src="assets\346f6ee093da69f8019182178788ffa4.png" alt="">
</p>

To use this tool, run the 

```
npx maslow
``` 

command, in a parent folder of the folder containing the README. (in this example, the Terminal is located in `Desktop`, a parent of `Desktop/READMEFixes/README.md`)

<p align="center">
  <img src="assets\f819ad0831f538a301d49e7cceab4ffc.png" alt="">
</p>

Choose `upload-readme-pics`

<p align="center">
  <img src="assets\00805a184e0dc0de7d048ff7c7e64e18.png" alt="">
</p>


Enter/Paste your ImgBB API Key when prompted.

<p align="center">
  <img src="assets\895b251490a5699e7dca346e02d43ef2.png" alt="">
</p>

To get a ImgBB API Key, it's very simple, and it's free ! Go to https://imgbb.com and create an account, then go to https://api.imgbb.com and get your API Key there.

Once you provided the API key, you'll be prompted to give an approximation of the folder containing the README. In my case, my Terminal is in `Desktop` , and the desired README is in `Desktop/READMEFixes/README.md` , so `READMEFixes` is a good approximation

<p align="center">
  <img src="assets\4cc2e772d7f57ee7d06912bf60332426.png" alt="">
</p>

Now choose the exact folder containing the README.md file, from the list of folders provided from your approximation.

<p align="center">
  <img src="assets\450b679e61a55864064aaf95a60c758a.png" alt="">
</p>

If your ImgBB API key is valid, and your Internet is OK, your pics will upload and the new README will be generated

<p align="center">
  <img src="assets\9196329c2604cd8cd35b5dac9b75ed63.png" alt="">
</p>

Check the folder containing your original README.md

<p align="center">
  <img src="assets\96082f3220ee4913fda653b2998209fd.png" alt="">
</p>

you should see a new `README_OG.md` file. This file contains the original README.md content, just in case you want to revert to the local pic README.

<p align="center">
  <img src="assets\26ee5070ff25faa9769d30a1f6023874.png" alt="">
</p>

The `README.md` file now contains the ImgBB URLS instead of the local photo paths

<p align="center">
  <img src="assets\5105311903b077e76300be1ca1270c82.png" alt="">
</p>
