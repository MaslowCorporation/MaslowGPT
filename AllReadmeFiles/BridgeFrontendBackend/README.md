
## Implement your backend features in your Android app

Great ! Now it's time to link your server to your Android app.

To do so, we're going to create a Javascript/Typescript SDK for your server.

Step outside of your server folder and android app folder, then run the command 

```
npx maslow create-npm-package
``` 

. 

You can also run 

```
npx maslow
``` 

, then select ```create-npm-package``` from the list of commands.

<p align="center">
  <img src="assets\56a4752ca6f57d6995fcad730908626f.png" alt="">
</p>

Give a name to your SDK. I called mine ```maslow-gpt-sdk```. Call yours something else, whatever you want.

<p align="center">
  <img src="assets\c04963fdda5d95daa1de4328a6a3641b.png" alt="">
</p>

Your SDK has been created in it's own folder.

<p align="center">
  <img src="assets\dea93417ec566900bb9782195c3e5e94.png" alt="">
</p>

In your SDK folder, open the `src/constants/constants.ts` file, and set the `api_base_url_tailscale` key to `http://tailscale_ip_of_computer:8081`

Use the Search and Replace feature of your IDE of choice, to replace every instance of `Constants.api_base_url_local` with `Constants.api_base_url_tailscale` , inside your SDK folder. (VS Code shortcut for the Search and Replace, is `CTRL+SHIFT+H`)

### Okay, Let's continue !

This SDK is a Typescript NPM package. In order to install this SDK in your Android app, during it's development cycle, you will need a tool called ```Verdaccio```.

Run the 

```
npm i -g verdaccio
``` 

command to install Verdaccio globally in your computer.

<p align="center">
  <img src="assets\6f28c86cc0f824e4d7becc9f505c7c0d.png" alt="">
</p>

Note: On Windows, to delete all the verdaccio published packages, delete the folder C:/Users/username/AppData/Roaming/verdaccio/storage

Right now, the SDK is not yet available on Verdaccio, so if you try to install it in your Android app, there will be an error.

Run the 

```
npx verdaccio
``` 

command to start Verdaccio.

<p align="center">
  <img src="assets\88c2786938a9f306a055eb5919e429c4.png" alt="">
</p>

<p align="center">
  <img src="assets\d08f51debc0ff4e7875473adca7168f9.png" alt="">
</p>


Navigate to the root of your SDK folder, and run the 

```
npm i
``` 

command to install required dependencies.

<p align="center">
  <img src="assets\3e64adf82006d39c3b3c1499f968aa81.png" alt="">
</p>

If this is the first time using Verdaccio, run the 

```
npm adduser --registry http://localhost:4873/
``` 

command to create a Verdaccio account. Give a username, password, and email. Give it whatever value you want. Note these values on paper, or somewhere safe in your computer.

At the root of your SDK folder, run the 

```
npm run publish:test
``` 

command to install your SDK on Verdaccio.

<p align="center">
  <img src="assets\96129f230dd4d4d0e5f0dbc113b36dba.png" alt="">
</p>

If there's no build errors in your SDK, and your 

```
npx verdaccio
``` 

is running, then you should get a successful install of your SDK on Verdaccio.

<p align="center">
  <img src="assets\d0e62375ae52578b17d97076353c61f0.png" alt="">
</p>

Go to http://localhost:4873 to see your SDK in Verdaccio

<p align="center">
  <img src="assets\0503a6190a774ebd307982870f0fcef3.png" alt="">
</p>


open the ```.npmrc``` file at the root of your Android app folder.

<p align="center">
  <img src="assets\a0fc2328dba79a7ad558305a188651bd.png" alt="">
</p>

Uncomment the code that's there

<p align="center">
  <img src="assets\e884c05a6b34c565c10c3dda275f28e0.png" alt="">
</p>

<p align="center">
  <img src="assets\8a9da7f9a644c07bb8f6b8dd1c9704d1.png" alt="">
</p>

Navigate to the root of your Android app folder, then run the command 

```
npm i your_sdk_name@latest
```

<p align="center">
  <img src="assets\38ac1895a82b47fa3dcb257e8cc39816.png" alt="">
</p>

Once your SDK has been successfully installed in your Android app, you should see it in the ```scripts``` section of the package.json of your Android app.

<p align="center">
  <img src="assets\41e464e385f236428e405fc0d77b554d.png" alt="">
</p>

<p align="center">
  <img src="assets\0cf127a975fccfb5796805d0eb09666f.png" alt="">
</p>

Open the file ```src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/Custom/bits_and_pieces/OnAPISubscribeButtonClicked.js```

Uncomment all the commented code and imports in this file

<p align="center">
  <img src="assets\b2226ebc6355b8024ca505bc9030e139.png" alt="">
