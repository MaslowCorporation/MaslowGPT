
# Get ready for production (RailWay)

Okay ! After all this adventure, it's time to get your magnificient Android app, and your extraordinary server, available for the whole Universe, thanks to RailWay ;-)

First, let's get a nice, professional URL for your server ! 

I'm sure you want your server to have a nice, beautiful, professional URL. To do so, you need to purchase your own custom URL.

There's plenty of URL providers like ```GoDaddy``` or ```Hostinger``` and so on, but in this tutorial, we'll buy a URL from ```Namecheap``` , one of the best URL providers out there. Let's go !

Go to https://namecheap.com , and click on the ```Sign UP``` button in the appbar.

Fill in the required data

<p align="center">
  <img src="https://i.ibb.co/7t1q54n/5ad975e6178a.png" alt="">
</p>

Press ```Create Account and continue```

<p align="center">
  <img src="https://i.ibb.co/5hzwNYc/0fa19ba95ced.png" alt="">
</p>

Now you're in the Namecheap Dashboard

<p align="center">
  <img src="https://i.ibb.co/r3r1bxN/c1435efcd0a3.png" alt="">
</p>

Click on ```Domains``` in the appbar.

<p align="center">
  <img src="https://i.ibb.co/4pT5TfD/fcde2b885747.png" alt="">
</p>

In the search bar, type a domain that you want to own. In my case, I want to use ```maslowschool.net``` .

Type the domain of your dreams, in this search bar ! Then Press ```Search```

<p align="center">
  <img src="https://i.ibb.co/cN1ZCxY/3191645cced7.png" alt="">
</p>

Great ! ```maslowschool.net``` is available.

<p align="center">
  <img src="https://i.ibb.co/HN3VFpn/33728d4cea42.png" alt="">
</p>

Press the checkout button

<p align="center">
  <img src="https://i.ibb.co/tLXVd2p/15ec937b0158.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/59mqk8T/160191fad7cc.png" alt="">
</p>

Pay for the shizzle, my nizzle

<p align="center">
  <img src="https://i.ibb.co/DV9vQKC/4d7c71e56c85.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/4WzJw2d/a1b885eac248.png" alt="">
</p>


Once you successfully paid the URL, you will receive a verification email.

Click the verification link and you're good to go.

Now, you're the proud owner of a custom URL !


Go to https://dashboard.stripe.com/test/webhooks

Make sure Test mode is turned on. If you use the URL above, it will ;-)

<p align="center">
  <img src="https://i.ibb.co/XyN9LKq/0b4490f7d40a.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/J51jpKT/dd5d2795bf62.png" alt="">
</p>

Click on `Add an endpoint`

<p align="center">
  <img src="https://i.ibb.co/ZHspCmT/355fb719b21c.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/j5z9J3s/c225fbb5c292.png" alt="">
</p>

In the `Endpoint URL` field, enter `https://your_url/webhook`

<p align="center">
  <img src="https://i.ibb.co/DQ9Tr9b/78567c47ae9a.png" alt="">
</p>

Click on `Select events`

<p align="center">
  <img src="https://i.ibb.co/ncCZNRB/3ee32c0b50f8.png" alt="">
</p>


In the `Select events to send` field, type `checkout.session.completed`

<p align="center">
  <img src="https://i.ibb.co/5jT82BV/5b441e513a4e.png" alt="">
</p>

select it

<p align="center">
  <img src="https://i.ibb.co/t8sYx28/022e8c97ec67.png" alt="">
</p>

Click on `Add events`

<p align="center">
  <img src="https://i.ibb.co/RCX9rLC/2f92e111b192.png" alt="">
</p>

Click on `Add endpoint`

<p align="center">
  <img src="https://i.ibb.co/GJ4W7Q7/cf45a631b80a.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/C8wbj07/b046b8cf1ed7.png" alt="">
</p>

Here's what your endpoint looks like.

<p align="center">
  <img src="https://i.ibb.co/L8nhRpn/ebe134f131e8.png" alt="">
</p>

Click on `Reveal` under `Signing secret`

<p align="center">
  <img src="https://i.ibb.co/rmYq7Rg/eb00c0bc7651.png" alt="">
</p>

Copy the signing secret to your clipboard

<p align="center">
  <img src="https://i.ibb.co/gJbqK6x/3193909f5403.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/MkytKy5/709ad858eac5.png" alt="">
</p>

Open the `.env` file, at the root of your server folder.

