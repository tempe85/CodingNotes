* Host name to use for PuTTy: `flip3.engr.oregonstate.edu`

When running Node:

>Since this is running on a shared machine, everyone cannot use port 3000. If you look at the diagnostic.js file you will see that the port 3000 was replaced with `process.argv[2]`. This means it will take the argument immediately after the filename when you start Node.js and use that as the port. So running `node diagnostic.js 5345` will start node running on port 5345. Everyone will need to use a unique port otherwise you will get an error that the port is in use. `Try a number between 3000 and 65535` till you find one that works for you (Hint: Try some random permutation of the last 4 or 5 digits of your OSU ID).

* You must be using the vpn to access the MySQL database. 
  

### <u>Persistance</u>

* Running the node module `forever`. 
  * Before you would run `forever start diagnostic.js` and now you will run:
  
  ```javascript
  ./node_modules/forever/bin/forever start diagnostic.js ${portNumber}
  ```
    * You could view the page being served by visiting `http://flipX.engr.oregonstate.edu:${portNumber}` while you are VPNed into the OSU network.

<u>Important Note:</u>
>If you log into access.engr.oregonstate.edu you will randomly be put on flip1, flip2 or flip3. You can see which flip you are using the command hostname then you can switch flips by using the command `ssh flipX` (In my case flip3) where X is 1, 2 or 3. You need to be sure to log into the same flip every time because the node instance will only be running on one of them. So if you ever run forever list and don't see your instance running it means you are probably on the wrong flip.

* Activity
  * You should be able to run the diagnostic and access the page it serves while VPNed onto the server. `It will display a message that "MySQL is working"`. That means your node is set up successfully.

* Standard sequence to be followed:
  - using the VPN
  - SSH-ing into FLIP
  - making sure you are on the right flip
  - forever running from the application directory
  - configuring MySQL. 

>If you have trouble with this section, be sure to consult Piazza for relevant discussions.