</p>

<p align="center">
  <img src="assets\2713924e3d46d691f57cb624db0f5719.png" alt="">
</p>

Replace ```YourOwnSDK``` with a custom name of your choice

Replace ```your-own-sdk``` with the name of your SDK.

<p align="center">
  <img src="assets\e51984cfeeb37b2bd2a7a14fbf6ea8e4.png" alt="">
</p>

Uncomment the code, and replace ```YourOwnSDK``` with the same custom name you have just chosen above, for the first ```YourOwnSDK``` in the import.

<p align="center">
  <img src="assets\688f98f4b34f4102016c260057716bec.png" alt="">
</p>

<p align="center">
  <img src="assets\ef51babb0b92bfb1ede1e5b5b7ec2e7e.png" alt="">
</p>

<p align="center">
  <img src="assets\123cfaab6f15f7d0f44667ca3f0c57d3.png" alt="">
</p>

<p align="center">
  <img src="assets\d61e79ea58a02fb93df6c00f286e4874.png" alt="">
</p>

<p align="center">
  <img src="assets\67a946af01226a0673c5497b4bb3c7fb.png" alt="">
</p>

Open the file ```src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/Custom/bits_and_pieces/OnBuy5KAPICreditsButtonClicked.js```

Do the exact same uncommenting and replacing you just did in the previous file.

<p align="center">
  <img src="assets\a2281f62aeb59ca4e5d2b2dd67b12419.png" alt="">
</p>

<p align="center">
  <img src="assets\e785c8e06e09591f058c16d36651b554.png" alt="">
</p>

<p align="center">
  <img src="assets\df96cb18e3e5b71b4605b3d0afb29cea.png" alt="">
</p>

<p align="center">
  <img src="assets\1e8320bac5a3fc0eb8355b70a7ea8898.png" alt="">
</p>


Open the file ```src/pages/Toolbox/pieces/AddAPIKeySubpage/AddAPIKeySubpageQuestionList/Questions/AddAPIKey/Custom/bits_and_pieces/OnAPIInfoRequestBtnClicked.js``` in your Android app folder.

Uncomment the SDK import and code. Replace the placeholder names with your SDK name, as usual.

<p align="center">
  <img src="assets\699cf12a40857c4edbd9e9ef0d47da96.png" alt="">
</p>

<p align="center">
  <img src="assets\711881e81b9fd70d6dccefc241623a0b.png" alt="">
</p>

<p align="center">
  <img src="assets\02733a3bd0f56b96766a18ed0fb7cc47.png" alt="">
</p>

<p align="center">
  <img src="assets\d48999a63236fe76d1a02d199cca225e.png" alt="">
</p>

Open the file ```src/pages/Toolbox/pieces/ToolboxChoices/ToolboxChoicesQuestionList/Questions/GetToolboxChoice/GetToolboxChoiceChoices/GetToolboxChoiceChoices.js``` in your Android app folder.

Uncomment the SDK import, and the code in the `GrabGoogleAPIKey` function. Replace the placeholder names with your SDK name, as usual. That's it ! No more uncommenting needed ;-)

It's time to build the bridge between your backend server, and your Android app. Let's go !

By now, you have done the following things:

- Run the 

```
npx verdaccio
``` 

command to start Verdaccio, if not already running.

<p align="center">
  <img src="assets\64470098d5512319fd3b9e29c400dfdc.png" alt="">
</p>

- At the root of your SDK folder, run the 

```
npm run publish:test
```

command to publish a fresh version of your SDK to your local Verdaccio repository.

<p align="center">
  <img src="assets\13f108691e3c6a6874a1fa23cb05cbda.png" alt="">
</p>

- At the root of your Android app folder, run the 

```
npm i your_sdk_name@latest
``` 

command to install/update your SDK in your app. Of course, replace ```your_sdk_name``` with the name of your own SDK.

<p align="center">
  <img src="assets\c54c914ef5b83c64a1230354b51cd9f8.png" alt="">
</p>

Now, let's test the SDK in your Android app. To do so, run the 

```
npm start
``` 

command at the root of your Android app folder, to start Metro Bundler if it's not already running. If Metro bundler is already running, close it, then run this command to restart it.

<p align="center">
  <img src="assets\023320540138f3f960d8a88e5004be5d.png" alt="">
</p>

<p align="center">
  <img src="assets\73aaa6aa7c8da5d09fdfb9e94bd67446.png" alt="">
</p>


At the root of your server folder, run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the

```
npm run start-server-unix
``` 

