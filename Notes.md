# Docker Commands
docker run -d --publish 9010:9010 chan4est/personal-site
docker container rm <> -f
docker image rm chan4est/personal-site -f
docker tag <image_id> chan4est/personal-site:1.0.X

docker run -d --restart=always --publish 9010:9010 chan4est/personal-site

https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html

# CentOS Setup

1. install docker https://www.reddit.com/r/docker/comments/d8j8jj/bad_news_for_those_wanting_to_use_docker_in/
1. enable docker
1. install nginx
1. enable nginx
1. install snapd https://snapcraft.io/docs/installing-snap-on-centos


# Workflow
1. Local dev
2. Test
2. Produce docker image
3. Run docker image in a container
1. Test
1. Push to Dockerhub
1. Pull from EC2 docker pull chan4est/personal-site:latest

ec2-18-236-255-175.us-west-2.compute.amazonaws.com
