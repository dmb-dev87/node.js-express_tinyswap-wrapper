# TinyAlgo Express

project to port basic swapping functions to javascript.

## Run the example
comment out any import statements in `swap.js` then:

```bash
npm install
npm run start
```

## Generate new logicsig
Edit the last line of code in `logicsig.js` to add your swap pair (order of pairs does not matter). The following code show the last 2 arguments, which in this case are `0` for Algorand and `137594422` for HDL:

```jsx
get_pool_logicsig(350338509,0,137594422)
```
After adding your asset ids and saving the file, run:

```bash
node logicsig.js
```
Your new logicsig program will be generated in the terminal. Copy and paste it into `swap.js` `const bytecode` variable. 
