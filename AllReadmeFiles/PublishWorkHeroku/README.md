
# Get ready for production (Heroku)

Okay ! After all this adventure, it's time to get your magnificient Android app, and your extraordinary server, available for the whole Universe, thanks to Heroku's magic ;-)


## Create the maslow-gpt-api-v2 server (or my-ultra-mega-server ? ;-)


Now that your server is available on Github, we can deploy it on Heroku

Go to https://heroku.com

<p align="center">
  <img src="assets\e2f01896de36eabd9b76a4532c616ddb.png" alt="">
</p>

Press ```Sign up```

<p align="center">
  <img src="assets\cf17096e86c59065a62f2b0e0ca5db3c.png" alt="">
</p>


Enter the necessary data to create a Heroku account.

Specifically, Choose ```Node.js``` as the ```Primary development language```

<p align="center">
  <img src="assets\d3eceb7f8b1eac47a252663d1685833d.png" alt="">
</p>

Confirm the account creation, via the email link you just received

<p align="center">
  <img src="assets\4872c5049908cbd68bea36f20609cb2a.png" alt="">
</p>

<p align="center">
  <img src="assets\edd341505680f770b82c3d97495db0f3.png" alt="">
</p>

If you get an error while trying to sign-up to Heroku, similar to this one below:

<p align="center">
  <img src="assets\f47cbe0c66b20dd3e72d7ec526e96722.jpg" alt="">
</p>

It's most likely because you're using a VPN or you're using a cloud PC like ```Shadow PC```. To get over this issue, temporarily disable your VPN, then clean your browser's cache/cookies, and try again, or if you're using a cloud PC like Shadow PC or other similar services, simply use a smartphone, or a normal physical PC without VPN, to do the sign-up. It can be really annoying, but Heroku needs to implement very strong security measures, because malevolent people use these kind of services to do bad things sometimes, so Heroku is very paranoid. Once you get over this hurdle, the rest of the process is easy peasy. Heroku is a very nice service that simplifies our life as an aspiring backend developer ;-)



Okay, once you verified your email, you'll be asked to create a new password for your Heroku account.

Type your password, and click ```SET PASSWORD AND LOG IN```

<p align="center">
  <img src="assets\f33456f98aa5eae616c349721284386f.png" alt="">
</p>

Your account is ready ! Click om ```CLICK HERE TO PROCEED```

<p align="center">
  <img src="assets\91eb27f2d83508608e942cc031a75e11.png" alt="">
</p>

Login in to your fresh Heroku account, using your email and password

<p align="center">
  <img src="assets\65a5cb81cdbd2d7c24ba9627fb278b7f.png" alt="">
</p>

In order to login to Heroku, you need an authenticator app. Click ```Continue```

<p align="center">
  <img src="assets\dfa8c3ee183653831437cb58a33fad8f.png" alt="">
</p>

Select the option that allows you to login with an Authenticator app.

<p align="center">
  <img src="assets\905b6bc88fb2ad9161755ecc708ef558.png" alt="">
</p>

<p align="center">
  <img src="assets\269780bbbfe6d127219ca0997676c50f.png" alt="">
</p>

Download an authenticator app on your Android device

https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2

And scan the QR Code on screen. You'll get a OTP Code that changes regularly. Pick the latest code and enter it on screen.

<p align="center">
  <img src="assets\1fa2d28387da7cf9d077fada707a1172.png" alt="">
</p>

You'll be redirected to a "Terms of service' page.

<p align="center">
  <img src="assets\c07ea41ba7f36e0b1006a7491279c59e.png" alt="">
</p>

If you live in Italy, check this thing on.

<p align="center">
  <img src="assets\6b974e7c51595d4cf1f40db71a513bc1.png" alt="">
</p>

Press ```Accept```

<p align="center">
  <img src="assets\a6e1fa7862a5847e32c342b1c56f9568.png" alt="">
</p>

Now you should be at the Heroku Dashboard screen

https://dashboard.heroku.com/apps

<p align="center">
  <img src="assets\f3c3fe6cddd09323dec893af591f439c.png" alt="">
</p>

Add a payment method to your Heroku account

<p align="center">
  <img src="assets\1a2f3d08a9a8441f05bf66f0610e2d12.png" alt="">
</p>

Click on ```Add credit card```

<p align="center">
  <img src="assets\f4dd2023179b410c5a44c013559f51d9.png" alt="">
</p>

Fill in the details, then click on ```Save details```

<p align="center">
  <img src="assets\ff5a61bc8897ad2837630f0ceb08b0b7.png" alt="">
</p>

<p align="center">
  <img src="assets\e5f3bd77a1aeb83976b7f1aa7bbe07a0.png" alt="">
</p>

If your credit card data is valid, you should now see that your credit card is linked to your Heroku account. Great !

<p align="center">
  <img src="assets\9f3cd0f51afb36bf769ca64d0a6ec981.png" alt="">
</p>

Subscribe to the ```Eco Dynos Plan```. Click on ```Subscribe to Eco```

<p align="center">
  <img src="assets\1c47582209f366de83535e422458f82e.png" alt="">
</p>

Click on ```Subscribe```

<p align="center">
  <img src="assets\3749336eb811a88d9fbee8bd6994e2a3.png" alt="">
</p>

<p align="center">
  <img src="assets\bfe6169c18eeccbce3d0dd938de2d786.png" alt="">
</p>

You should see that the subscription is now effective !

<p align="center">
  <img src="assets\f56fab77adaac80f91086c68da2250f7.png" alt="">
</p>

Go to https://dashboard.heroku.com/apps , to create this worldwide superstar server ;-)

Click on ```Create new app```

<p align="center">
  <img src="assets\39a1d0c2dacb9487ba05672fd989d871.png" alt="">
</p>

Give a name to your Heroku app. Preferrably the same name as your server name.

Then choose a region. The default region is ```United States```. You can choose another region if you want.

<p align="center">
  <img src="assets\a66a0df05ce68571486d3b811d620d98.png" alt="">
</p>

Ignore the ```Add pipeline``` button.

<p align="center">
  <img src="assets\438f17d60b6c3cffe8e4ab4216ccad79.png" alt="">
</p>

Then click ```Create app``` to create the Heroku app.

<p align="center">
  <img src="assets\a885959a78edfbe8bd4e6e4a43e5de20.png" alt="">
</p>

Once created, you'll be redirected to this page

