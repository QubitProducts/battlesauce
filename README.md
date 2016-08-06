# ⚔ battlesauce
battle test your rest apis with saucelabs

1. define a spec for your api
2. run against a bunch of browsers
3. profit

# motivation
useful for catching issues e.g. with incorrect cross domain header configurations or bad JSON formatting

# installation
```
npm install -g battlesauce
```

# usage
```
export SAUCE_USERNAME='jimbob'
export SAUCE_ACCESS_KEY='123456789'
battletest my-api-spec.json

# note: if you omit the sauce credentials the test will just be run against your local chrome instance
```

# spec format
```
[{
  "describe": "The thing getter API",
  "url": "http://echo.jsontest.com/key/value/one/two",
  "method": "get",
  "data": {},
  "response": {
    "json": {
      "one": "two"
    }
  }
}, {
  "describe": "The thing getter API status endpoint",
  "url": "http://echo.jsontest.com/status",
  "method": "get",
  "data": {},
  "response": {
    "text": "ok"
  }
}]

```
