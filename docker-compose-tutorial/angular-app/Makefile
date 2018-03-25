all:rm build run

rm:
	docker rmi -f $(docker images -q)

build:
	docker build -t ng2 .

run:
	docker run -p 8080:80 ng2 