command (for Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it.


Open your Android app, then click on the toolbox icon at the top right corner

<p align="center">
  <img width="300" src="assets\9cca7cd3732993d2b734bc0772381208.jpg" alt="">
</p>

Click on ```Add an API key, buddy```

<p align="center">
  <img width="300" src="assets\e97e55fc26ab21abcc807d094e4999aa.jpg" alt="">
</p>

Click on ```The powerful API button```

<p align="center">
  <img width="300" src="assets\f46be63a5aca22e66331700fe2c01566.jpg" alt="">
</p>

This menu allows your app users to subscribe to your API, buy API Credits, and check API subscription info. You can now test the frontend/backend bridge youu just established. All these uncommenting and renaming was so these buttons work, so test them.

<p align="center">
  <img width="300" src="assets\964b46b1ec7801684360c74434205358.jpg" alt="">
</p>

Let's test the API subscription.

<p align="center">
  <img width="300" src="assets\186300f77d643f4ddf66c2fbf6d8dcd8.jpg" alt="">
</p>


<p align="center">
  <img width="300" src="assets\f87cdd891ff2e3512f307252364d29fb.jpg" alt="">
</p>

<p align="center">
  <img width="300" src="assets\88d4f12f25b4a2115733b2035853777e.jpg" alt="">
</p>

If you did everything well, it should be success time !

<p align="center">
  <img width="300" src="assets\6d07878af3dab0559e53945136265402.jpg" alt="">
</p>


You can check your Firestore data to see the new API user

<p align="center">
  <img src="assets\45dbf0c717f4191e92a731fa17f94d95.png" alt="">
</p>

<p align="center">
  <img src="assets\ecc1d8f0f98d42fdd87a1061974d7484.png" alt="">
</p>

<p align="center">
  <img src="assets\c523ad7d6b01683c8c55a24c896687d0.png" alt="">
</p>

You can check the API Client Info button, to see the new API Credit balance !!!

Back to the options menu, under the `Add an API key, buddy` button, there's a `Login (Google)` button. With this button, you can login to your freshly created API account, via Google, using the same Google account you used during the API subscription, and your API key will be automatically loaded for you ! And you're ready for real work ;-)

Okay, now that we have tested the frontend/backend bridge, it's time for you to implement the most interesting feature of your app.... The A.I. powered QNA, that allows your app users to ask questions to OpenAI's CHAT GPT, and get answers back.

We'll create an api endpoint, then a SDK method for this endpoint, then we'll link the frontend and backend together using the SDK method. The hardest part of the work is done, we're almost reaching our goal !!! Don't quit, solder, I know this tutorial seems to last for eons, but you've already done the most tedious part, now, we're doing the most rewarding and fun part ;-)

At the root of your server folder, run the 

```
npx maslow
``` 

command

<p align="center">
  <img src="assets\21348f3d1256d2beefbad7149870fe0b.png" alt="">
</p>

choose ```add-api-endpoint```

<p align="center">
  <img src="assets\82b0cb4bc4fedad35d60ca3919add21d.png" alt="">
</p>

Name this API endpoint. I'll name mine ```get_gpt_output```. Name yours the same, or different, the choice is yours.

<p align="center">
  <img src="assets\8731deb5fc1d3b6fe390dbe6ae49970e.png" alt="">
</p>

Once your API endpoint is successfully created, Go at the root of your server folder, with your Terminal, and run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the 

```
npm run start-server-unix
``` 

command (Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it.

Open Postman, then run a ```POST``` request to the ```localhost:8080/get_gpt_output``` url, with your API key as query parameter.

The body of this request is ```x-www-form-urlencoded```.

Add a ```test_timer_duration``` value to the body. It represents the duration in milliseconds of the test timer that's within your endpoint, for testing purposes. This is a convenient way to test your endpoint before you implement your own logic. I put ```150000``` as it's value. It's 2 and a half minutes to be precise. When you're ready, click on ```Send```

<p align="center">
  <img src="assets\91a0929dc516384b66658156247114e1.png" alt="">
</p>

You should get an answer with status 200. The response body is a JSON object containing an ```id``` key. This key is the ```JOB ID``` of your request. With this Job ID, you can then check the status of your background job. The reason for all this is because a server needs to return data quickly to the client, like within 1 second, so when we need to some server work that lasts more that 1 second, we need to do the work in a background worker, so we can free up the HTTP connection quickly. So the user immediately gets a JOB ID back as a response. Then with this Job ID, the user can periodically check for updates to know if his server cake data is baked or not ;-)

Copy this id

<p align="center">
  <img src="assets\fccadbb00e3e6ad67c8a884c336a56bf.png" alt="">
</p>

<p align="center">
  <img src="assets\b9a907eb13d8e17f71685804f77634ef.png" alt="">
</p>

Make a ```POST``` request to ```localhost:8080/get_work_status/YOUR_JOB_ID_HERE``` , to get the background work status of the background job