https://dashboard.heroku.com/apps/your_heroku_app_name/deploy/heroku-git

<p align="center">
  <img src="assets\ce72c4b05a12249409033b23a5337049.png" alt="">
</p>

Click on ```Deploy```

<p align="center">
  <img src="assets\b49bc10c37743791f68f3d554452f00c.png" alt="">
</p>

Click on ```GitHub: Connect to GitHub```

<p align="center">
  <img src="assets\0b68153ae0fdda33d32f029ecacd89c3.png" alt="">
</p>

Click on ```Connect to GitHub```

<p align="center">
  <img src="assets\106a38b429c98e0e42a4e9ce2768c206.png" alt="">
</p>

Login to your Github account using your Github email and password

<p align="center">
  <img src="assets\c57f1bec7ec24ade5208289c3c776b70.png" alt="">
</p>

Authorize Heroku

<p align="center">
  <img src="assets\ce56e7b2c86dd7872ffa3af1bdf7876e.png" alt="">
</p>

Press the ```Search``` button to find all the existing Github repos in your Github account. You don't have to type anything before clicking the search button. It will find on it's own.

<p align="center">
  <img src="assets\1356924b3fcfb852f0d6bf61b1e40d8b.png" alt="">
</p>


Click the ```Connect``` button next to the Github repository containing your server.

<p align="center">
  <img src="assets\cc961c39b7e14f698f85212b29d678bd.png" alt="">
</p>

Your Github server repository is now linked to your Heroku account !

<p align="center">
  <img src="assets\f77581b59c021e93817d0f943058a2df.png" alt="">
</p>

Look for the ```Manual Deploy``` section in the same page

<p align="center">
  <img src="assets\e9ca46ae724885dc0b363506e4a5833d.png" alt="">
</p>

Click the ```Deploy Branch``` button

<p align="center">
  <img src="assets\7f9c0b1e2445e1ecbe500ff126364f5f.png" alt="">
</p>

Wait for the deployment process. It takes a minute or so.

<p align="center">
  <img src="assets\c21677f68f51345d170a7457d4fab902.png" alt="">
</p>

When your server has been successfully deployed to Heroku, a success message will be shown.

<p align="center">
  <img src="assets\1f13d23fa1c7aece09ef59f12bb639ea.png" alt="">
</p>

Click on ```View``` to see the deployed server in your browser.

<p align="center">
  <img src="assets\da1f81fd0fb4ed1e8169b44df61d488d.png" alt="">
</p>

A browser window will open. Something like ```Cannot GET /``` should be visible on screen.

<p align="center">
  <img src="assets\07ca57534974c381ee25618608f4ac7e.png" alt="">
</p>

<p align="center">
  <img src="assets\d5dcde29918802b648844f6028cbcf8f.png" alt="">
</p>

If you want some fire, like previously, just add ```/myAPI``` next to the heroku URL

<p align="center">
  <img src="assets\2289aebee02cd9d7774c1de5dc7f3dcb.png" alt="">
</p>

Boom ! Now, you have a server that REALLY serves the whole world. You can send this URL to someone from another country from yours, and they will get fire too !! Your server is not limited to your localhost like previously ! Everyone from Tokyo to Mogadishu can get some fire from your beautiful server.

<p align="center">
  <img src="assets\8c1559663f960fa8504a81e674e2446f.png" alt="">
</p>

But there's a problem..... This URL is UGLY !!! 

<p align="center">
  <img src="assets\1cb5a8a10edb784649a2e785393d06cf.png" alt="">
</p>

Let's fix this. I'm sure you want your server to have a nice, beautiful, professional URL. To do so, you need to purchase your own custom URL.

There's plenty of URL providers like ```GoDaddy``` or ```Hostinger``` and so on, but in this tutorial, we'll buy a URL from ```Namecheap``` , one of the best URL providers out there. Let's go !

Go to https://namecheap.com , and click on the ```Sign UP``` button in the appbar.

Fill in the required data

<p align="center">
  <img src="assets\ae25039cf353db61ea4608e9c04972d1.png" alt="">
</p>

Press ```Create Account and continue```

<p align="center">
  <img src="assets\a18268ceff46729be2a9ccec93b07d80.png" alt="">
</p>

Now you're in the Namecheap Dashboard

<p align="center">
  <img src="assets\d4d35af6e5500a7b974494a533f4116a.png" alt="">
</p>

Click on ```Domains``` in the appbar.

<p align="center">
  <img src="assets\f3e649c81a1ef8c0a40e0b44849e8141.png" alt="">
</p>

In the search bar, type a domain that you want to own. In my case, I want to use ```maslowschool.net``` . Press ```Search```

<p align="center">
  <img src="assets\88d5c5ed56e421b19e57d3dab7b68d8b.png" alt="">
</p>

Great ! ```maslowschool.net``` is available.

<p align="center">
  <img src="assets\8cbfd9f064debdf3a877f5ade83cd865.png" alt="">
</p>

Press the checkout button

<p align="center">
  <img src="assets\87e7a36ab0c5d21103fe02b9db481024.png" alt="">
</p>

<p align="center">
  <img src="assets\8cc7a9268c2c03427cfa32e98ef1a7f9.png" alt="">
</p>

Pay for the shizzle, my nizzle

<p align="center">
  <img src="assets\d36c6b2ac5cc1793d6847ffdbe7a8a01.png" alt="">
</p>

<p align="center">
  <img src="assets\2c00790b86dbaff906332d82c12400a9.png" alt="">
</p>


Once you successfully paid the URL, you will receive a verification email.

Click the verification link and you're good to go.

Now that you're the proud owner of a custom URL, Go to https://dashboard.heroku.com/apps/your_app_name/settings

<p align="center">
  <img src="assets\bce49cad0ed87a3e6a44840675551c5b.png" alt="">
</p>

Scroll down and find the ```Domains``` subsection.

<p align="center">
  <img src="assets\978c6a10b890f7e7b79cf356fe52be47.png" alt="">
</p>

Click on ```Add domain```

<p align="center">
  <img src="assets\729e53ad884f0ce8b742aa943459a687.png" alt="">
</p>

