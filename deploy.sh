docker build -t SinkholeTracker-image .

docker tag SinkholeTracker-image registry.heroku.com/SinkholeTracker/web


docker push registry.heroku.com/SinkholeTracker/web

heroku container:release web -a SinkholeTracker