<p align="center">
  <img src="assets\3c4deaa0c0f05effbff3b6d6a015f30f.png" alt="">
</p>

If everything is OK, you should get an answer with status 200, whose body is a JSON object containing info about your currently running background job.

<p align="center">
  <img src="assets\6767d3357cbdd145dae100482a51d749.png" alt="">
</p>

You can make the same ```POST``` request to ```localhost:8080/get_work_status/YOUR_JOB_ID_HERE``` , again and again, to get the freshest background work status of the background job

<p align="center">
  <img src="assets\d122ce030297007ed4d58dd0d474e0b2.png" alt="">
</p>

When the job has completed successfully the ```status``` property of the answer will be ```completed```. If some error took place, the status will be ```failed```

<p align="center">
  <img src="assets\756e2a17feb99ae08fe8fa276922c34e.png" alt="">
</p>

Once you got a ```completed``` or a ```failed``` status, then subsequent requests will give you an error.

<p align="center">
  <img src="assets\b31ad799c8b12fff68897ed748c36a27.png" alt="">
</p>

Open the file ```src/endpoints/<YOUR_API_ENDPOINT_NAME>Endpoint/pieces/DoTheAPIWork/DoTheAPIWork.js```

As you can see, the example timer job is currently the one being executed when this endpoint is used. Now we want to use the AI Chat Completion job, so comment out the timer job code line, and uncomment the AI job code line

<p align="center">
  <img src="assets\47e02c5879cce8f004fba0d4477cd4b6.png" alt="">
</p>

<p align="center">
  <img src="assets\74097bb75410313d336c68fb1f64edbb.png" alt="">
</p>

Open the file ```src/endpoints/<YOUR_API_ENDPOINT_NAME>Endpoint/pieces/UpdateAPIUsage/UpdateAPIUsage.js```

Right now, as you can see, no API usage cost is being calculated, an empty object is returned. Comment out this empty object, and uncomment the ```CalculateOpenAICosts``` line

<p align="center">
  <img src="assets\4f9fbcf31bbcd0fe7d79f9968025e8ef.png" alt="">
</p>

<p align="center">
  <img src="assets\cbb8513c8f3b858c8d6a58044640a5c1.png" alt="">
</p>

Open the file ```src/endpoints/<YOUR_API_ENDPOINT_NAME>Endpoint/pieces/DoTheAPIWork/pieces/<YOUR_API_ENDPOINT_NAME>LongWork.js```. This is where we get data from the API client request, then create a background job with this user data, then return the Job ID of that background work back to the client as response. Let's get rid of the ```test_timer_duration``` data there.

Locate the line that looks like this:

<p align="center">
  <img src="assets\175160d3ad25e4e2f2b2d57fbb1e8924.png" alt="">
</p>

Remove ```test_timer_duration``` there

<p align="center">
  <img src="assets\2ee74773c0d5f714433be4ef29cf57f3.png" alt="">
</p>

In the args object on the same file, remove the ```test_timer_duration``` too

<p align="center">
  <img src="assets\ae5575e754b195e28ad7ad0d854711de.png" alt="">
</p>

<p align="center">
  <img src="assets\ed085e3e35ddd24142f62fd4d94aaad0.png" alt="">
</p>

Great ! Now it's time to subscribe to OpenAI's API, so you can make use of the powers of A.I.

Visit https://openai.com

Click the ```Log in``` button. 

A QUICK REMINDER: Please note that the UI of the websites in this tutorial, are subjected to changes, so if the tutorial pictures don't match whatever the new UI is at the time of you reading this, then use common sense, and find the corresponding thing on the new webpage UI, Don't worry, be smart ;-)

<p align="center">
  <img src="assets\e9d5a2fdbcb4bd5cb29b3f7d5f521273.png" alt="">
</p>

<p align="center">
  <img src="assets\6e5e1cd7031078ea23b7663ad7416541.png" alt="">
</p>

So login, or Sign up, if it's your first time using OPENAI's API

<p align="center">
  <img src="assets\234e0b061bc33ecfb2f65772e01433ff.png" alt="">
</p>

Once logged in to your OPENAI account, you should be presented with a choice between ```ChatGPT``` and ```API```. Click on ```API```

<p align="center">
  <img src="assets\45ee0bbee2f5226d94888c65dc23cd5e.png" alt="">
</p>

Locate the ```API Keys``` section, and click on it

<p align="center">
  <img src="assets\b6be04abc4b1ffcf2608e9897f8b5560.png" alt="">
</p>

<p align="center">
  <img src="assets\743897965a3af2e9b1e2cad4afe23509.png" alt="">
</p>

Click on the ```Start verification``` button, or similar, to create an API Key.

