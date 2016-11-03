curl --include --request GET http://localhost:3000/trails/581b96908be20af9a5ebe3e9 \
  --header 'Content-Type: application/json'

  curl --include --request GET http://localhost:3000/trails/find/name \
    --header 'Content-Type: application/json' \
    --data '{ "name" : "Uno" }'