Find the `TEST_STRIPE_CREDENTIALS (cloud)` block, and set the `WEBHOOK_SECRET` variable to the webhook secret you just copied in your clipboard. Set all the other values of this block to the same values of the `TEST_STRIPE_CREDENTIALS (localhost)` block. Ignore the `REDIS_URL` variable for now, we'll set it soon ;-)

```
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
#WEBHOOK_SECRET="whsec_xxxxxxx" <=== THIS VALUE
```

The `TEST_STRIPE_CREDENTIALS (cloud)` block, allows you to run your server, and test the Stripe payments in Test Mode, all done on an actual server, not on your localhost/local computer as we previously did ;-)

Let's test this ! 

Uncomment all the variables of the `TEST_STRIPE_CREDENTIALS (cloud)` , and comment out all the variables of the `TEST_STRIPE_CREDENTIALS (localhost)` block.

Then visit this page:

https://railway.app

This allows you to run your server on the cloud, so other people can access it. It's very simple

Create an account there

<p align="center">
  <img src="https://i.ibb.co/CHzXvQT/8eae654159bb.png" alt="">
</p>

Click on `Choose a plan`

<p align="center">
  <img src="https://i.ibb.co/X7vnR1J/b83fb5dada30.png" alt="">
</p>

Choose the `Hobby` plan

<p align="center">
  <img src="https://i.ibb.co/Ss2w3bz/cc3524327228.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/6JwsxMK/9d3e1b1a4f86.png" alt="">
</p>

Click on `Create a new project`

<p align="center">
  <img src="https://i.ibb.co/bvCGzVZ/533146f5daf7.png" alt="">
</p>

Choose `Deploy from Github repository`

<p align="center">
  <img src="https://i.ibb.co/P5Mtpz2/432032042b6f.png" alt="">
</p>

Choose your server's Github repository from the list

<p align="center">
  <img src="https://i.ibb.co/x5t6hTt/2e9b89a9c259.png" alt="">
</p>

Click on `Deploy now`

<p align="center">
  <img src="https://i.ibb.co/Fh2GcCF/b23b062bf58a.png" alt="">
</p>

Wait for the shizzle ;-)

<p align="center">
  <img src="https://i.ibb.co/hB13V7Y/43e6a899a171.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/rcSxZY7/7d72e96da4ed.png" alt="">
</p>

Click on `Settings`

<p align="center">
  <img src="https://i.ibb.co/X8VKCzp/9aa8d9b87316.png" alt="">
</p>

In the `Public Networking` section, click on `Generate Domain`

<p align="center">
  <img src="https://i.ibb.co/mSzb26x/5a9b03c37f9a.png" alt="">
</p>

Test the `myAPI` endpoint of your server, using your RailWay URL

<p align="center">
  <img src="https://i.ibb.co/KsdzL62/dc1abfa64e7f.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/g9d8FRn/5d91d725b9eb.png" alt="">
</p>

Click on `New`

<p align="center">
  <img src="https://i.ibb.co/rkMJg75/a53ce7911451.png" alt="">
</p>

Choose `Database`

<p align="center">
  <img src="https://i.ibb.co/XVK6ZKf/76e01c614c09.png" alt="">
</p>

Choose `Add Redis`

<p align="center">
  <img src="https://i.ibb.co/4MGqhR0/a536f238c9a2.png" alt="">
</p>

Wait for the shizzle

<p align="center">
  <img src="https://i.ibb.co/Wx7qs86/082bba4dcfdb.png" alt="">
</p>

When ready, click on your Redis database

<p align="center">
  <img src="https://i.ibb.co/z62RmCc/d7331c2662e8.png" alt="">
</p>

Click on `Variables`

<p align="center">
  <img src="https://i.ibb.co/GsWj9MF/94da8590dddc.png" alt="">
</p>

Copy `REDIS_URL` to your clipboard

<p align="center">
  <img src="https://i.ibb.co/kHMV4cR/7b6089401f49.png" alt="">
</p>

In the `.env` file at the root of your server folder, set the `REDIS_URL` variable to this copied value. Set the 2 REDIS_URL variables, for the `LIVE_STRIPE_CREDENTIALS (cloud)` and `TEST_STRIPE_CREDENTIALS (cloud)` blocks. Both of those vars should have the same value. Set them both ;-)

While you're at it, also set the `API_URL` variables, for the `LIVE_STRIPE_CREDENTIALS (cloud)` and `TEST_STRIPE_CREDENTIALS (cloud)` blocks. Set these to the URL you just purchased. in the format `https://your_url.whatever`

