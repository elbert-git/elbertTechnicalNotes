# Solidity Time
**Time**
--------

##### Epoch time: timing standard of solidity

Solidity uses epoch time to track time. Which is the number of seconds that have elapsed from 1970/01/01. Which is just a large uint.

##### Keywords

```text-plain
now;                        // current epoch uint
uint min  = 1 minutes       // num of seconds in a minute
uint hour = 1 hour          // num of seconds in an hour
uint week = 1 weeks         // num of seconds in a week
```

##### Useful tool :

[epoch time converter](https://www.epochconverter.com/)

##### Some notes on usage

*   you can handle minting phases by simply checking if `now > mintingPhaseTime`
*   while this can help schedule 'contract modes'
*   this can't do 'real cron jobs'. Can't call a function on schedul. The fucntion must be called to check the time then it runs some logic.