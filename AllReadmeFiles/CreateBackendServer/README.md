
## Create the maslow-gpt-api-v2 server (or my-ultra-mega-server ? ;-)

### Let's create a baby server

Now, It's time to create a backend server, so you can gain new powers that a simple Android app cannot provide. Thanks to this server, your Android (and soon iOS) app will be MUCH more powerful ! Also, a server means you can host your own website on your own server too, if you want ;-) Let's go !

With your Terminal, make sure you're not inside your Android app folder, then run the 

```
npx maslow
``` 

command. Then choose ```create-backend-server``` to create your server.

<p align="center">
  <img src="assets\7ae545c46a9a773e2f06bcf463264700.png" alt="">
</p>

Give a name to your server. I called mine ```maslow-gpt-api-v2``` ,  but call yours whatever you want to call it.

<p align="center">
  <img src="assets\1a75fcc0608db1fc4c1046421d0869c7.png" alt="">
</p>

Great ! Your server folder has been created.

<p align="center">
  <img src="assets\55140b6d9f87e5601903b0f1c0d88b31.png" alt="">
</p>

<p align="center">
  <img src="assets\44f8c7b5798bd4506344cb115a3bd7ca.png" alt="">
</p>


If your computer runs Linux or MacOS, you also need to install `redis-server` and `redis-cli`


