# webscrapertutorial_by_wesbos

15 March 2019

Wesbos' tutorial code sample. 

https://www.youtube.com/watch?v=rWc0xqroY4U&t=8s

I used my twitter account, but since I don't have Instagram account,used @wesbos account url. So, my output differs accordingly. 



```
vikramaroskar  ~/code/scrapecity  npm install
```

Here's my output

```
vikramaroskar  ~/code/scrapecity  npm run dev

> scrapecity@1.0.0 dev /home/vikramaroskar/code/scrapecity
> node -r esm index.js

You have 63 Twitter followers
Wesbos has 19229 Instagram followers
 vikramaroskar  ~/code/scrapecity  
 
 ```


16 March 2019

https://www.youtube.com/watch?v=9dIHjegGeKo

Added express js, nodemon, lowdb, node-cron to the application

```
 vikramaroskar  ~/code/scrapecity  npm run dev

> scrapecity@1.0.0 dev /home/vikramaroskar/code/scrapecity
> nodemon -r esm index.js --ignore lowdb.json

[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node -r esm index.js`
LodashWrapper {
  __wrapped__: 
   { twitter: [ [Object], [Object], [Object] ],
     instagram: [ [Object], [Object], [Object] ] },
  __actions__: [],
  __chain__: true,
  __index__: 0,
  __values__: undefined,
  _: 
   { [Function: lodash]
     templateSettings: 
      { escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        variable: '',
        imports: [Object] },
     after: [Function: after],
     ary: [Function: ary],
     assign: [Function],
     assignIn: [Function],
     assignInWith: [Function],
     assignWith: [Function],
     at: [Function],
......
  first: [Function: head],
     VERSION: '4.17.11' },
  read: [Function],
  write: [Function],
  getState: [Function],
  setState: [Function] }
Example App Started
Example App Running for webscraping on port 3333
Running cron now
64 '19255'
Done writing in cron

```

```
tail: lowdb.json: file truncated
{
  "twitter": [
    {
      "date": 1552713951788,
      "count": 64
    },
    {
      "date": 1552714924317,
      "count": 64
    },
    {
      "date": 1552714984112,
      "count": 64
    }
  ],
  "instagram": [
    {
      "date": 1552713951788,
      "count": "19254"
    },
    {
      "date": 1552714924318,
      "count": "19255"
    },
    {
      "date": 1552714984114,
      "count": "19255"
    }
  ]
}
```


And the curl output for the endpoint
```
 vikramaroskar  ~/code/scrapecity  130  curl http://localhost:3333/scrape
{"twitterCount":64,"instaCount":"19255"} vikramaroskar  ~/code/scrapecity 
```
