curl --include --request POST http://localhost:3000/trails \
  --header "Content-Type: application/json" \
  --data '{ "trail":
            {"name": "Some Rad Trails Bro",
            "lat": "26.72",
            "lon": "72.13",
            "difficulty": "5",
            "rating": "10"}

          }'

          curl --include --request POST http://localhost:3000/trails \
            --header "Content-Type: application/json" \
            --data '{ "trail":
                      {"name": "Uno",
                      "lat": "26.72",
                      "lon": "72.13",
                      "difficulty": "5",
                      "rating": [1,2]}

                    }'