<p align="center">
  <img src="assets\2b1d62ad5b0570ee89d8b3d659d9bc58.png" alt="">
</p>

Give a valid phone number, so you can verify your account via SMS

<p align="center">
  <img src="assets\8144ab01fae25ad2d51ffa837ee5fdb8.png" alt="">
</p>

If you're a brand new API user, you get 5 $ of free credits. I already used mine, so that's why I get this message. If you're a fresh user, then you shouldn't get this message.

<p align="center">
  <img src="assets\b8b30512b197ff13a11d98df1204a9f9.png" alt="">
</p>

Name your OPENAI API Key whatever you want

<p align="center">
  <img src="assets\3b3373ac315800aa1410907cbf027b94.png" alt="">
</p>

Copy the API key, and paste it somewhere relatively safe, like Sticky Notes for Windows 10.

Don't worry though in case if you lose the API key. You can always create another one ;-)

<p align="center">
  <img src="assets\9387905aec6ef2713ddd757b567a2685.png" alt="">
</p>

<p align="center">
  <img src="assets\98c8dc86c27937682156716310260c11.png" alt="">
</p>

Click on ```Settings/Billing```

<p align="center">
  <img src="assets\791641e8db78852878cbb6c372d43bc1.png" alt="">
</p>

Click on ```Add payment details```

<p align="center">
  <img src="assets\c9e6923611f67e4af19d2894894f819c.png" alt="">
</p>

Choose ```Individual```

<p align="center">
  <img src="assets\544417af4f85079de79692fcc62c5367.png" alt="">
</p>

Fill in your card details, then click ```Continue```

<p align="center">
  <img src="assets\b3b8c5cfb91cb5581dc60364be7a7d35.png" alt="">
</p>

In the ```Initial credit purchase``` field, type a value between 5 and 100 $. That's the initial amount of OPENAI Credits that you will purchase, to begin your journey. I bought ```40``` bucks, but you could buy less if you want, to test the waters. 

Make sure ```Automatic recharge``` is not not on. You can set it on later when you really need to deploy your app.

<p align="center">
  <img src="assets\9dc99cd5fbe9fe12c6a05013fcd7897a.png" alt="">
</p>

Confirm the payment

<p align="center">
  <img src="assets\6c1ebb179a983df664ecfa31f0c14113.png" alt="">
</p>

Once the payment is made, you should see your updated API Credit balance in the OPENAI page

<p align="center">
  <img src="assets\3064dfdd46dfa4239db85b69ad383969.png" alt="">
</p>

Open the file ```.env``` at the root of your server folder.

Uncomment the variable `OPENAI_API_KEY` , and replace the value of the ```OPENAI_API_KEY``` variable, with the OpenAI API key you just got

```
# The OPENAI API Key, to get wisdom from the A.I. wizard.
#
# Uncomment this env variable if you're using OpenAI in your backend
OPENAI_API_KEY="sk-xxxxxxxx"
```

If you plan on making an app that's meant to be used by a lot of people, you will encounter errors about `Token Limits Reached` or similar shizzle.

See https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests to fix this.

In order to avoid these errors, you need to upgrade your OpenAI Tier Level, above Tier 1, preferrably to Tier 5.

Then, you won't get those pesky errors.

See https://platform.openai.com/docs/guides/rate-limits/usage-tiers?context=tier-free

for more info about the Tier shizzle ;-)

The Tier gets increased simply by purchasing a certain amount of OpenAI API Credits, and also the API Purchase needs to be a week old or more. Problem solved !

At the root of your server folder, run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the 

```
npm run start-server-unix
``` 