In the ```Domain name``` prompt, type your freshly purchased URL, with ```www.``` before it (VERY IMPORTANT ! Don't add ```http://``` , just ```www.```)

For example:

<p align="center">
  <img src="assets\f8d0a39ed0b7a15396062f22de3fe513.png" alt="">
</p>

<p align="center">
  <img src="assets\8724f917e3cad38e1b7d80f384f477f5.png" alt="">
</p>

Then press ```Next```

<p align="center">
  <img src="assets\215ee9456b722e7a1dea528e59054743.png" alt="">
</p>

You should get a success prompt, looking like this. You can close the prompt.

<p align="center">
  <img src="assets\68390b90825c0809ab6467bce7bb0198.png" alt="">
</p>

Now you can see that ```Your app can be found at http://www.yourdomainname.topleveldomain``` . Let's see if this is true. CLick the url

<p align="center">
  <img src="assets\f6ddb8aa0c2fe1a96cdd4aa70ba2b915.png" alt="">
</p>

<p align="center">
  <img src="assets\fc4130ecea19ad424d234fca23cb6ca3.png" alt="">
</p>

Humm...... Seems like the URL points to nothing. You're going to either an error message, or a page that tells you that your URL got recently purchased by you. Don't worry, it's normal ! We have some things to do so the URL correctly works.

<p align="center">
  <img src="assets\b8ff2741d7621f2675061f8fd41d4fcb.png" alt="">
</p>

Copy the ```DNS Target``` 

<p align="center">
  <img src="assets\19395cd0e8acbbb27e292bac82a7b2bf.png" alt="">
</p>

<p align="center">
  <img src="assets\df3317ee2bde22f8cc2bdb419e5b4e2d.png" alt="">
</p>

Visit this URL: https://ap.www.namecheap.com

<p align="center">
  <img src="assets\3538aa295b30d9b5cdd75ca476b886d4.png" alt="">
</p>

Click on ```MANAGE``` next to your URL

<p align="center">
  <img src="assets\401236bbca94068ceb68b886132f56b3.png" alt="">
</p>

Click on ```Advanced DNS```

<p align="center">
  <img src="assets\bc9b1d67fcb846ed4f1e1e0939fb2473.png" alt="">
</p>

<p align="center">
  <img src="assets\a02ab6c7219231dc3ac84ab8441b5dd6.png" alt="">
</p>

<p align="center">
  <img src="assets\00225548b8f44b8e979b972d4b88c55e.png" alt="">
</p>

Create a ```CNAME``` Record with ```Host``` www , and paste the DNS Target you copied earlier, as it's value. After you paste the DNS Target in the Value field, a green checkmark for save, and a TTL dropdown menu will appear. Before you save the changes, set the TTL to 1 min.

<p align="center">
  <img src="assets\e74a2c3714160e2a7a6ac4658671e0a8.png" alt="">
</p>

<p align="center">
  <img src="assets\0d7113c456293135ae9c26d4b732fe35.png" alt="">
</p>

<p align="center">
  <img src="assets\9eef86665c0f692f6bafc17f3b7a141a.png" alt="">
</p>

<p align="center">
  <img src="assets\0b13bea0e9715197d80aa2aade530341.png" alt="">
</p>

<p align="center">
  <img src="assets\4212a88ce894cfe77d5297892ff81617.png" alt="">
</p>

<p align="center">
  <img src="assets\2f512844512dbcb35d332f26f2caafdc.png" alt="">
</p>

After saving the changes, your ```HOST RECORDS``` section should have the corresponding CNAME you just birthed.

<p align="center">
  <img src="assets\b0fa066b2d8796672d01e853072b38c0.png" alt="">
</p>

Now, Create a URL Redirect Record.

Click ```Add New Record```

<p align="center">
  <img src="assets\b51c0192ce260216ddfb634d4bf9d354.png" alt="">
</p>

Select ```URL Redirect Record``` for the ```Type```

<p align="center">
  <img src="assets\0514d516822c3f6476ff8ba40f1dec86.png" alt="">
</p>

Type ```@``` for the ```Host```

<p align="center">
  <img src="assets\9f686743f358f271154691f03509c9bb.png" alt="">
</p>

<p align="center">
  <img src="assets\32742f7c524f390347f61658ab3d6729.png" alt="">
</p>

Type ```http://www.yourdomainname.tld``` for the ```Value```

<p align="center">
  <img src="assets\74b54cd14a94b333122066d2872c7c60.png" alt="">
</p>

<p align="center">
  <img src="assets\acbfe774cd780048102986acac99e0c6.png" alt="">
</p>

Choose ```Unmasked``` for the last dropdown menu.

<p align="center">
  <img src="assets\50e0781bb18c022f63b56cd6f505d433.png" alt="">
</p>

Save the changes

<p align="center">
  <img src="assets\d5cf833e4d344f157292229c6d9f61dc.png" alt="">
</p>

You should now have a CNAME Record AND a URL Redirect Record:

<p align="center">
  <img src="assets\919e6d8303b88c0e58eb2fa2e9c8a9ae.png" alt="">
</p>


Go to https://dashboard.heroku.com/apps/your_app_name/settings

Scroll down to the ```Domains``` subsection

<p align="center">
  <img src="assets\b733acd126997fce43f2ab0ad3d84906.png" alt="">
</p>

Retry the URL

<p align="center">
  <img src="assets\f824d4a06299bd93a0fab52af7c8650d.png" alt="">
</p>

Now, your custom URL finally works !

<p align="center">
  <img src="assets\26dfce3147825a598540725b9fec760d.png" alt="">
</p>

You can test the ```myAPI``` endpoint, to get some fire !

<p align="center">
  <img src="assets\eee97918e252183ee248b41c09b5fbd9.png" alt="">
</p>

Fyaaaa !! .......Uh OH..... Another problem..... The URL is not secure.....

Don't worry, we will fix this issue !

<p align="center">
  <img src="assets\1de153dc6b16a1103fb2560222904f9b.png" alt="">
</p>

Go to https://dashboard.heroku.com/apps/your_app_name/settings

Scroll down to the ```SSL Certificates``` subsection

<p align="center">
  <img src="assets\a9f1e0a982f4dce907f61f3431d5f24c.png" alt="">
</p>

Click on ```Configure SSL```

<p align="center">
  <img src="assets\bf46fa0da70f0e96b16cc5c861ef5807.png" alt="">
</p>

Select ```ACM (Automatic Certificate Management)```

<p align="center">
  <img src="assets\e99ac02fcb418fd041a0b0e7db0682eb.png" alt="">
</p>

Click ```Next```

<p align="center">
  <img src="assets\975079ac05adeadf7cac9322212c0d50.png" alt="">
</p>

You should see an error telling you ```Basic or above tier required for ACM```

<p align="center">
  <img src="assets\5b7f44abc768e195f4366819ca3b6a9a.png" alt="">
</p>

Go to https://dashboard.heroku.com/apps/your_heroku_app_name/resources

<p align="center">
  <img src="assets\6d04a3763ea994715770e44380f09222.png" alt="">
</p>

Click on ```Change Dyno Type```

<p align="center">
  <img src="assets\66d151ee1078b17a19d330475d3dc6fe.png" alt="">
</p>

<p align="center">
  <img src="assets\f9ed8523c9ef466a3081ae0df5bc2cb1.png" alt="">
</p>

Choose ```Basic```

<p align="center">
  <img src="assets\ece673927583b5af483c3de0f0bfea0d.png" alt="">
</p>

<p align="center">
  <img src="assets\a4a685f38153b1bc73f9eca9b32c8bd4.png" alt="">
</p>

Click on ```Save```

<p align="center">
  <img src="assets\61a2bc80d89dc02b781d6ce3f61d676a.png" alt="">
</p>

<p align="center">
  <img src="assets\a445eef9c8e971a51a28caa8ff7bc959.png" alt="">
</p>

Go back to https://dashboard.heroku.com/apps/your_heroku_app_name/settings

<p align="center">
  <img src="assets\e15e8c4c02ef58f590b44f3027d21425.png" alt="">
</p>

Scroll to the ```SSL Certificates``` subsection

<p align="center">
  <img src="assets\30b3c2b4d8c19341c24ed104465ab3b9.png" alt="">
</p>

Click ```Configure SSL``` , and make sure ACM (Automatic Certificate Management) is selected, then click ```Save```

<p align="center">
  <img src="assets\3dd4fb1d9ccee4a67256f54c7d1f8c37.png" alt="">
</p>

This fix is a step in the right direction. Now, If you visit your server, using 

https://www.your_domain_name.tld

The connection will be secure. Try it out !

<p align="center">
  <img src="assets\14701072ad2ecf253e1d1c0475c9df96.png" alt="">
</p>

<p align="center">
  <img src="assets\5653c0c3df4e7ebee68d0a565a81f4d3.png" alt="">
</p>

<p align="center">
  <img src="assets\6563b2ba00f0fe2930501d884f0c3a6d.png" alt="">
</p>

The problem is, if you visit the server using any other format, such as

https://your_domain_name.tld (no www)

or

http://www.your_domain_name.tld

etc...

The connection will be either unreachable or not be secure. Try it out

<p align="center">
  <img src="assets\3eaba00d835a08fbc8260250bab42801.png" alt="">
</p>

<p align="center">
  <img src="assets\54998c9a661b796a5f3b16a7b5cbcedc.png" alt="">
</p>

To fix this, visit https://dashboard.heroku.com/apps/your_heroku_app_name/settings
  <img src="assets\178310bbd03f122619b41a887a5236a6.png" alt="">
</p>

Scroll to the ```Domains``` subsection, and click on the ```Add domain``` button

<p align="center">
  <img src="assets\e0c723b8594b9c5bd2918a9e579b54e5.png" alt="">
</p>

Add your URL, without the ```www.``` part, in the ```Domain name``` prompt

<p align="center">
  <img src="assets\8977a5531c9d7511165c072eeb13bef9.png" alt="">
</p>

Click ```Next```

<p align="center">
  <img src="assets\418e6de75cd2e04720d44562561ce1e0.png" alt="">
</p>

<p align="center">
  <img src="assets\cc1ef6bdd167dfe6cc428427bd0be94a.png" alt="">
</p>

Your ```Domains``` subsection should look similar to this below:

<p align="center">
  <img src="assets\1c10558a58bf0b32b12f80406b32fbcf.png" alt="">
</p>

Copy the ```DNS Target``` of the URL you just added (The one without ```www.```)

Visit https://ap.www.namecheap.com/Domains/DomainControlPanel/domain_name.tld/advancedns

<p align="center">
  <img src="assets\ed60440dbb70cf73e9d06838bda95764.png" alt="">
</p>

<p align="center">
  <img src="assets\49338acfbff0bd79396198c233f0fd21.png" alt="">
</p>

We will transform the ```URL Redirect Record``` into a ```ALIAS``` Record.

<p align="center">
  <img src="assets\13c129ccd7ce97e3618caa2759edeb4c.png" alt="">
</p>

<p align="center">
  <img src="assets\0c9a88d5d82de1cf27e8b0aa99a881d3.png" alt="">
</p>

```Host``` should be ```@```

<p align="center">
  <img src="assets\504c051a13b5f1f69396fa1564293557.png" alt="">
</p>

```Value``` should be the ```DNS Target``` of the latest URL you added 

(the URL without a ```www.``` )

(The ```DNS Target``` you copied a few steps above. 
at https://dashboard.heroku.com/apps/your_heroku_app_name/settings  
section ```Domains```
Paste it in the ```Value``` field)

<p align="center">
  <img src="assets\c563b54bf7bf0534fee5343788896242.png" alt="">
</p>

<p align="center">
  <img src="assets\8682717a93379d1e38f93870501491a2.png" alt="">
</p>

Set the ```TTL``` to ```1 min.``` , and save the changes.

<p align="center">
  <img src="assets\1b32f3c410efa8c214943b4996e97f4f.png" alt="">
</p>

<p align="center">
  <img src="assets\cd043eb4683f7dd368fd2b3aeea56dac.png" alt="">
</p>

Go to https://dashboard.heroku.com/apps/your_heroku_app_name/settings  

section ```Domains``` , and wait for a bit. Reload periodically the ACM Status with the ```Refresh ACM Status``` button. You'll see the error fading away. Don't panic if it takes some time. It usually takes up to 20 minutes for the changes to appear. Breathe  ;-)

