
# regen-ai-func

This command allows you to regenerate function code quickly, based on whatever is in the ```prompts/get_quick_fix.txt``` file of your function folder.
(a function folder generated with ```generate```).

Let's go !

Open the ```prompts/get_quick_fix.txt``` file of your function folder.

<p align="center">
  <img src="assets\fd1eae3a1b5910c66e729865fb09da47.png" alt="">
</p>

<p align="center">
  <img src="assets\7c2683666580e1de531cebe03f00813d.png" alt="">
</p>

Replace ```Fixes_should_be_here``` with whatever fix you need in the code above it.

(Note: If the function code in ```prompts/get_quick_fix.txt``` is not the same as the code file itself, you can update 
the file ```prompts/get_quick_fix.txt``` with the command ```make-quick-fix```)

<p align="center">
  <img src="assets\f1489f6ffc8ba0ca0213004a45bd1bc2.png" alt="">
</p>

<p align="center">
  <img src="assets\dbb53d2ebafe77cb144d264376da98bf.png" alt="">
</p>

In my case, I want to multiply x and y together instead of adding them together, so I replace ```Fixes_should_be_here``` with ```Multiply together x and y, and also print the result.```

<p align="center">
  <img src="assets\a06733e5e19775bbe468f09e56f6aad5.png" alt="">
</p>

<p align="center">
  <img src="assets\b9d5032e35ec601d150897105bf430ed.png" alt="">
</p>

Run the 

```
npx maslow regen-ai-func path/to/function/folder
``` 

command to re-generate the function code based on the requirements you just specified in ```prompts/get_quick_fix.txt```

<p align="center">
  <img src="assets\ec60e9621ce2704878af06d79b7c57a7.png" alt="">
</p>

Sit back & enjoy a cappuccino !

<p align="center">
  <img src="assets\51aea574217eded1bdc246cf052cac36.png" alt="">
</p>

Success !

<p align="center">
  <img src="assets\cfed9a0037eff762cd67aa44b7325e39.png" alt="">
</p>

Lets check the generated code to see if it meets my requirements. Remember, I want the function to return the product of x and y...... Oops, It seems like the newest generated code returns both the sum and the product, in an object. That's not what I want ! Let's fix this

<p align="center">
  <img src="assets\2f9ff27a0f8ce22bd9d7481428a20d41.png" alt="">
</p>

Reopen the ```prompts/get_quick_fix.txt``` file of your function folder.

Replace ```Fixes_should_be_here``` with the fixes you need. In my case, I specify these fixes: ```I want this function to return only the multiplication result. not both sum and multiplication.```

<p align="center">
  <img src="assets\56e85ab1d2c706d5700b1fcedd89dbd0.png" alt="">
</p>

<p align="center">
  <img src="assets\15e67401f03328c79e490a99210661b9.png" alt="">
</p>

<p align="center">
  <img src="assets\dedbb4dc32c360414930f74929e93080.png" alt="">
</p>

Run the 

```
npx maslow regen-ai-func path/to/function/folder
``` 

command to re-generate the function code based on the requirements you just specified in ```prompts/get_quick_fix.txt```

<p align="center">
  <img src="assets\b7040c8fa25627effd90b9457934c54b.png" alt="">
</p>

Sit back again, and try not to overdose on cappuccino ;-)

<p align="center">
  <img src="assets\eb725847ef17747cf0ca34b67b5f503a.png" alt="">
</p>

Success !

<p align="center">
  <img src="assets\564d868b588cca06da3e1f3739d39f85.png" alt="">
</p>

Check the generated code again. This time, it was good for me ! In your own coding adventures, it may take more re-generations, so do as many code re-generation as needed, until you're satisfied.

<p align="center">
  <img src="assets\eb9a709f750fc3a215b2150c8c8453f7.png" alt="">
</p>

Mission accomplished !