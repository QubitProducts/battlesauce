# ⚔ battlesauce
battle test your rest apis with saucelabs

1. define a spec for your api
2. run against a bunch of browsers
3. profit

# usage
```
battletest path/to/spec.json
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