<p align="center">
  <img src="assets\5abfa3b41fcd87310a7a5cdad07603ba.png" alt="">
</p>

<p align="center">
  <img src="assets\dc6f4b71dd944a5b39cae35a0e0561e2.png" alt="">
</p>

<p align="center">
  <img src="assets\d270e4c9ef17fb7219ee794a95233b2c.png" alt="">
</p>

<p align="center">
  <img src="assets\53bb575e0ca262ece9c548ed00740544.png" alt="">
</p>

Now you can try your URL looking like https://your_domain_name.tld (no www) , and you will see that there's no errors anymore. The URL is secure and it points to your server !

<p align="center">
  <img src="assets\21d7b9487794e3e79837876d3bb05446.png" alt="">
</p>

<p align="center">
  <img src="assets\f233fb12cfb02457e12c423e306a3834.png" alt="">
</p>


Once the changes have been successfully pushed to Github, go to

https://dashboard.heroku.com/apps/your_heroku_app_name/deploy/github

<p align="center">
  <img src="assets\5aee561252381d2dd4d3f36352d9c717.png" alt="">
</p>

<p align="center">
  <img src="assets\5d823e0387e6b496c18484e8eca3d6e7.png" alt="">
</p>

Go to the ```Manual Deploy``` subsection, and click on ```Deploy Branch```