<p align="center">
  <img src="https://i.ibb.co/yW6JxDy/31c35a919a7b.png" alt="">
</p>

Push your server to Github, so the server updates itself.

<p align="center">
  <img src="https://i.ibb.co/25sy2r9/c6ac32dbbb74.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/WGMLckD/b832d0bd54bc.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/Xp2pg0B/7ce4eb6f496e.png" alt="">
</p>

You can now test the deployed server, with the RailWay provided URL

<p align="center">
  <img src="https://i.ibb.co/1n5nnwm/ceeb86303f89.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/cCQPcSr/afe1dc01ab49.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/LP1M556/a898af3bad2d.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/p0nWgM5/e838196133d2.png" alt="">
</p>

Go to the `Settings` section of your server, then `Public Networking`, then click on `Custom domain`

<p align="center">
  <img src="https://i.ibb.co/rcbKFsN/30408960922c.png" alt="">
</p>

Type your domain, then click on `Add domain`

<p align="center">
  <img src="https://i.ibb.co/n3LQbLz/22dd98e9fd18.png" alt="">
</p>

You will be given some DNS Records.  Those need to be added to your doamin provider DNS settings. Let's go !

<p align="center">
  <img src="https://i.ibb.co/NWRf4B2/c89fe7412654.png" alt="">
</p>

Here, I assume that you bought a URL on Namecheap as I described earlier at the beginning of this page, but you can of course use any other provider (GoDaddy, etc...) Just add the DNS Records given to you, to your own provider's DNS settings.

Go to https://namecheap.com and login

Once logged in, go to https://ap.www.namecheap.com

Click on `Domain List`

<p align="center">
  <img src="https://i.ibb.co/Cm1qKKV/153232a32d50.png" alt="">
</p>

Click on `MANAGE` next to your domain name

<p align="center">
  <img src="https://i.ibb.co/zVpSGdb/f07230700fc6.png" alt="">
</p>

Click on `Advanced DNS` , then `Add new record`

<p align="center">
  <img src="https://i.ibb.co/Bzcz84q/d659b87a2ef1.png" alt="">
</p>

Create a record of type `CNAME` , with host `@` , and whose value is your own Railway given record value.

<p align="center">
  <img src="https://i.ibb.co/LnzQtb8/cd1cd9dbcf54.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/VJLRXmT/a8b601fe0760.png" alt="">
</p>

Now, back to Railway, you should see that there's some shizzle going on ;-)

<p align="center">
  <img src="https://i.ibb.co/ss5hwkH/da2bcaaadc80.png" alt="">
</p>

Wait for it to succeed.

<p align="center">
  <img src="https://i.ibb.co/C8Rm8KC/7fc78e048932.png" alt="">
</p>

Test the `myAPI` endpoint, with your own URL this time

<p align="center">
  <img src="https://i.ibb.co/xHzGr4v/d14ad4ce58d4.png" alt="">
</p>

In your SDK folder, open the `src/constants/constants.ts` file, and set the `api_base_url_web` key to your own custom URL

<p align="center">
  <img src="https://i.ibb.co/ZXKsRFZ/025dd5d46b7f.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/qWSmDGv/fa6409e5ef35.png" alt="">
</p>

Use the Search and Replace feature of your IDE of choice, to replace every instance of `Constants.api_base_url_local` (or `Constants.api_base_url_tailscale` if you use Tailscale) with `Constants.api_base_url_web` . (VS Code shortcut for the Search and Replace, is `CTRL+SHIFT+H`)

<p align="center">
  <img src="https://i.ibb.co/47jQfSY/8dcb6bddeacc.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/mBqw700/19546a6f0072.png" alt="">
</p>

Run the 

```
npx verdaccio
``` 

command to start Verdaccio

<p align="center">
  <img src="https://i.ibb.co/LvtQnm1/5cabd7c7ae40.png" alt="">
</p>

Open another Terminal, leave the verdaccio one active alongside, then run this command, to publish your SDK locally

```
npm run publish:test
```

<p align="center">
  <img src="https://i.ibb.co/J7cXB0r/9e55ae2e0536.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/SNY7jBh/a9747a4906e3.png" alt="">
</p>

When successfully published, run this command at the root of your Android app folder, to install the latest version of your SDK (the one you just published to verdaccio, the one that uses the RailWay server via Constants.api_base_url_web) in your Android app.

```
npm i YOUR_SDK_NAME@latest
```

