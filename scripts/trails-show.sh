

  curl --include --request GET http://localhost:3000/trails/find/name \
    --header 'Content-Type: application/json' \
    --data '{ "name" : "Uno" }'