<p align="center">
  <img src="assets\146699237fd636a0e8972ac16372ed83.png" alt="">
</p>

Wait for the deployment to take effect

<p align="center">
  <img src="assets\2239233908926f357b02f89dd9fbbfba.png" alt="">
</p>

<p align="center">
  <img src="assets\8a70d48552e6f23881785121b1a4948b.png" alt="">
</p>

When the deployment has completed successfully, retry a http version of your url, to see if It's redirected to https

<p align="center">
  <img src="assets\37c4142b1d19bc5143cfb097b10777b7.png" alt="">
</p>

<p align="center">
  <img src="assets\dd4ab0078058a1d05402a94ac0c7ce9e.png" alt="">
</p>

<p align="center">
  <img src="assets\d4c9529a845da84ce31153238c64cf94.png" alt="">
</p>

As you can see, the URL has been successfully redirected from HTTP to HTTPS.

Mission accomplished.

Now, your URL is not only pretty, but it's also handled properly, to ensure security.

Ok, some more setup. Go to

```
https://dashboard.heroku.com/apps/YOUR_SERVER_NAME/resources
```

To the `Dynos` section, and turn the `worker` dyno ON. To do so, click the pencil icon related to the `worker` dyno. Then toggle the switch ON to turn it on, then click `Confirm` to save the changes.

On the same page, to the `Add-ons` section, search for `Redis Cloud` and install it. Choose the `30 MB` option. It's free, and it will be enough to begin the adventure !

Once the Redis Cloud add-on has successfully installed and is ready, go to 

```
https://dashboard.heroku.com/apps/YOUR_SERVER_NAME/settings
```

and scroll to the `Config Vars` section. If you see a `REDISCLOUD_URL` var, then the Redis Setup is successful !!!

We'll add other variables there soon ;-) Because in production, the `.env` file is not available in the Github repository, for security reasons, so in order to set environment variables in your code, you need to use this `Config Vars` section to add your env variables.  Those are available in your code using `process.env` as you already know.

Go to https://dashboard.stripe.com/test/webhooks

Make sure Test mode is turned on. If you use the URL above, it will ;-)

<p align="center">
  <img src="assets\449af3ec20748e91c9e9c6061e18944f.png" alt="">
</p>

<p align="center">
  <img src="assets\398247928daac95bd5cec5b54070868b.png" alt="">
</p>

Click on `Add an endpoint`

<p align="center">
  <img src="assets\990d0b98b3aac78d59e21b4ef1c478db.png" alt="">
</p>

<p align="center">
  <img src="assets\bd47c265b402629e77a678e30ccddb0c.png" alt="">
</p>

In the `Endpoint URL` field, enter `https://your_url/webhook`

<p align="center">
  <img src="assets\e062c3492a7086c6d3c8c88946eeffe9.png" alt="">
</p>

Click on `Select events`

<p align="center">
  <img src="assets\7dcbe616e78204c9ede6b7fb42d84db6.png" alt="">
</p>


In the `Select events to send` field, type `checkout.session.completed`

<p align="center">
  <img src="assets\241d5c011eaa41d4871be29d5a195896.png" alt="">
</p>

select it

<p align="center">
  <img src="assets\4578c072b3d7105055d9f41e7556adaa.png" alt="">
</p>

Click on `Add events`

<p align="center">
  <img src="assets\e32d7f3f1488846aed50c94e7bde7880.png" alt="">
</p>

Click on `Add endpoint`

<p align="center">
  <img src="assets\3041cb1485dd1b136e21eb8bd0013149.png" alt="">
</p>

<p align="center">
  <img src="assets\ade794c5cd3a7173c1485ce6652a9f56.png" alt="">
</p>

Here's what your endpoint looks like.

<p align="center">
  <img src="assets\bd0e0197f615ea93cdf6ef5bef3f69ed.png" alt="">
</p>

Click on `Reveal` under `Signing secret`

<p align="center">
  <img src="assets\25ffc46caa21bba454f0ea0a7e277adf.png" alt="">
</p>

Copy the signing secret to your clipboard

<p align="center">
  <img src="assets\15c257a5c5d2b6bdea4849e90c6f601c.png" alt="">
</p>

<p align="center">
  <img src="assets\fe6545283293d5cccf35a8342e1c4ed4.png" alt="">
</p>

Open the `.env` file, at the root of your server folder.

Find the `TEST_STRIPE_CREDENTIALS (cloud)` block, and set the `WEBHOOK_SECRET` variable to the webhook secret you just copied in your clipboard. Set all the other values of the `TEST_STRIPE_CREDENTIALS (cloud)` block to the same values of the `TEST_STRIPE_CREDENTIALS (localhost)` block. Ignore the `REDIS_URL` variable. We will not use it, since we have the `REDISCLOUD_URL` variable ;-)

Uncomment all the variables of the `TEST_STRIPE_CREDENTIALS (cloud)` block, except `REDIS_URL` , and comment out all the variables of the `TEST_STRIPE_CREDENTIALS (localhost)` block.

```
# TEST_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx" <== KEEP IT COMMENTED OUT
STRIPE_SECRET_KEY="sk_test_xxxxxxx" <==== SET IT IDENTICAL TO IT's LOCALHOST TWIN
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx" <==== SET IT IDENTICAL TO IT's LOCALHOST TWIN
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx" <==== SET IT IDENTICAL TO IT's LOCALHOST TWIN
API_URL="http://localhost:8080" <==== SET IT TO YOUR HTTPS URL YOU PURCHASED
WEBHOOK_SECRET="whsec_xxxxxxx" <=== SET THIS VALUE TO THE COPY/PASTED SECRET EARLIER
```