<p align="center">
  <img src="https://i.ibb.co/hZvv8Zx/2d6c61902e17.png" alt="">
</p>

Now,you can test your server, and the server's payment system in Test Mode, using your RailWay server URL. 

Visit https://dashboard.stripe.com/settings/taxation

Make sure `Test Mode` is off

<p align="center">
  <img src="https://i.ibb.co/SfpDj8N/fe1500935379.png" alt="">
</p>

Add your Social Security Number, or your SIREN number, to the `Tax Identification Number` field

<p align="center">
  <img src="https://i.ibb.co/jVP7VPq/e76296a06566.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/YBT8qXh/1b01576198f9.png" alt="">
</p>

Visit https://dashboard.stripe.com/test/products

<p align="center">
  <img src="https://i.ibb.co/MfhQygh/dfeb6536d69f.png" alt="">
</p>

Click on both of your products, and then click on `Copy to live mode` to transfer those products in live mode

<p align="center">
  <img src="https://i.ibb.co/Wc0dY5B/7a3b141ce59e.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/MNHnCNs/d326d0391f14.png" alt="">
</p>

Visit https://dashboard.stripe.com/webhooks

<p align="center">
  <img src="https://i.ibb.co/L5KVLMv/cb6609ffa5a2.png" alt="">
</p>

Click on `Import test endpoints`

<p align="center">
  <img src="https://i.ibb.co/WxHwQ2P/f34260c48c64.png" alt="">
</p>

Click `Next`

<p align="center">
  <img src="https://i.ibb.co/444vHG5/6bf242437980.png" alt="">
</p>

Click `Import`

<p align="center">
  <img src="https://i.ibb.co/MkPbjxz/a200b97b763b.png" alt="">
</p>

Visit https://dashboard.stripe.com/apikeys

Locate your secret key, and click on `Reveal live key`

<p align="center">
  <img src="https://i.ibb.co/gdCxMM1/085a0d731835.png" alt="">
</p>

Copy this live key to your clipboard, and paste it somewhere warm and safe

<p align="center">
  <img src="https://i.ibb.co/BzHFfzs/7228ab76b3ab.png" alt="">
</p>

Open the `.env` file at the root of your server folder

Find the `LIVE_STRIPE_CREDENTIALS (cloud)` block, and set the `STRIPE_SECRET_KEY` variable to the live secret key you just copied in your clipboard. Ignore the other variables for now, we'll set it soon ;-)

Also, comment out all the variables of the `TEST_STRIPE_CREDENTIALS (localhost)` and `TEST_STRIPE_CREDENTIALS (cloud)` blocks, and uncomment all the variables of the `LIVE_STRIPE_CREDENTIALS (cloud)` block, because now it's time to shine, baby ;-)

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
STRIPE_SECRET_KEY="sk_test_xxxxxxx" <=== THIS VALUE HERE
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

Click on the `Lifetime API Subscription + 5000 API Credits` product

<p align="center">
  <img src="https://i.ibb.co/HG4NNYf/07f8afa4beee.png" alt="">
</p>

Copy the Price ID

<p align="center">
  <img src="https://i.ibb.co/FxQwXn1/9c83e7dfde3a.png" alt="">
</p>

Set this price id as the value of the `STRIPE_ITEM_PRICE_ID_API_SUB` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
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
  <img src="https://i.ibb.co/gZk9jzy/09ea8e0a9b08.png" alt="">
</p>

Copy the price id

<p align="center">
  <img src="https://i.ibb.co/M5GDzJL/6ba7d0b1c6a2.png" alt="">
</p>

Set this price id as the value of the `STRIPE_ITEM_PRICE_ID_5K_CRED` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
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
  <img src="https://i.ibb.co/rQNhpLv/77d50a89a91c.png" alt="">
</p>

Click on `Reveal` under `Signing secret`

<p align="center">
  <img src="https://i.ibb.co/g72cSpp/83a015fbd42b.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/3NpMmPf/ae45d34cd67d.png" alt="">
</p>

Copy this webhook secret to your clipboard.

Set this webhook secret as the value of the `WEBHOOK_SECRET` variable

