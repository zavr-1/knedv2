FROM mcr.microsoft.com/azure-functions/node:2.0

RUN apt-get install -y perl

ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY . /home/site/wwwroot