The `TEST_STRIPE_CREDENTIALS (cloud)` block, allows you to run your server, and test the Stripe payments in Test Mode, all done on an actual server, not on your localhost/local computer as we previously did ;-)

Also set the `API_URL` variables, for the `LIVE_STRIPE_CREDENTIALS (cloud)` and `TEST_STRIPE_CREDENTIALS (cloud)` blocks. Set these to the URL you just purchased. in the format `https://your_url.whatever`

<p align="center">
  <img src="assets\434bf94473ba5e073e7c0b4c1ba5a80f.png" alt="">
</p>

Go to 

```
https://dashboard.heroku.com/apps/YOUR_SERVER_NAME/settings
```

and scroll to the `Config Vars` section.

Now, in your `Config Vars` section, create a identical variable for each uncommented variable in your `.env` file. By identical, I mean, give it the same name and value as it's twin in `.env`. Don't create a `REDIS_URL` variable, because we don't need it.

In your SDK folder, open the `src/constants/constants.ts` file, and set the `api_base_url_web` key to your own custom URL

<p align="center">
  <img src="assets\b6352dd569ac7c428e61b6302a955236.png" alt="">
</p>

<p align="center">
  <img src="assets\aa10371161a89c2fe9359f0dc33dcd2f.png" alt="">
</p>

Use the Search and Replace feature of your IDE of choice, to replace every instance of `Constants.api_base_url_local` (or `Constants.api_base_url_tailscale` if you use Tailscale) with `Constants.api_base_url_web` . (VS Code shortcut for the Search and Replace, is `CTRL+SHIFT+H`)

<p align="center">
  <img src="assets\9596bbcb0cc1347ac51c2a7c5d783fad.png" alt="">
</p>

<p align="center">
  <img src="assets\e40a5ec958285e3a09b6b529806083ad.png" alt="">
</p>

Run the 

```
npx verdaccio
``` 

command to start Verdaccio

<p align="center">
  <img src="assets\f4ff459a8ea88e36c8e4ea600daaab2d.png" alt="">
</p>

Open another Terminal, leave the verdaccio one active alongside, then run this command, to publish your SDK locally

```
npm run publish:test
```

<p align="center">
  <img src="assets\1a6967972152d129c110ad51766aa66e.png" alt="">
</p>

<p align="center">
  <img src="assets\68b0db1114997d88a539a17783c78641.png" alt="">
</p>

When successfully published, run this command at the root of your Android app folder, to install the latest version of your SDK (the one you just published to verdaccio, the one that uses the web server via Constants.api_base_url_web) in your Android app.

```
npm i YOUR_SDK_NAME@latest
```

<p align="center">
  <img src="assets\78a5eee2d5d3f1e1b84f11843510c875.png" alt="">
</p>

Now,you can test your server, and the server's payment system in Test Mode, using your server URL !!!

### Quick Note: 

We used Verdaccio during dev, in order to get more familiar with the npm publishing ecosystem, but in production, another approach may be needed, especially if you work in a team, because sharing your Verdaccio server with your team can be tedious... (if you're a one mean team or a very small team working on the same computer network, then that's not an issue) 

Thankfully, there's a solution. You can simply create a public Github repository for your SDK 

(make sure you built your SDK using `npm run build` before pushing it to Github, so the `lib` folder is present in your repo) 

Once your SDK is available on a Github repo, then you can install it in your Android app using this command

```
npm i github:YOUR_GITHUB_ACCOUNT_NAME/YOUR_SDK_REPO_NAME
```

Once done, check your `package.json` file in your Android app, and you will see your sdk dependency
looking like

```
"YOUR_SDK_NAME": "github:YOUR_GITHUB_ACCOUNT_NAME/YOUR_SDK_REPO_NAME",
```

And voila !!! Arrivederci ;-) Now you don't need to rely on `npx verdaccio` anymore, and anyone from somewhere around the world can install the Android app dependencies using `npm i` and build your Android app, without errors related to verdaccio !

### End of the note, let's bounce !

Visit https://dashboard.stripe.com/settings/taxation

Make sure `Test Mode` is off

<p align="center">
  <img src="assets\43af33a383a802e268ecb3420802da49.png" alt="">
</p>

Add your Social Security Number, or your SIREN number, to the `Tax Identification Number` field

<p align="center">
  <img src="assets\e055a4e22e6ef99cb27d454529f59c0a.png" alt="">
</p>

<p align="center">
  <img src="assets\d759ee805dfaf8ffd9fc0e98a4cfa55c.png" alt="">
</p>

Visit https://dashboard.stripe.com/test/products

<p align="center">
  <img src="assets\629af08a42296735d7ccc283b67de912.png" alt="">
</p>

Click on both of your products, and then click on `Copy to live mode` to transfer those products in live mode

<p align="center">
  <img src="assets\5f53941de7832cf163999072917993c6.png" alt="">
</p>

<p align="center">
  <img src="assets\87fa4ad3e621530fa03ecb43d3e26217.png" alt="">
</p>

Visit https://dashboard.stripe.com/webhooks

<p align="center">
  <img src="assets\53aa5ad4207dcf432b7c852c7ca2e76a.png" alt="">
</p>

Click on `Import test endpoints`

<p align="center">
  <img src="assets\9d98f905e7fe6c75ff731ac192609904.png" alt="">
</p>

Click `Next`

<p align="center">
  <img src="assets\87eb48ff52846785b978ec5a5471d2b5.png" alt="">
</p>

Click `Import`

<p align="center">
  <img src="assets\2ced6961763a8700197ebaf85c8759a8.png" alt="">
</p>

Visit https://dashboard.stripe.com/apikeys

Locate your secret key, and click on `Reveal live key`

<p align="center">
  <img src="assets\2002b58514015b871dcacaa680013f08.png" alt="">
</p>

Copy this live key to your clipboard, and paste it somewhere warm and safe

<p align="center">
  <img src="assets\9314ae5914643ebf7d5fd01056d975d6.png" alt="">
</p>

Open the `.env` file at the root of your server folder

Find the `LIVE_STRIPE_CREDENTIALS (cloud)` block, and set the `STRIPE_SECRET_KEY` variable to the live secret key you just copied in your clipboard. Ignore the other variables for now, we'll set it soon ;-)

