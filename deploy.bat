docker build -t sinkholetracker-image .

docker tag sinkholetracker-image registry.heroku.com/sinkholetracker/web


docker push registry.heroku.com/sinkholetracker/web

heroku container:release web -a sinkholetracker