[Redis Setup Linux](../create_backend_server/README.md#redis-installation-linux)

[Redis Setup MacOS](../create_backend_server/README.md#redis-installation-macos)


Navigate to the root of your server folder, using your Terminal/Powershell/etc....

<p align="center">
  <img src="assets\2ce5046d4edd889244f19ab6454465e1.png" alt="">
</p>

Run the 

```
npm i
``` 

command at the root of your server folder, to install all the required dependencies.

<p align="center">
  <img src="assets\df89bae97cd9dcd5fb3248fc4a06fa72.png" alt="">
</p>

<p align="center">
  <img src="assets\4128869e8d113a842ed5615d0575c04a.png" alt="">
</p>

<p align="center">
  <img src="assets\31752fa414c2b0d2027c119f1bb4d094.png" alt="">
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

Your server is now serving data locally, on http://localhost:8080

<p align="center">
  <img src="assets\089a5a51919ba080f124cf6127f56a91.png" alt="">
</p>

Open your web browser, and visit http://localhost:8080/myAPI

<p align="center">
  <img src="assets\a510c6d12f249e6a3fd171d8c17fbac6.png" alt="">
</p>

As you can see, your server served you some fire , in your browser ! via the ```myAPI``` endpoint.

<p align="center">
  <img src="assets\33f041dad29b342cbbba83651bed0628.png" alt="">
</p>

Close your server, using ```CTRL+C``` , and ```y``` (or ```o``` or whatever, depending on your computer's language)

<p align="center">
  <img src="assets\bac9bebd19a4e6bbaaae91c7c1ebfb30.png" alt="">
</p>

<p align="center">
  <img src="assets\f0452ae3c5a2971d02d1960b07369656.png" alt="">
</p>

### Push the baby server to Github

Okay, now that your baby server is born and screaming ;-) Let's create a Github repository for your local server, then push your local server on this Github repository.

https://github.com

<p align="center">
  <img src="assets\249000ac117ff823a597ef44bce08135.png" alt="">
</p>

Click on ```Sign up``` to create a Github account

<p align="center">
  <img src="assets\d08c97dcec151725aa3c15046dc450a8.png" alt="">
</p>

Enter an email address. This will be your Github account's email address. You can use the same email address you used for your Firebase account earlier. 

Write down this email address on paper, so you don't forget it. It's always a good idea to have a little notebook where you write down all the important credentials/emails/passwords/usernames/etc... related to your app/server stuff.

<p align="center">
  <img src="assets\9ab375599fdc134eb72b39df3a72308e.png" alt="">
</p>

Enter a password for your Github account

<p align="center">
  <img src="assets\47b344bb289e929c701b49486f0c51ca.png" alt="">
</p>

<p align="center">
  <img src="assets\51f6c5c873e539595a4b16ee8d03aaae.png" alt="">
</p>

Enter a username for your Github account

<p align="center">
  <img src="assets\76eda65a5928678457c700e9c159ea47.png" alt="">
</p>

Choose if you want to receive email info or not, for the Github team.

<p align="center">
  <img src="assets\d3e9e952ea8878f91c1c9289e1b9b67b.png" alt="">
</p>

<p align="center">
  <img src="assets\638da27a6237ee089adfa5f0034c2598.png" alt="">
</p>

Resolve the CAPTCHA

<p align="center">
  <img src="assets\0f6f2c6cb4452557572c83658c6713de.png" alt="">
</p>

Enter the code you received in the email address you provided

<p align="center">
  <img src="assets\f5d1fd9c1b33e9222b8200e9fadee24f.png" alt="">
</p>

Answer the stupid questions Github may ask you ;-) (your hobbies, are you a student or pro, etc...) Then create a free Github account.

<p align="center">
  <img src="assets\63317044b4315e845c8180c103ae43ff.png" alt="">
</p>

Now you're in your Github dashboard

<p align="center">
  <img src="assets\b204d7c65a30beab9e698e4b15ddb152.png" alt="">
</p>

On the appbar of Github, locate the ```+``` button, and press it.

<p align="center">
  <img src="assets\712f0907e62334d4492a8250ccac0e84.png" alt="">
</p>

Select ```New repository```

<p align="center">
  <img src="assets\3f6088446cfbe807387b954e326c2f47.png" alt="">
</p>

Give a name to your Github repository. Ideally, Give it the same name as your local server. Of course you can name your Github repository however you want. 

<p align="center">
  <img src="assets\45a705a8e3c0ac8c08c9be4599b08d3f.png" alt="">
</p>

<p align="center">
  <img src="assets\2955f52024a347fe46a303437e9b77b9.png" alt="">
</p>

Give a description of your Github repository. A simple sentence describing what this repository contains

<p align="center">
  <img src="assets\a02f8bb52161119784e84a7db1f7f899.png" alt="">
</p>

Make this repository ```Private``` , because it's your server and you don't want to share it with the whole world. (VERY IMPORTANT !!!! Since your server folder will contain sensitive data, IT SHOULD NOT BE PUBLIC !!!!)

<p align="center">
  <img src="assets\3e461ba81c5ba2c8adbe26f8d044a796.png" alt="">
</p>

Press ```Create repository```

<p align="center">
  <img src="assets\047ec6d2a69d71c76b21cd8f3d2241b6.png" alt="">
</p>

Once your repository has been created, you should see some instructions on screen.

<p align="center">
  <img src="assets\1b43cf40db82d410685e7922253e3d24.png" alt="">
</p>

Now it's time to push your local server folder on github.

Install `git` on your computer

[Git Setup Windows](../TipsTricks/README.md#git-installation-steps-for-windows)

[Git Setup Linux](../TipsTricks/README.md#git-installation-steps-for-linux)

[Git Setup MacOS](../TipsTricks/README.md#git-installation-steps-for-macos)

Install Github CLI to facilitate the login to Github.

### Github CLI setup Windows

Open a Powershell Terminal (Run as admin)

To install the GitHub CLI (gh) on Windows, using choco:

```bash
choco install gh
```

### Github CLI setup Linux

To install the GitHub CLI (gh) on Linux, Using Snap Package Manager:

```bash
sudo snap install gh
```

### Github CLI setup MacOS

If you don't have Homebrew installed, you can install it by running the following command in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, you can use it to install GitHub CLI:

```bash
brew install gh
```


After installation, verify that `gh` is properly installed by checking its version:

```bash
gh --version
```


Login to your Github account using ```gh auth login```

When asked ```What is your preferred protocol for Git operations?``` , choose ```HTTPS``` (VERY IMPORTANT, OTHERWISE THE PUSH WON'T WORK)

When asked ```How would you like to authenticate GitHub CLI?``` , choose ```Login with a web browser```

Copy the one time code in your terminal, then paste this code in the browser window that will show up

Once you're logged in to Github from your Terminal, open the ```package.json``` file at the root of your server folder.

<p align="center">
  <img src="assets\acfb2c5827755b903090e4c84cd8de19.png" alt="">
</p>

Locate the ```first-push``` script in the ```scripts``` section of this file

<p align="center">
  <img src="assets\7aad42ca0ca27a8978a35ca8fae56770.png" alt="">
</p>

In this script, locate this pattern: ```<GITHUB_URL>```

replace it with the HTTPS URL provided in the Github repo instructions.
(the HTTPS URL as shown in this picture below. copy this HTTPS URL, then paste this URL as a replacement of ```<GITHUB_URL>``` in package.json of your server folder. Got it ? ;-)

<p align="center">
  <img src="assets\3d1ae589c9d346fb57ae6b58700c9bbc.png" alt="">
</p>

Run the 

```
npm run first-push
``` 

command at the root of your server folder, to push this pretty server to your Github repository.

<p align="center">
  <img src="assets\ad991d847763915081ba2f841a109095.png" alt="">
</p>

<p align="center">
  <img src="assets\706ebb6e90cec9b0732b412e57688be6.png" alt="">
</p>

<p align="center">
  <img src="assets\42f1a51aa756156fdaf6660d111a944e.png" alt="">
</p>

Reload your Github repository page. You will see that your local server is now present on screen !

<p align="center">
  <img src="assets\f95525ca4f704b0fcd305fb124a9ea8e.png" alt="">
</p>

<p align="center">
  <img src="assets\69cbdb528de22beb3b3930a7e52c0c6c.png" alt="">
</p>

<p align="center">
  <img src="assets\cc8645ba97c28913cd7c4031c9535f8e.png" alt="">
</p>


### Implement API key access to your server, and API monetization for your server !

Okay, now that we have a working server , we will implement API key access to your server, and also API monetizatiom for this server. So you can provide value for yourself, and others ;-)

We will use Stripe to manage the API payments.

Let's go ! Go to https://stripe.com

Click the ```Start Now``` button

<p align="center">
  <img src="assets\c7ba12561b6c34dd5c0bd70362f78b97.png" alt="">
</p>

<p align="center">
  <img src="assets\979e2348b1f4f8f0bc6d100757790435.png" alt="">
</p>

Enter the required info, then press ```Create account```

<p align="center">
  <img src="assets\56c51a74101a2875b3465a9985c7ebed.png" alt="">
</p>

Verify your email address.

<p align="center">
  <img src="assets\b422f861e071b344951ddb93b34d5e7d.png" alt="">
</p>

Click on ```Activate payments```

<p align="center">
  <img src="assets\92adf20be87c7089917a38897322cd4b.png" alt="">
</p>

<p align="center">
  <img src="assets\461033fa0da142bf37bb6adf12939e73.png" alt="">
</p>

Choose a business location and type

<p align="center">
  <img src="assets\9aa8f4d890506424e7950c0d7ced5082.png" alt="">
</p>

Enter your personal info

<p align="center">
  <img src="assets\80ed6058834e54cdf164868342649705.png" alt="">
</p>

<p align="center">
  <img src="assets\5849c7d1a082802f0d89a3a2d0c60612.png" alt="">
</p>

<p align="center">
  <img src="assets\9d55272a3695d8636a36cb08dcbeb8fc.png" alt="">
</p>

Tell more about the type of business you want create. Ignore the ```VAT``` field.

For ```Industry```  choose ```Software```

<p align="center">
  <img src="assets\c4a5a313b46d34a4942cd6decf047ce3.png" alt="">
</p>

Add your own website's home to the ```Business website``` field.

You have a homepage, located at ```https://www.your_domain_name.tld/home.html```. Try it in your browser.

<p align="center">
  <img src="assets\02338c27ab0dad73c7accda965e67494.png" alt="">
</p>

<p align="center">
  <img src="assets\42f58a14773ddfe2bd2efa046a108d32.png" alt="">
</p>

In the ```Product description``` field, add a description of your e-business. You're making a monetized API, so here's a description that explains what your e-business is about.

```
I need to monetize my own Node.js, so thanks to Stripe, I can generate one-time-payment links that allows users to purchase API access for 15 $. This one-time-payment gives the user access to an API key given via email, + 5000 API Credits for this API Key. Then there's a API credit topup system, similar to PSN Cards or phone topup. So when the users make API calls, they use API Credits. So when the users run out of credits, they need to purchase API Credits via one-time-payment links. (5000 API Credits for 5 $, 10000 API Credits for 10 $ etc...)
```

<p align="center">
  <img src="assets\adac71c3dae348ef4b701b6efea15ed3.png" alt="">
</p>

Give the average delivery time of the service, to your customer. A server serves almost immediately it's users, so choose ```Within one day```

<p align="center">
  <img src="assets\74893a7306eb3d74b21b90973229207f.png" alt="">
</p>

<p align="center">
  <img src="assets\e820650d0442d8200d162969651bf4e8.png" alt="">
</p>

Add a ```STATEMENT DESCRIPTOR``` and a ```SHORTENED DESCRIPTOR```
. These are the cryptic words that appear on your customer's bank statements.

<p align="center">
  <img src="assets\b796dd347555106e238a507967bac09f.png" alt="">
</p>

Put something that makes sense for your Server. I decided to put ```MaslowCorp``` and ```MaslowGANG``` as bank statement descriptors for my server, but be original and add something different for your users.

<p align="center">
  <img src="assets\f21b7659010be36ae01ede90926fd78e.png" alt="">
</p>

<p align="center">
  <img src="assets\f7304d432a3b8a81e52574503fa41c9c.png" alt="">
</p>

<p align="center">
  <img src="assets\f3637c8879cbb92b42f3d250bc4cff95.png" alt="">
</p>

Link your bank account to your Stripe account, so you can collect your user's payments.

<p align="center">
  <img src="assets\b13536fb879e2f6e5ca300a8a1b800ff.png" alt="">
</p>

To secure your Stripe account, click on the ```Use an authenticator app``` button.

<p align="center">
  <img src="assets\bcba0b35b16aaea4ecf1d0654fb87c3d.png" alt="">
</p>

Link your Authenticator app you downloaded recently, to your Stripe account, using the QR Code on your screen.

<p align="center">
  <img src="assets\57bf6b710c5f71900fdbb40e47a4c77a.png" alt="">
</p>

Write your backup code ON A PIECE OF PAPER. The same piece of paper where you wrote all your other important credentials linked to your online work, if you listened to my earlier suggestion ;-)

<p align="center">
  <img src="assets\00681f648e6f5c301f533cd26bcb07ca.png" alt="">
</p>

Also download the backup code, using the Download button

<p align="center">
  <img src="assets\e145c38fa3bcdf7e73ac25ee273b27a3.png" alt="">
</p>

<p align="center">
  <img src="assets\df607f094a2c677fb5ca8c54bb31ed7f.png" alt="">
</p>

Press ```Continue```

<p align="center">
  <img src="assets\8a0aacd9b5219244f885b9f02716862d.png" alt="">
</p>

Press ```Activate and continue``` to activate Automatic VAT Tax calculation.

<p align="center">
  <img src="assets\e921041283059b536d32f967de00cce4.png" alt="">
</p>

<p align="center">
  <img src="assets\01cc30b4af3e16ea29cfdfd7ffdae5ae.png" alt="">
</p>

Now it's time for Stripe to review your data.

If anything is missing/wrong, you'll get warnings/errors. Click the ```Edit``` button to fix the bad data.

Otherwise you'll get confirmation that it's OK

<p align="center">
  <img src="assets\9cf2f00b542aaacb06f8550e4bb07185.png" alt="">
</p>

Click ```Agree and submit```

<p align="center">
  <img src="assets\a91cc384e9cbe696a08a5a1caa80562d.png" alt="">
</p>

You will be redirected to https://dashboard.stripe.com/payments

<p align="center">
  <img src="assets\11d72df533e712b7bf9065fd6b2800a3.png" alt="">
</p>


Go to https://dashboard.stripe.com/dashboard

<p align="center">
  <img src="assets\4360256d06c7eb28eac751d1e95bc577.png" alt="">
</p>

In the appbar, toggle the ```Test mode``` ON

<p align="center">
  <img src="assets\42bb474065ceae381d5598c704b24d12.png" alt="">
</p>

<p align="center">
  <img src="assets\781e31091b46335ad081a6a7117b4a46.png" alt="">
</p>

On the leftmost menu of your screen, click on ```More +```

<p align="center">
  <img src="assets\fd9c9ae6ec4e35920b58ea9741532247.png" alt="">
</p>

Select ```Product catalog```

<p align="center">
  <img src="assets\e185e6231466e4856bd89b1eac603c57.png" alt="">
</p>

Add your first test product, it is the API Subscription of 15 $
(10 $ for the API Subscription + 5 $ for 5000 API Credits)

Before you click on ```Add a product``` , make sure that the Test Mode is ON (Enabled = orange) in the appbar.

<p align="center">
  <img src="assets\9399fe05604945b2412d81a56a5a32bc.png" alt="">
</p>

Click on ```Add a product```. 

<p align="center">
  <img src="assets\787a70e67162880470c9ca14bbb8aa1c.png" alt="">
</p>

<p align="center">
  <img src="assets\d03cf5c871efd1410e0995f07589cf87.png" alt="">
</p>

For the ```Name``` field, put ```Lifetime API Subscription + 5000 API Credits```

<p align="center">
  <img src="assets\1476884b3942e0b317f40a63a9faeb64.png" alt="">
</p>

For the ```Description``` field, type ```This gives you a lifetime access to the your_server_name API, and you also get 5000 API Credits to begin your creative journey.```

<p align="center">
  <img src="assets\6eb0780acb51afd59713a63961ba8d91.png" alt="">
</p>

Upload an image (Your business, or should I say, EMPIRE's logo.)

<p align="center">
  <img src="assets\69e9f7d663dc5faee72407fc446f0bf9.png" alt="">
</p>

Here's my empire logo. The Maslow empire. Well, right now, it's just a dream, I'm currently on the verge of homelessness due to a difficult socio-economic situation, but I believe that one day, I will be able to generate income so I can live a stress-free life. By stress-free life, I mean mostly being able to pay my own rent without government assistance and odd-jobs. ;-)

Enough sob story again ;-)

I want you to create your own business logo for your server/API/international business. It's very important. A brand logo is powerful.

<p align="center">
  <img src="assets\598028f4448739b5d0c893ad8ed8a208.png" alt="">
</p>

For the ```Pricing model``` dropdown menu, choose ```Standard pricing```

<p align="center">
  <img src="assets\34fa1936e6f40428f87d77b282c3c805.png" alt="">
</p>

Enter the API Subscription price in the ```Price``` field. Mine is ```15``` Euros.

<p align="center">
  <img src="assets\04c77837b4f137ca9ccd6aeb1741d122.png" alt="">
</p>

Between ```Recurring``` and ```One time```, choose ```One time```.

<p align="center">
  <img src="assets\caad7c1b461363a955e51f45333e80b4.png" alt="">
</p>

Click the ```Save and add more``` button, to save this current product, and add another one.

<p align="center">
  <img src="assets\3287ad91e65c1a0005b6834a61004995.png" alt="">
</p>

This other product, is the 5000 API Credits topup, for the user.

For the ```Name``` field, type ```5000 API Credits```

<p align="center">
  <img src="assets\369001a3b785b3dd98896603b346dcec.png" alt="">
</p>

For the ```Description``` field, type ```This gives you 5000 API Credits. With these credits, you can use the powers of the your_server_name API.```

<p align="center">
  <img src="assets\0c008362464696446528753406143b9d.png" alt="">
</p>

Add your multi-quadrillion dollar empire's logo ;-)

<p align="center">
  <img src="assets\1f4572372b5f600d0089931dd33afe27.png" alt="">
</p>

For the ```Pricing model``` dropdown menu, choose ```Standard pricing```

<p align="center">
  <img src="assets\2bf658c10dbd39ba0245c4653a86a316.png" alt="">
</p>

Enter the 5000 API Credits price in the ```Price``` field. Mine is ```5``` Euros.

<p align="center">
  <img src="assets\439e364dd0eebc228a4d45e9fbde8559.png" alt="">
</p>

Between ```Recurring``` and ```One time```, choose ```One time```.

<p align="center">
  <img src="assets\6ba584410864e118726dcc3bd485101e.png" alt="">
</p>

Click the ```Save product``` button, to save this current product.

<p align="center">
  <img src="assets\d57c06761054821b989d58018fc3eb44.png" alt="">
</p>

Go to https://dashboard.stripe.com/test/products?active=true

You should see both of your products there !

<p align="center">
  <img src="assets\e8fbf2b013e2cfdd1ee8606cdaa3f1df.png" alt="">
</p>

In the appbar, click on ```Developers```

<p align="center">
  <img src="assets\844cc52df8d0404984515e921ea1a26b.png" alt="">
</p>

Click on ```API keys```

<p align="center">
  <img src="assets\b787a6bbb5c51e1639092c8c64c82755.png" alt="">
</p>

<p align="center">
  <img src="assets\da746369779016b94e4c26323200677f.png" alt="">
</p>

Copy the ```Secret key```

<p align="center">
  <img src="assets\5e43a5f8f675935c570294fdc680164c.png" alt="">
</p>

<p align="center">
  <img src="assets\3d775e22f7ea2c3a4750172b0604b088.png" alt="">
</p>

<p align="center">
  <img src="assets\94c92faa7cf5c7f1dd44fa147f7cbfc9.png" alt="">
</p>

<p align="center">
  <img src="assets\200d4d035e618883657f676d3527666b.png" alt="">
</p>

Create a file named `.env` , at the root of your server folder.

Then , open this `.env` file , and copy/paste the following content inside this .env file

```

# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
#STRIPE_SECRET_KEY="sk_test_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_API_SUB="payment"
#STRIPE_PAYMENT_TYPE_API_SUB="card"
#STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
#STRIPE_PAYMENT_TYPE_5K_CRED="card"
#STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
#API_URL="http://localhost:8080"
#WEBHOOK_SECRET="whsec_xxxxxxx"

# TEST_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
#STRIPE_SECRET_KEY="sk_test_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_API_SUB="payment"
#STRIPE_PAYMENT_TYPE_API_SUB="card"
#STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
#STRIPE_PAYMENT_TYPE_5K_CRED="card"
#STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
#API_URL="http://localhost:8080"
#WEBHOOK_SECRET="whsec_xxxxxxx"

# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're implementing a live monetized server,
# ready to accept REAL payments (Stripe live mode) 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a live webhook created from the stripe dashboard
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
#STRIPE_SECRET_KEY="sk_live_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_API_SUB="payment"
#STRIPE_PAYMENT_TYPE_API_SUB="card"
#STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
#STRIPE_PAYMENT_TYPE_5K_CRED="card"
#STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
#API_URL="https://your_server_url.com"
#WEBHOOK_SECRET="whsec_xxxxxxx"

# The OPENAI API Key, to get wisdom from the A.I. wizard.
#
# Uncomment this env variable if you're using OpenAI in your backend
#OPENAI_API_KEY="sk-xxxxxxxx"


# The Cloudinary account's credentials, if you want to upload stuff.
#
# Uncomment this block if you want to use Cloudinary on your backend.
#cloudinary_email="cloudinary.acct@gmail.com"
#cloudinary_cloud_name="xxxxxxxxxx"
#cloudinary_upload_preset="xxxxxxxxxx"
#cloudinary_api_key="xxxxxxxxxxxx"
#cloudinary_api_secret="xxxxxxxxxxxxxxxx"


```

Find this block of code in .env, uncomment it, and replace the value of the variable ```STRIPE_SECRET_KEY``` with the secret key you just copied from Stripe  (`sk_test_xxxxxxx` is what needs to be replaced): 

```
# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
#STRIPE_SECRET_KEY="sk_test_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_API_SUB="payment"
#STRIPE_PAYMENT_TYPE_API_SUB="card"
#STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
#STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
#STRIPE_PAYMENT_TYPE_5K_CRED="card"
#STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
#API_URL="http://localhost:8080"
#WEBHOOK_SECRET="whsec_xxxxxxx"
```

Here's what I meant by uncommenting, it's removing the `#` comment in front of the variable names

```
# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
STRIPE_SECRET_KEY="your_own_secret_key_here"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx"
```

Replace the value of the variable ```STRIPE_ITEM_PRICE_ID_API_SUB``` with the price ID of the ```Lifetime API Subscription + 5000 API Credits``` product. (`price_xxxxxxx` is what needs to be replaced): 

Your products are located here: https://dashboard.stripe.com/test/products?active=true

Click on the ```Lifetime API Subscription + 5000 API Credits``` product.

<p align="center">
  <img src="assets\086abe59e8076b275ae7249332cf3013.png" alt="">
</p>

<p align="center">
  <img src="assets\c80c79eb416d651f98e313179babf3da.png" alt="">
</p>

Copy the Price ID, and paste in as the value of the variable `STRIPE_ITEM_PRICE_ID_API_SUB`

<p align="center">
  <img src="assets\683e581f3f0e8bdb0403f5ff83062e55.png" alt="">
</p>

<p align="center">
  <img src="assets\5641f4855c717c1aad3b5f25964478cb.png" alt="">
</p>

```
# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
STRIPE_SECRET_KEY="your_own_secret_key_here"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx" <==== HERE
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx"
```

Open `index.js` at the root of your server folder. Uncomment this piece of code:

```
/**
 * 
 * Uncomment this code if you want to monetize your API with Stripe
 *
// le secret key du compte stripe, dispo sections
// developers du dashboard stripe
// https://dashboard.stripe.com/test/apikeys
const stripe_secret_key = process.env.STRIPE_SECRET_KEY;

// initialise l'instance de stripe,
// nécessaire pour pouvoir effectuer des requetes payantes
const stripeInstance = new stripe(stripe_secret_key);

*/
```

Open ```index.js``` at the root of your server folder. Uncomment the ```//checkoutEndpoint(app, stripeInstance);``` line of code

<p align="center">
  <img src="assets\fe864393bfa278d7854d788e0d7162ba.png" alt="">
</p>

<p align="center">
  <img src="assets\a61df7ae93e99bffad4e5a8eba6dbb10.png" alt="">
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


To make API calls to your local server, there's a tool called ```Postman```. Download at install it:

https://postman.com

<p align="center">
  <img src="assets\09fbe289f1d7fbf955f3564c5ec36f2c.png" alt="">
</p>

<p align="center">
  <img src="assets\1abee8ae1183a05da09616a4c427423a.png" alt="">
</p>

Open a new Postman tab, by clicking on the ```+``` icon. Then select ```POST```, and type ```localhost:8080/checkout```

<p align="center">
  <img src="assets\6e171b9ea24d05352042064370c3709d.png" alt="">
</p>

<p align="center">
  <img src="assets\62434177cb89559b33533ed96e48569f.png" alt="">
</p>

<p align="center">
  <img src="assets\3420e607834faa91352e63b1e90dc826.png" alt="">
</p>

Click ```Send``` to send an API request to your local server.

<p align="center">
  <img src="assets\ae7e1563f320a36bc72caf44dfc247a9.png" alt="">
</p>

You should get a ```200 OK``` response. Find the ```url``` key of this answer. Scroll at the very bottom of the answer to find it, typically.

<p align="center">
  <img src="assets\c64f6b0c29fd58fd2116252072ba0313.png" alt="">
</p>

<p align="center">
  <img src="assets\9d8564cd7b6ee0b076b123cee3baf170.png" alt="">
</p>

Open this URL in your browser, by ```Ctrl + Click``` it.


The URL should look something similar to:


<p align="center">
  <img src="assets\04787b69e31980751fb3b8f71c4f2ee0.png" alt="">
</p>

Now you are in payment page. For an API Subscription + 5000 API Credits !

We're in test mode, so don't worry. Nobody is being charged yet.

You might wonder how to test this payment page ? It's simple. Stripe provides us with the number ```4242424242424242```, ```12/34```, ```567``` to test the payment. This is a test card number. Enter this card info, and add a fake email address that doesn't really exist. 

<p align="center">
  <img src="assets\12ccac1308d7c0e0463dec94f0e5b8eb.png" alt="">
</p>

<p align="center">
  <img src="assets\ca85e17c8cab7a7d67992cb7f01fe9d0.png" alt="">
</p>

<p align="center">
  <img src="assets\2eb277d09c12067bbf296b2b7c4a0980.png" alt="">
</p>

<p align="center">
  <img src="assets\8e4963479126e2f335ac6e71f327ff4b.png" alt="">
</p>

<p align="center">
  <img src="assets\9499d9280c2a7490e7d436ba04e2cc36.png" alt="">
</p>

<p align="center">
  <img src="assets\652bc6aa4c2a8c9d0615830e7d3053de.png" alt="">
</p>

Before you click the ```Pay``` button, you can navigate to

https://dashboard.stripe.com/test/payments

To see the before/after payment change

Before the payment, the page is empty, and after the payment, you will see the latest payment made.

Once you entered the payment data, click the ```Pay``` button, to pay.

<p align="center">
  <img src="assets\208c536f7a55f8dee02cec4369f4b5b4.png" alt="">
</p>

If everything went smooth, you should be redirected to the url ```https://your_domain_name.tld/success.html```

<p align="center">
  <img src="assets\c2cfd1512b9afadd6d78e07e4ac09802.png" alt="">
</p>

<p align="center">
  <img src="assets\ea09dc6de50859d1d6490c165c00a114.png" alt="">
</p>

On the https://dashboard.stripe.com/test/payments page you should see the new payment.

<p align="center">
  <img src="assets\0d4588cc0555f247953a00caa245d557.png" alt="">
</p>

Okay, now we're going to implement a Stripe webhook in your server, so you can save the user data in a Cloud Firestore database when the user purchases an API Subscription and/or API Credits. Let's go !

First let's install the ```stripe-cli``` command line tool, in order to test the Stripe webhook locally.

### Stripe CLI install Windows

The simplest way to install this tool on Windows 10, is via the ```scoop``` command line tool.

Open Powershell (Make sure it is NOT opened as administrator) 

In Powershell, run the following command 

```
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

Select ```Yes to ALL```.

In Powershell, run the command 

```
iwr -useb get.scoop.sh | iex
``` 

to install scoop.

Close Powershell and any other Terminal currently opened. Close all VS Code windows. Then reopen a Terminal/Powershell etc... to test scoop.

Run the ```scoop``` command to check that the installation was successful.

Run these 2 commands one after another, to install ```stripe-cli```:

```
scoop bucket add stripe https://github.com/stripe/scoop-stripe-cli.git
```

```
scoop install stripe
```

### Stripe CLI install Linux

See https://stripe.com/docs/stripe-cli for more info

### Stripe CLI install MacOS

See https://stripe.com/docs/stripe-cli for more info


Run the ```stripe login``` to connect ```stripe-cli``` to your Stripe account.

<p align="center">
  <img src="assets\4c6656f87d884f4e16fcc08e6e42c3cd.png" alt="">
</p>

press Enter

<p align="center">
  <img src="assets\137a5059d50134c5e6de424ac093157c.png" alt="">
</p>

Press ```Allow access```

<p align="center">
  <img src="assets\2364bb3fed2175299c8e2cf79b58d845.png" alt="">
</p>

<p align="center">
  <img src="assets\4e9bdb4e42c741308ddfe13cfaccf9ac.png" alt="">
</p>

<p align="center">
  <img src="assets\36ecb82e8fd186b4d3f67cf84edeab40.png" alt="">
</p>

Done ! You're logged in via command line.

<p align="center">
  <img src="assets\8f8082a915bb4599868cbf2b865a871f.png" alt="">
</p>

Open ```index.js``` in the root of your server folder, and uncomment the line of code ```//webhookEndpoint(app, stripeInstance);```

<p align="center">
  <img src="assets\a24bc5acf0f613dd59389e177a169008.png" alt="">
</p>

<p align="center">
  <img src="assets\81a7f54bcfffd423d68b83f39094a102.png" alt="">
</p>

Open a Terminal, and run this command to start the Stripe local webhook listener:

```
stripe listen --forward-to localhost:8080/webhook
```

Copy the webhook signing secret in your Terminal , the ```wh_sec_xxxxxxx``` stuff

<p align="center">
  <img src="assets\165f0cb3833ad1cfa6c6f72eb71c36bb.png" alt="">
</p>

<p align="center">
  <img src="assets\93bdf65c4481ad80ffdb40820638ebb6.png" alt="">
</p>

Open the file ```.env``` in your server folder.

Replace the value of the ```WEBHOOK_SECRET``` variable, with the webhook signing secret you just copied.

```
# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
STRIPE_SECRET_KEY="sk_test_xxxxxxx"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx" <===== THIS VALUE HERE
```

Open the file ```src/services/FirebaseCRUD/FirebaseCRUD.js```

Locate this line of code: ```let db = null; //InitFirestore();``` and uncomment the InitFirestore() piece like this ```let db = InitFirestore();```

<p align="center">
  <img src="assets\4842d595b14af01aaf0e1ee85c6c7d35.png" alt="">
</p>

<p align="center">
  <img src="assets\8da48beeda3cbf3782ceb034d8b67448.png" alt="">
</p>

Okay, now we will create a Cloud Firestore account and database, for your server ! SO your API Customer data can be safely stored in the cloud.

Visit https://console.firebase.google.com

Go to the same Firebase project account that you created for your Android app.

Locate the ```Settings``` icon in the top-left corner of the screen. Click it.

<p align="center">
  <img src="assets\fa9b4df48e9e0f2c64f8cd85831d9819.png" alt="">
</p>

Click on ```Project settings```

<p align="center">
  <img src="assets\00248f66bcdda5dc22da325c504a8169.png" alt="">
</p>

Click on ```Service accounts```

<p align="center">
  <img src="assets\e873501df4000ceebec923062f9917ea.png" alt="">
</p>

In the ```SDK Admin Firebase``` screen, make sure ```Node.js``` is selected, then click the ```Generate new private key``` button.

<p align="center">
  <img src="assets\c8b63d04c6cf9154f34f50ffad6d6ccc.png" alt="">
</p>

Click ```Generate key``` to confirm.

<p align="center">
  <img src="assets\e47f39c020463f05f9572b65cc56de25.png" alt="">
</p>

Open the downloaded file. This file contains a JSON object that we need to copy/paste in the file ```src/services/FirebaseCRUD/FirebaseCRUD.js```

<p align="center">
  <img src="assets\387f75ff00af074e156a66d3382690da.png" alt="">
</p>

<p align="center">
  <img src="assets\268677e85ed426619557aaa3aa1c7d0e.png" alt="">
</p>

<p align="center">
  <img src="assets\aa46c7dfde087810498d901fd67d5a7f.png" alt="">
</p>

In the file ```src/services/FirebaseCRUD/FirebaseCRUD.js``` , locate this piece of code:

```
// initialise cloud firestore avant utilisation
export function InitFirestore() {
  admin.initializeApp({
    credential: admin.credential.cert({
      /* Your Firestore admin data belongs here */
    }),
  });

  const db = admin.firestore();

  return db;
}
```

Remove the empty JSON object and the commment, inside admin.credential.cert.

This piece of code:

```
{
  /* Your Firestore admin data belongs here */
}
```

<p align="center">
  <img src="assets\7344afd561f7639f935f108d20fb704b.png" alt="">
</p>

Paste the JSON object you just copied earlier, inside admin.credential.cert

<p align="center">
  <img src="assets\721ca98f264b67b5dc8702483b87d4b6.png" alt="">
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

Using Postman, make a ```POST``` request to ```localhost:8080/checkout```

<p align="center">
  <img src="assets\c7b0a9c1efaf09ece9875ba079a627f5.png" alt="">
</p>

<p align="center">
  <img src="assets\0b246a7c4ea98779c538e9effbeb13ad.png" alt="">
</p>

Fill in the card details. Stripe provides us with the number ```4242424242424242```, ```12/34```, ```567``` to test the payment.

<p align="center">
  <img src="assets\f3c51ed20a093fb9bc131c6633e17203.png" alt="">
</p>

Yay ! The payment is successful.

<p align="center">
  <img src="assets\6e8aa75791935bb6e65241edcb645441.png" alt="">
</p>

Check your Cloud Firestore database, you should see the user data there.

<p align="center">
  <img src="assets\46d8e8a636da8db435ce34366aa12d57.png" alt="">
</p>

<p align="center">
  <img src="assets\f6e642899fd7186267d60db0364035cd.png" alt="">
</p>

Okay ! We tested the API Subscription checkout. Now, let's test the API Credits checkout.

Open ```index.js``` in your server folder root.

Uncomment the ```//checkoutCreditsEndpoint(app, stripeInstance, 5000);``` line of code.

<p align="center">
  <img src="assets\4349c7070cf195ff972a3824bfb5910b.png" alt="">
</p>

<p align="center">
  <img src="assets\ac8cc84f2e5d065e520c1e79bcb79a72.png" alt="">
</p>

Also uncomment these 3 endpoints too:

`get_api_client_infoEndpoint`

`update_work_dataEndpoint`

`get_work_statusEndpoint`

```
// crée un endpoint nommé get_api_client_info
// reachable via http://localhost:<apiPort>/get_api_client_info
//get_api_client_infoEndpoint(app, stripeInstance);

// crée un endpoint nommé update_work_data
// reachable via http://localhost:<apiPort>/update_work_data
//update_work_dataEndpoint(app, stripeInstance);

// crée un endpoint nommé get_work_status
// reachable via http://localhost:<apiPort>/get_work_status
//get_work_statusEndpoint(app, stripeInstance);
```

Open the file ```.env``` at the root of your server folder.

Replace the value of the ```STRIPE_ITEM_PRICE_ID_5K_CRED``` variable, with the price ID of the ```5000 API Credits``` product.

```
# TEST_STRIPE_CREDENTIALS (localhost)
#
# Uncomment this block If you're testing your server monetization features, while using the
#
# npx maslow start-server-unix or start-server-win10
STRIPE_SECRET_KEY="sk_test_xxxxxxx"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx" <===== THIS VALUE HERE
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx" 
```

Your products are located here: https://dashboard.stripe.com/test/products?active=true

Click on the ```5000 API Credits``` product.

<p align="center">
  <img src="assets\0bd9742e54dc7d50e37e9efa0e4be82a.png" alt="">
</p>

Copy the API ID 

<p align="center">
  <img src="assets\1ed034365b366c26a4508181e80db225.png" alt="">
</p>

Paste it as the value of the variable ```STRIPE_ITEM_PRICE_ID_5K_CRED``` , in the `.env` file at the root of your server folder.



Once you made the required changes, Go At the root of your server folder, and run the 

```
npm run start-server-win10
``` 

command (for Windows users) or the 

```
npm run start-server-unix
``` 

command (for Linux/MacOS users) to start the server. If the server is already running, close it with ```CTRL+C``` then restart it.

Using Postman, make a ```POST``` request to ```localhost:8080/checkout5000```

<p align="center">
  <img src="assets\62fa3901e1d45a0313edefaf92c72704.png" alt="">
</p>

You should get an error telling you that your request misses an API Key. It's because you need to add a valid API key as query parameter to the request URL. Let's try.

<p align="center">
  <img src="assets\258c9c8c61d1b9b400df4420f4b89a53.png" alt="">
</p>

Add ```?apiKey=fugazi``` right after ```localhost:8080/checkout5000``` , in the Postman request URL

<p align="center">
  <img src="assets\69fff804755b249c179a61d0151d727a.png" alt="">
</p>

Now you get another error telling you that the API Key provided is invalid/unknown.

Well... fugazi is a bogus API Key, that's why.

You might wonder how to get this API key ? When you subscribed to the API Subscription + 5000 API Credits, your API key has been printed in the serer Terminal. You can check it out. If you closed and cleaned the terminal after doing the initial subscription, just do another subscription to the API, then an API key will be printed again.

So get yourself an API key in the server's terminal, copy it, and paste it in the Postman URL as a replacement of ```fugazi```

<p align="center">
  <img src="assets\102a307080e9d3b11fa3714a295482ee.png" alt="">
</p>

Copy the API Key, NOT the hashed API Key

<p align="center">
  <img src="assets\e483263c630feedd457615ab85d0e3f0.png" alt="">
</p>

Paste it in the Postman URL, as a replacement for ```fugazi```

<p align="center">
  <img src="assets\dd990047d32de15cf4fa9cf642bcdcb2.png" alt="">
</p>

Now that you have a valid API Key in your request URL, you should get in return, the graal, the all mighty checkout URL !

<p align="center">
  <img src="assets\3d35ac72145b168b81acc2b987b01a4b.png" alt="">
</p>

Remember, Stripe provides us with the number ```4242424242424242```, ```12/34```, ```567``` to test the payment. 

<p align="center">
  <img src="assets\b4160ab179363f8e2d2f0ac72100b494.png" alt="">
</p>

<p align="center">
  <img src="assets\71ff5931dc2c4c342bb115dd3e78420b.png" alt="">
</p>

Another WIN ! Now you have 5000 API Credits added to your initial 5000 API Credits.

<p align="center">
  <img src="assets\928480e01631379ab7f48b4a2e1dd941.png" alt="">
</p>

Check the Cloud Firestore database, and you should see that your ```APICredits``` is now ```10000``` instead of the initial ```5000``` !!!

<p align="center">
  <img src="assets\bfece8e9f4fc83b228ad432895a1ce4d.png" alt="">
</p>

<p align="center">
  <img src="assets\b84a3f6cf36699054877d8b41bb5b05e.png" alt="">
</p>

<p align="center">
  <img src="assets\370730378c4667525c2b35da4d50875d.png" alt="">
</p>




Mission accomplished !

The server's most important features are now implemented ! Now is time to actually create stuff and link our Android app to the server. Let's go, adventurer. I'm very proud of you if you made it this far. That means you have courage within your soul. A true soldier.

Let's create a bridge between your backend server, and your frontend (your Android app)

[Let's go to the next section !](../BridgeFrontendBackend/README.md)