Also, comment out all the variables of the `TEST_STRIPE_CREDENTIALS (localhost)` and `TEST_STRIPE_CREDENTIALS (cloud)` blocks, and uncomment all the variables of the `LIVE_STRIPE_CREDENTIALS (cloud)` block (except `REDIS_URL`), because now it's time to shine, baby ;-)

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making live Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a live webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxx" <=== COPY/PASTE THE LIVE SECRET VALUE HERE
STRIPE_TRANSACTION_TYPE_API_SUB="payment"
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx"
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx" 
```

The `LIVE_STRIPE_CREDENTIALS (cloud)` block, allows you to run your server, and do REAL Stripe payments (AKA Live Mode), all done on an actual server, not on your localhost/local computer as we previously did ;-)

Go to https://dashboard.stripe.com/products 

Make sure Live Mode is Off. It should be if you use the URL provided above

Click on the `Lifetime API Subscription + 5000 API Credits` product

<p align="center">
  <img src="assets\cc6f13739d84c9ecd9b37c5d1c09efff.png" alt="">
</p>

Copy the Price ID

<p align="center">
  <img src="assets\fa79d0d6162f8522247dabcce920989b.png" alt="">
</p>

Set this price id as the value of the `STRIPE_ITEM_PRICE_ID_API_SUB` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making live Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a live webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxx"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"  
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx" <=== THIS VALUE HERE
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx" 
```

Go to https://dashboard.stripe.com/products , and click on the `5000 API Credits` product

<p align="center">
  <img src="assets\621d4b4257a6edaf867ce569550ef692.png" alt="">
</p>

Copy the price id

<p align="center">
  <img src="assets\1b0711950775c553aff9ea0f1bb174f3.png" alt="">
</p>

Set this price id as the value of the `STRIPE_ITEM_PRICE_ID_5K_CRED` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making live Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a live webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxx"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"  
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx" 
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx" <=== THIS VALUE HERE
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx" 
```

Go to https://dashboard.stripe.com/webhooks

Click on your live webhook you created earlier

<p align="center">
  <img src="assets\543d777308838c2d4112b3f20f0ccfda.png" alt="">
</p>

Click on `Reveal` under `Signing secret`

<p align="center">
  <img src="assets\0d48b3f228fdfdf18b06865edc172d4b.png" alt="">
</p>

<p align="center">
  <img src="assets\cc7502c188fc14e23df6546ceecc4bb7.png" alt="">
</p>

Copy this webhook secret to your clipboard.

Set this webhook secret as the value of the `WEBHOOK_SECRET` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making live Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a live webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
#REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxx"
STRIPE_TRANSACTION_TYPE_API_SUB="payment"  
STRIPE_PAYMENT_TYPE_API_SUB="card"
STRIPE_ITEM_PRICE_ID_API_SUB="price_xxxxxxx" 
STRIPE_TRANSACTION_TYPE_5K_CRED="payment"
STRIPE_PAYMENT_TYPE_5K_CRED="card"
STRIPE_ITEM_PRICE_ID_5K_CRED="price_xxxxxx"
API_URL="http://localhost:8080"
WEBHOOK_SECRET="whsec_xxxxxxx"  <=== THIS VALUE HERE
```

Go to 

```
https://dashboard.heroku.com/apps/YOUR_SERVER_NAME/settings
```

and scroll to the `Config Vars` section.

Now, in your `Config Vars` section, update each variable to it's corresponding uncommented variable in your `.env` file. Because we want to use the live Stripe credentials rather than the test Stripe creds.


At the root of your server folder, run the `npm run push` command to push your server to Github. 

<p align="center">
  <img src="assets\0b4e6a08530d8dc82208f6198f76cefb.png" alt="">
</p>

Go to

https://dashboard.heroku.com/apps/your_heroku_app_name/deploy/github

<p align="center">
  <img src="assets\b2f00fb31e9c4c27fdb0d6d4f35fd948.png" alt="">
</p>

<p align="center">
  <img src="assets\c2173ecb1474d7de2502dfaf1397643a.png" alt="">
</p>

Go to the ```Manual Deploy``` subsection, and click on ```Deploy Branch```

<p align="center">
  <img src="assets\9b8036f8395a85b80d4aff87a7ab9af4.png" alt="">
</p>

Wait for the deployment to take effect

<p align="center">
  <img src="assets\282ec5d836cabc7f32cc4affe0e742f3.png" alt="">
</p>

<p align="center">
  <img src="assets\9b41ae3240c78f64089592375c6f30bf.png" alt="">
</p>

Go to https://console.firebase.google.com

Open your server project in Firebase

<p align="center">
  <img src="assets\f51b86c8370d48f1e844cc0867185dc7.png" alt="">
</p>

Go to `Firestore Database`

<p align="center">
  <img src="assets\2324afc44330fa4e77ab4cc8c43ed534.png" alt="">
</p>

Delete the `APIKeys` and `APIPurchases` and `GoogleUsers` and `SqliteReduxDatabases_yourappname` collections, by clicking the 3 dots in the middle subscreen

<p align="center">
  <img src="assets\b761fa57a40060a55b34f5828ee09ce7.png" alt="">
</p>

<p align="center">
  <img src="assets\9ef3a7e1e5946df97d27bd3f03a4392b.png" alt="">
</p>

<p align="center">
  <img src="assets\f58d7b0418cc578727511083738e6d6b.png" alt="">
</p>

Go to https://dashboard.stripe.com/settings/payment_methods

Click on `Link`

<p align="center">
  <img src="assets\d0c3b9d989a9d20e44c298d4332b7751.png" alt="">
</p>

Click `Turn off`

<p align="center">
  <img src="assets\3516100248c42b9ecb83984aaec60499.png" alt="">
</p>

Make sure that ONLY THE `Cards` PAYMENT METHOD IS TURNED ON. If other payment methods are turned on, MAKE SURE TO TURN THEM ALL OFF !!!
This is important because our backend only handles credit card payments.

Go to https://dashboard.stripe.com/radar

Click on `Start your 30 day free trial`

<p align="center">
  <img src="assets\f582ba7b512966ac6dd9ede1952d3dda.png" alt="">
</p>

<p align="center">
  <img src="assets\3caeb90965991b1adf3c3b02d9699a45.png" alt="">
</p>

On the https://dashboard.stripe.com/radar page, go to `Rules`

<p align="center">
  <img src="assets\bef1fd1afc1646cda5e1e3ec1bb325de.png" alt="">
</p>

Turn `Request 3DS if 3D Secure is supported for card` to `Enabled`

