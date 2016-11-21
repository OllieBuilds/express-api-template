curl --include --request POST http://localhost:8080/states \
  --header 'Content-type: application/json' \
  --data '{ "state": {
              "name": "Vermont",
              "trails": ["581e32e26f07ead83668b836"]
            }
          }'
