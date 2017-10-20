FROM ubuntu

MAINTAINER Steve Jobs

WORKDIR /cron
ADD mycron .
ADD do.sh .

RUN apt-get update
RUN apt-get install cron

RUN touch /cron/cron.log

RUN chmod +x do.sh
RUN chmod 0600 mycron

RUN crontab -u root mycron

ENTRYPOINT ["cron", "-f"]