<p align="center">
  <img src="assets\c6c81ac8fe3f3a4ce943a383051b0424.png" alt="">
</p>

Click on the 3 dots for the rule

<p align="center">
  <img src="assets\f04aba1da13c34f5da9e84786beec994.png" alt="">
</p>

Click on `Enable`

<p align="center">
  <img src="assets\500923ff4b40ca6e1f6c88bb89a1cda4.png" alt="">
</p>

Click on `Enable rule`

<p align="center">
  <img src="assets\051858186c78a0052bb8dfc850077451.png" alt="">
</p>

Go to https://dashboard.stripe.com/settings/email

<p align="center">
  <img src="assets\2ce51337ead422563bce7b3d3ab68051.png" alt="">
</p>

Check the `Customer Email` section, and turn `Successful payments` ON

<p align="center">
  <img src="assets\d48efdc458f710051904154641d2bf58.png" alt="">
</p>

<p align="center">
  <img src="assets\22cba4cd47c9265a3ea6744c2043f643.png" alt="">
</p>


Go to https://dashboard.stripe.com/settings/public

Turn `Support phone number - Show on receipts and invoices` OFF

<p align="center">
  <img src="assets\66a1b6e590b2e6fa35bfc0cb815c7c07.png" alt="">
</p>

<p align="center">
  <img src="assets\bc4eda07d1c4c8b541832bd24a95e98e.png" alt="">
</p>

Okay ! Now, it's time to make a REAL payment, via credit card.

Make a `POST` request to the `/checkout` endpoint, using your live server URL this time, no localhost

<p align="center">
  <img src="assets\78abf24258d688a246198f85f1264894.png" alt="">
</p>

<p align="center">
  <img src="assets\cc92711afd63843873e794a442693b0b.png" alt="">
</p>

Since this is a real payment, get a real credit card with balance in it, to test the API Subscription for 15 $. Get your own card, and pay yourself ;-)

<p align="center">
  <img src="assets\b23cca2cfe0353473b3ebec9dc7b6039.png" alt="">
</p>

If you use the test credit card `4242424242424242` , it will fail. Test it. As you can see, you need a real card to do it this time.

<p align="center">
  <img src="assets\3608be3fb4b8c9dc6660df10382c23f0.png" alt="">
</p>

When you will enter a real credit card, you will get a 3D Secure check, if your card has 3D secure enabled, then if everything is alright, you will succeed !

<p align="center">
  <img src="assets\e22d64c00683895aabe2b7b7d266a848.png" alt="">
</p>

Once you made a successful payment, go to 

https://dashboard.stripe.com/payments

You will see your payment , and all future payments, there ;-)

<p align="center">
  <img src="assets\b2ee27174d5373f06697d7f2631d42b3.png" alt="">
</p>

With all this setup done, your server is now ready to handle monetization, and your users can now access your powers !

Now, let's see how to create a production ready Android app, so your users can enjoy your beautiful app.

### Android Release APK/AAB creation

In order to generate a release APK/AAB for your Android app, just follow these steps:

### Add a nice app icon for your Android app, if not already done. More info here:

See 

https://stackoverflow.com/a/36233546   

(To be able to add the app icon properly, OPEN THE android/ folder of your app, in Android Studio, and open the `Project Files` project viewer, and follow the instructions in the link above)

### Also give a nice name to your Android app, with a capital letter as the first letter.

Edit the `app_name` string to whatever app name you want. In the following file, in your Android app folder:

android/app/src/main/res/values/strings.xml

### Add a custom splash screen (the app startup screen) to your Android app

See https://github.com/expo/expo/tree/main/packages/expo-splash-screen#-configure-android

You can skip all the optional stuff.

Also, add a 512x512 image, it's a good size ratio.

### Add a custom notification icon to your Android app

See https://notifee.app/react-native/docs/android/appearance.

Also, open the `src/services/ShowNotification/ShowNotification.js` , and set the `smallIcon` property to the name of your desired icon.

### We ready !

Once all this is done, At the root of your Android app folder, run the following commands to generate a fresh release SHA 1 key for your app, and also print it in your Terminal.

```
npm run del-sha-keys-release; npm run gen-sha-keys-release; npm run get-sha-keys-release
```

Copy the printed release SHA1, then add it to your Android App's Firebase Setup.

At https://console.firebase.google.com

You also need to add a custom SHA 1 from Google Play Console, if you plan on putting your app on the Google Play Store. Because if you don't add this custom SHA 1, your Play Store App will not be able to use Google Login features.

Visit

https://play.google.com/console/developers/app/keymanagement

and copy the SHA1 Key there, , then add it to your Android App's Firebase Setup.

At https://console.firebase.google.com

Once you've added the SHA 1 release keys, download the fresh google-services.json file, and add it to the `android/app` folder of your React Native app.

Delete the previous google-services.json file that's already there, and replace it with the new one !

Then you can run this command

```
npm run build-android-release
```

To generate a release APK of your Android app.

You can also run

```
npm run build-android-release-aab
```

To generate a release AAB of your Android app

Then run 

```
npm run copy-apk-release-windows
```

or

```
npm run copy-apk-release-linux
```

or

```
npm run copy-apk-release-macos
```

or

```
npm run copy-aab-release-windows
```

or

```
npm run copy-aab-release-linux
```

or

```
npm run copy-aab-release-macos
```

to move this generated release APK/AAB from the depths of your Android app folder to your Desktop.

From there, soldier, you have enough info to continue your adventure on your own two feet, with the help of Google/DuckDuckGo/StacOverflow/OpenAI/MaslowGPT ;-)

Follow this video tutorial to get your app quickly available to millions of users, on Google Play Store.

https://www.youtube.com/watch?v=295bzuj02BI

If you encounter this annoying error on the `Google Play Console` 

```
Your Android App Bundle is signed with the wrong key. Ensure that your app bundle is signed with the correct signing key and try again
```

Then follow [this Medium article](https://devjorgecastro.medium.com/update-your-android-app-signing-key-from-a-new-keystore-with-play-app-signing-8bd998a81d31) to fix this error.

If you want to create a IOS version of your app, go to the following section:

[Make a IOS version of your app](../AppSetupIOS/README.md)

If you have any question, don't hesitate a second, and ask for help at 

https://github.com/MaslowCorporation/MaslowGPT/issues

Me or someone else from the MaslowGPT community will be very happy to help you figure things out.

Thank you for existing, fellow human ;-)

[Back to main README](../../README.md)