command (for Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it.

Okay ! Now it's time to finally do your first A.I. Chat Completion using your own backend server... You've come a long way, you should be proud of yourself.

With Postman, do a ```POST``` request to the ```localhost:8080/get_gpt_output``` url, with your API key as query parameter.

The body of this request is ```x-www-form-urlencoded```.

The body of the request must have the following keys:

a ```prompt``` key, containing the question you want to ask. In my case, I want to ask ```Who created Pikachu ?``` , because I love Pikachu's style ;-) 

a ```model_chosen``` key, containing the OpenAI model to use. For now, the ```gpt-3.5-turbo``` and ```gpt-4``` models are available, but more can, and will, be added in the future. I chose ```gpt-4```

<p align="center">
  <img src="assets\db5c5b0e1de3d1c06488bf598320a20f.png" alt="">
</p>

You should get a 200 response with the job id as output. You know the drill, copy this id, and use it in a ```get_work_status``` request to get the answer to your question.

<p align="center">
  <img src="assets\dc39fab40857e68530dee83201e017cd.png" alt="">
</p>

<p align="center">
  <img src="assets\2498e7164879e1bda54117a25df73213.png" alt="">
</p>

You will get the answer piece by piece, while the status is ```active```. When the status is completed, you will get the full answer.

<p align="center">
  <img src="assets\4b3a4c60b1ea814b700000c7033e55b7.png" alt="">
</p>

Great ! We now have an API endpoint that can give us answer to all (or should I say most ? ;-) our existential questions.

Now it's time to create a SDK method for this API endpoint, so our Android app users, and also any Javascript developer, can use your beloved API, with ease, using a convenient SDK method

At the root of your SDK folder, run the 

```
npx maslow
``` 

command

<p align="center">
  <img src="assets\669e271f5b1c94593742e911e282885a.png" alt="">
</p>

Choose ```add-sdk-method```

<p align="center">
  <img src="assets\d3d9d7627ac41695917b4a0dd72c6ce6.png" alt="">
</p>

Name this SDK method. I named mine ```GetGPTOutput```. You can name yours the same, or something different if you want.

<p align="center">
  <img src="assets\c3f23ed7de9240e9aad89040dc8ef863.png" alt="">
</p>

Open the file ```src/services/<YOUR_SDK_METHOD_NAME>/<YOUR_SDK_METHOD_NAME>.ts``` in your SDK folder

Uncomment the piece of test code that looks like this, at the top of this file. Once the test will be successful, don't forget to comment this code back. I will remind you when it's time to comment it back.

<p align="center">
  <img src="assets\643e0b26a5ed3bf9318aef9bf92fdc6f.png" alt="">
</p>

<p align="center">
  <img src="assets\1d83779b8ab29eb06519380af2dd3307.png" alt="">
</p>

Remove the ```test_timer_duration``` key from the post request's body

<p align="center">
  <img src="assets\b4cead02c49ecfa116ed21c4a024a034.png" alt="">
</p>

<p align="center">
  <img src="assets\9ad16918acbe21d5d672e57cf2db66b6.png" alt="">
</p>

Open the file ```src/services/<YOUR_SDK_METHOD_NAME>/pieces/Test<YOUR_SDK_METHOD_NAME>.ts``` in your SDK folder

Set the ```apiKey``` property to a valid API key for YOUR SERVER. (NOT THE OPENAI API KEY !!!!!)

<p align="center">
  <img src="assets\40c6b5b4a6623df4c4274b1f7def4a34.png" alt="">
</p>

<p align="center">
  <img src="assets\594e59740073ea034c146cfc55ae836e.png" alt="">
</p>

In the ```onProgress``` callback, print ```progress.progress```, rather than ```progress```

<p align="center">
  <img src="assets\263cd5877b6571650da0ecbcd7bfd0f2.png" alt="">
</p>

<p align="center">
  <img src="assets\417f1892d8411a6e56064182dce0c076.png" alt="">
</p>

Open the file ```src/services/<YOUR_SDK_METHOD_NAME>/<YOUR_SDK_METHOD_NAME>.ts``` in your SDK folder

In the HTTP request URL, replace ```long_http_request_endpoint``` with the name of your API endpoint. In my case it's ```get_gpt_output```. Yours may vary

<p align="center">
  <img src="assets\1fab49024bbb1d21531f68a0616dc4fb.png" alt="">
</p>

<p align="center">
  <img src="assets\99997ac6a32ccfb983aac3a587fa37ef.png" alt="">
</p>

Also, replace `Constants.api_base_url_local` with `Constants.api_base_url_tailscale`. 

Make sure that Tailscale is running on your computer, then, at the root of your SDK folder, run the 

```
npm run run-service <YOUR_SDK_METHOD_NAME>
``` 

command to test this SDK method. I conveniently added the right args and stuff in the default SDK method template so it corresponds exactly to the API endpoint we just created. This template has been made in a way so you can test the timer, and the AI completion quickly. Of course, if you implement other stuff that's unrelated to AI completion, you can edit everything. More info in the section describing the ```add-api-endpoint``` and ```add-sdk-method``` commands.

<p align="center">
  <img src="assets\c315a0de6a83084d416030614aa324da.png" alt="">
</p>

A bunch of stuff will be printed. If everything is OK, you will get the answer to the default question asked in the file ```src/services/<YOUR_SDK_METHOD_NAME>/pieces/Test<YOUR_SDK_METHOD_NAME>.ts``` , alongside with API usage data.

<p align="center">
  <img src="assets\10d65cabae04faf192009a325c6b5cd5.png" alt="">
</p>

Great ! Once you successfully tested your SDK method, you must comment the test code in the file ```src/services/<YOUR_SDK_METHOD_NAME>/<YOUR_SDK_METHOD_NAME>.ts``` , as shown below

```
/**
 *  
 * Uncomment this code below, and run the 
 * 
 * npm run run-service GetGPTOutput
 * 
 * command to test this SDK method quickly and dirty ;-)
 * 
 **
(async () => {
  await TestGetGPTOutput();
})();
*/ 
```

Once you've made the necessary edits, and you're ready to publish the updated SDK in Verdaccio, then run the 

```
npx verdaccio
``` 

command if not already running

<p align="center">
  <img src="assets\e341fba2f450085718fe1953be249c83.png" alt="">
</p>

At the root of your SDK folder, run the 

```
npm run publish:test
``` 

command to update your SDK

<p align="center">
  <img src="assets\d2bfc573234e1e5d4e4f1ffc2a3e25e8.png" alt="">
</p>

At the root of your Android app folder, run the 

```
npm i <YOUR_SDK_METHOD_NAME>@latest
``` 

command to install the updated SDK in your Android app

<p align="center">
  <img src="assets\21f8a416abcffe4ff5395a10a07c23a7.png" alt="">
</p>

In your Android app folder, Open the file ```src/pages/<YOUR_PAGE_NAME>/pieces/AddItemTo<YOUR_PAGE_NAME>/<YOUR_PAGE_NAME>CreationList/Questions/<YOUR_ANSWER_UI_NAME>/Custom/OnFormButtonPressed/_OnFormButtonPressed.js``` 

Replace the code line ```const asyncDataIsValid = true;``` with ```const asyncDataIsValid = asyncCake;```

<p align="center">
  <img src="assets\21abb28005f1e1334aaed25835bc83cb.png" alt="">
</p>

<p align="center">
  <img src="assets\e13f7574de6259b3142729e9dca9b73e.png" alt="">
</p>

In your Android app folder, Open the file ```src/pages/<YOUR_PAGE_NAME>/pieces/AddItemTo<YOUR_PAGE_NAME>/<YOUR_PAGE_NAME>CreationList/Questions/<YOUR_ANSWER_UI_NAME>/Custom/OnFormButtonPressed/AsyncCake/BakeAsyncCake.js``` 

The BakeAsyncCake method does the work when the UI button is being pressed. As you can see, it does nothing right now.

Uncomment the commented ```DoAICompletion``` code

<p align="center">
  <img src="assets\9f197129e09428ea47babeac673663f6.png" alt="">
</p>

<p align="center">
  <img src="assets\c0785b8e21271f98f6819a44fd966b58.png" alt="">
</p>

Inside the ```DoAICompletion.js``` file, uncomment the SDK import, and rename the SDK to your own shizzle, you know the drill

<p align="center">
  <img src="assets\c563fa9e5076e1a918dc96972dc4141c.png" alt="">
</p>

<p align="center">
  <img src="assets\ada8ab2e7a1adc0d8c5293a9cbfe3856.png" alt="">
</p>

Inside the ```DoAICompletion.js``` file, uncomment the code, and rename the SDK to your own shizzle, you know the drill


<p align="center">
  <img src="assets\1601cc8db9717b52f5f56347e0d7755d.png" alt="">
</p>

<p align="center">
  <img src="assets\11ce5cf8941b39cf411595a05184bdca.png" alt="">
</p>

The following code line is the one that contains the question, as a string.

```const question = answers["TypeQuestion"].value;```

Edit this variable if you get your question from a different UI than the default ```TypeQuestion``` UI of this tutorial, or whatever other source. Remember, the ```answers``` object contains all the answers of the different UI you have created for your page. You can access the value of a specific UI by using the syntax ```answers['<YOUR_UI_NAME>'].value```

<p align="center">
  <img src="assets\6df196e57f77637faf6cc664bf60835b.png" alt="">
</p>

The ```onProgress``` callback of your SDK method, allows you to save the job's progress while it's running, so your users can get info about the advancement of the background job. In this particular case, you don't have to touch anything here. It's already storing the AI Completion progress, thanks to the helper method ```OnDataProgress```

<p align="center">
  <img src="assets\c8cf8a77a0373730943b6036d903c42a.png" alt="">
</p>

In your Android app folder, Open the file ```src/pages/<YOUR_PAGE_NAME>/pieces/AddItemTo<YOUR_PAGE_NAME>/<YOUR_PAGE_NAME>CreationList/Questions/<YOUR_ANSWER_UI_NAME>/Custom/State/DataLoadingUI/DataLoadingUI.js```. This is the sub-UI that gets shown when the work is going on. This is where you can display progress data to the app user.

The default UI is a TextReader, a component that displays text on screen.

<p align="center">
  <img src="assets\e2b9eaab0bc8bede5f529c281c231252.png" alt="">
</p>

Change the ```text``` prop of this component to ```UIState.currentAnswer```. This value is the progress data we just saw being stored in ```onProgress/onDataProgress```. This allows the user to see his answer being generated piece by piece, like in the page https://chat.openai.com ! It's nice to see the work progress.

<p align="center">
  <img src="assets\eb2432f61ac5239e64aa7101689c50f8.png" alt="">
</p>

Add the following 2 props, to the TextReader:

```
animate={false}
animateLoop={false}
```

<p align="center">
  <img src="assets\26a801fbf73232c93a4ba43dd804d72b.png" alt="">
</p>

In your Android app folder, Open the file ```src/pages/<YOUR_PAGE_NAME>/pieces/AddItemTo<YOUR_PAGE_NAME>/<YOUR_PAGE_NAME>CreationList/Questions/<YOUR_ANSWER_UI_NAME>/Custom/State/DataLoadedUI/DataLoadedUI.js```. This is the sub-UI that gets shown when the work is completed successfully. This is where you can display the final output to the app user.

The default UI is a TextReader, a component that displays text on screen.

<p align="center">
  <img src="assets\8bec0c6c287f1ba6fb58430cdab17f33.png" alt="">
</p>

Change the ```text``` prop of this component to ```UIState.asyncCake```. This value is the final output that you returned from the `BakeAsyncCake` function earlier. This allows the user to see his full answer.

<p align="center">
  <img src="assets\42f9036eadcbf2ddc0a661cdbf7211fc.png" alt="">
</p>

Add the following 2 props, to the TextReader:

```
animate={false}
animateLoop={false}
```

<p align="center">
  <img src="assets\f12415d07c280019e30c253759a72910.png" alt="">
</p>

Great ! Now that you have done the necessary edits in your code. It's time to see the final result, in your Android app !!!

At the root of your Android app folder, run the 

```
npm start
``` 

command to start Metro Bundler.

<p align="center">
  <img src="assets\f764542d56d9d18105e78c5060936fdb.png" alt="">
</p>

At the root of your server folder, run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the 

```
npm run start-server-unix
``` 

command (for Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it.


Open your Android app, then create a new question, using one of the ```+``` buttons available to you

<p align="center">
  <img width="300" src="assets\6a178812b82fcb014ddf8d21597636d6.jpg" alt="">
</p>

You can leave the question name field empty. Scroll to the next UI

<p align="center">
  <img width="300" src="assets\7c097a584792559f0f419be567d3a933.jpg" alt="">
</p>

The second UI is where you ask your question. I typed the following question: ```Give me fun facts about Pokemon red```. You can ask whatever you want. Scroll to the next UI

<p align="center">
  <img width="300" src="assets\cc151d061986e894082d9d6bd85ee452.jpg" alt="">
</p>

The last UI is where you get the answers to your deep philosophical inquiries, like how to make pizza dough. Press the button to get existential wisdom from the stochastic parrot ;-) 

<p align="center">
  <img width="300" src="assets\e54931063c83006716e19754aac9a101.jpg" alt="">
</p>

Now, the answer will be generated piece by piece, and the pieces will be shown to you on screen, thanks to all the code tweaks you just did.

<p align="center">
  <img width="300" src="assets\68a3095a930d30862b92d9c222f5c040.jpg" alt="">
</p>

Piece....

<p align="center">
  <img width="300" src="assets\6049d2ee6b2dea93e25a1cee8b1591c0.jpg" alt="">
</p>

By Piece....

<p align="center">
  <img width="300" src="assets\cdd8629ac70e28c779946da6f82bb2f5.jpg" alt="">
</p>

Like Tetris...

<p align="center">
  <img width="300" src="assets\a100de19032f6525acc9dd9ebb961c3e.jpg" alt="">
</p>

Once the answer is fully completed, the whole answer will be available for you to read. You can scroll up and down to read your A.I. generated wisdom !!!!

We finally implemented the whole thing. Pat yourself on the back, and be proud of yourself. This tutorial is a good starting point for you to create your own vision, and share it with the world. 

See the section about the commands available in MaslowGPT, to go further in your creative journey.

You're the captain of the crew, and you can achieve anything you put your mind through. As long as it's a realistic goal, and as long as you write a solid TODO list of all the things you want in your app/backend, and as long as you don't give up, even when you get ugly errors. Take a deep breath, and use your debugger and google/stackoverflow/ and

```
npx maslow ask-question
```

, etc..., and all errors will vanish into thin air ;-) See the section ```TIPS AND TRICKS``` to get more info about the React Native debugger.

On the SDK and server side of things, you can set breakpoints and use any node.js debugging tool to step through your code in case of issues.

Thank you for being here, reading this, adventurer. I'm proud of you, soldier.

Now, let's get your backend server, and your Android app, ready for production, ready to serve the world !

[Let's get ready for production](../PublishWorkHeroku/README.md)