```
# LIVE_STRIPE_CREDENTIALS (cloud)
#
# Uncomment this block If you're testing your server monetization features 
# (AKA making test Stripe payments, etc...), 
# on RailWay, or any other server/VPS/Heroku/etc...
# and you're using a test webhook created from the stripe dashboard
# instead of using stripe-cli on localhost
REDIS_URL="redis://xxxxxxxxxx@xxxxxxxxxxxxxxx"
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

At the root of your server folder, run the `npm run push` command to push your server to Github. Every time your server is pushed to Github, the RailWay server is automatically updated !

<p align="center">
  <img src="https://i.ibb.co/Kjw7dML/c79c08103646.png" alt="">
</p>

Go to https://console.firebase.google.com

Open your server project in Firebase

<p align="center">
  <img src="https://i.ibb.co/jvFptHH/d0a2b475fb28.png" alt="">
</p>

Go to `Firestore Database`

<p align="center">
  <img src="https://i.ibb.co/XkbLk6f/20d341641af3.png" alt="">
</p>

Delete the `APIKeys` and `APIPurchases` collections, by clicking the 3 dots in the middle subscreen

<p align="center">
  <img src="https://i.ibb.co/PrkMyBb/aafbfc7dfd38.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/WvyB9B6/b3514c68c1dc.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/TtPcyyD/5f9205a3d7df.png" alt="">
</p>

Go to https://dashboard.stripe.com/settings/payment_methods

Click on `Link`

<p align="center">
  <img src="https://i.ibb.co/5GHwJyt/6d461e27ccd3.png" alt="">
</p>

Click `Turn off`

<p align="center">
  <img src="https://i.ibb.co/ZMbS0JT/c003a58b3eb1.png" alt="">
</p>

Go to https://dashboard.stripe.com/radar

Click on `Start your 30 day free trial`

<p align="center">
  <img src="https://i.ibb.co/BcHbgfq/b7a29f4072f5.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/5WtXQ0G/3a305efd69d3.png" alt="">
</p>

On the https://dashboard.stripe.com/radar page, go to `Rules`

<p align="center">
  <img src="https://i.ibb.co/8M1T5zW/92e47fa2ccc2.png" alt="">
</p>

Turn `Request 3DS if 3D Secure is supported for card` to `Enabled`

<p align="center">
  <img src="https://i.ibb.co/zG9cdJC/80477c609b86.png" alt="">
</p>

Click on the 3 dots for the rule

<p align="center">
  <img src="https://i.ibb.co/5FdJw6D/a7dc4f1efbf2.png" alt="">
</p>

Click on `Enable`

<p align="center">
  <img src="https://i.ibb.co/K9jLwD5/2a943a7e3140.png" alt="">
</p>

Click on `Enable rule`

<p align="center">
  <img src="https://i.ibb.co/VHM3thy/560daf6f2422.png" alt="">
</p>

Go to https://dashboard.stripe.com/settings/email

<p align="center">
  <img src="https://i.ibb.co/KVTSnwQ/1b76de3f575c.png" alt="">
</p>

Check the `Customer Email` section, and turn `Successful payments` ON

<p align="center">
  <img src="https://i.ibb.co/zrs2q8M/4af8bccc8757.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/3Y1zPF4/b45256b6d4ca.png" alt="">
</p>


Go to https://dashboard.stripe.com/settings/public

Turn `Support phone number - Show on receipts and invoices` OFF

<p align="center">
  <img src="https://i.ibb.co/C2rsLJM/0a821775d576.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/WyVvxPY/7840916f6eff.png" alt="">
</p>

Okay ! Now, it's time to make a REAL payment, via credit card.

Make a `POST` request to the `/checkout` endpoint, using your live server URL this time, no localhost

<p align="center">
  <img src="https://i.ibb.co/6rzzWjR/8a0ac8067485.png" alt="">
</p>

<p align="center">
  <img src="https://i.ibb.co/qDcd0Vn/f1eb616b5c7b.png" alt="">
</p>

Since this is a real payment, get a real credit card with balance in it, to test the API Subscription for 15 $. Get your own card, and pay yourself ;-)

<p align="center">
  <img src="https://i.ibb.co/HnQcWjg/12bcd0b88b53.png" alt="">
</p>

If you use the test credit card `4242424242424242` , it will fail. Test it. As you can see, you need a real card to do it this time.

<p align="center">
  <img src="https://i.ibb.co/cTYj7j5/e4a05d3bad20.png" alt="">
</p>

When you will enter a real credit card, you will get a 3D Secure check, if your card has 3D secure enabled, then if everything is alright, you will succeed !

<p align="center">
  <img src="https://i.ibb.co/5kfWG6M/dffb96f67be5.png" alt="">
</p>

Once you made a successful payment, go to 

https://dashboard.stripe.com/payments

You will see your payment , and all future payments, there ;-)

<p align="center">
  <img src="https://i.ibb.co/YNdcrJ8/74c933d1e44c.png" alt="">
</p>

### Let's get rid of .env and change some credentials ;-)

It's typically recommended to NEVER push the .env file to Github.

We did it during development, for convenience, but now, let's make things better.

We will also reset the Live Stripe API Secret and Webhook Secret, and the OpenAI API key. These are the most crucial credentials in this simple server

This will also serve as a guide, in case your secret credentials get compromised, so you know how to generate new secret credentials, and disable the compromised ones ;-)

Go to https://dashboard.stripe.com/apikeys and revoke your current secret key, by clicking the 3 dots of the secret key, then click on `Roll key`

This will invalidate, and delete the live secret key. A new key will be generated. Copy this key, and paste it as the value of the `STRIPE_SECRET_KEY` variable of the `LIVE_STRIPE_CREDENTIALS (cloud)` in .env of your server.

Go to https://dashboard.stripe.com/webhooks , and click on your live webhook.
Then click the 3 dots near the webhook URL. Then click on `Expire secret`.
Then click on `Reveal` under `Signing secret` and copy the webhook secret.
Paste it as the value of the `WEBHOOK_SECRET` variable of the `LIVE_STRIPE_CREDENTIALS (cloud)` in .env of your server.

If you have set the `OPENAI_API_KEY` variable, then go to https://platform.openai.com/api-keys , and click on the `Create new secret key` button. Once created, delete the previous secret key, and copy the new secret key you just generated. Paste it as the value of the `OPENAI_API_KEY` variable, in .env of your server.

If you have other important credentials in your .env file, set those to fresher values, and invalidate the previous ones.

Then on https://railway.app , login and click on your server, then go to `Variables` , then click on `Raw Editor`. Copy/paste the contents of your .env file there. Save.

Move your `.env` file outside of your server folder. Don't delete it ! Just move it somewhere SAFE.

Add `.env` to your `.gitignore` file.

Run the `npm run reset-main-branch` to delete the commit history and only keep 1 commit, the contents of your server folder right now. WARNING: This deletes all previous commits, so use with caution, if your repo is already used by people in the world. I assume you're preparing a release, so this command is not going to cause problems if you're a one man team preparing a release. If you work in a team, and you use Github to coordinate things, make sure everyone in the team is aware of this change. Please also note that in the Github realm, things NEVER get deleted fully, but we did enough damage control there so it's OK, Relax. ;-)

Now, the last thing to do is to test a real live payment again, so.... get your credit card ready, and pay yourself again ;-)

If you're annoyed with the automatic RailWay redeployment every time you push your server to Github, you can disable automatic redeployment.

Go to `Settings/Git Repository/Automatic Deployments` in your RailWay server, then click `Disable Trigger` . Mission accomplished ! You can now push to your server repo without redeployments in RailWay. Now, if you want to redeploy your RailWay server, after you made changes and pushed the server to Github, you can simply click the `Connect Environment To Branch` button located at the exact same place the `Disable Trigger` button was, then any new push to your server repo, will trigger a RailWay redeployment ;-)

With all this setup done, your server is now ready to handle monetization, and your users can now access your powers !

Now, let's see how to create a production ready Android app, so your users can enjoy your beautiful app.

### Android Release APK/AAB creation

In order to generate a release APK/AAB for your Android app, just follow these steps:

First, add a nice app icon for your Android app, if not already done. More info here:

https://stackoverflow.com/a/36233546   (OPEN THE android/ folder of your app, in Android Studio, and open the `Android` or `Project Files` project viewer, not `Project`)

Also give a nice name to your Android app, with a capital letter as the first letter.

Edit the `app_name` string to whatever app name you want. In the following file, in your Android app folder:

android\app\src\main\res\values\strings.xml

Once all this is done, At the root of your Android app folder, run the following commands to generate a fresh release SHA 1 key for your app, and also print it in your Terminal.

```
npm run del-sha-keys-release; npm run gen-sha-keys-release; npm run get-sha-keys-release
```

Copy the printed release SHA1, then add it to your Android App's Firebase Setup.

At https://console.firebase.google.com

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

If you want to create a IOS version of your app, go to the following section:

[Make a IOS version of your app](../AppSetupIOS/README.md)

If you have any question, don't hesitate a second, and ask for help at 

https://github.com/MaslowCorporation/MaslowGPT/issues

Me or someone else from the MaslowGPT community will be very happy to help you figure things out.

Thank you for existing, fellow human ;-)

[Back to main README](../../README.md)