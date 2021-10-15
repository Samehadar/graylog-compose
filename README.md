# Graylog4 in docker-compose
This `docker-compose.yml` runs all the required processes for a Graylog setup on multiple docker containers.

The following processes are run in their own docker containers

* mongodb
* mongo-express
* elasticsearch
* graylog

## Setup
This setup assumes you already have docker-compose and docker installed.

```
git clone git@github.com:Samehadar/graylog-compose.git
cd graylog-compose
docker-compose build
docker-compose up
```

## Play
Open [http://localhost:9000/](https://localhost:9000/) and use the login. (It may take a minute for the graylog server to come online)

```
username: admin
password: admin (generate your own with "echo -n <password> | shasum -a 256")
```

Then go to the [Content Packs](http://localhost:9000/system/contentpacks) page, upload the provided content pack, and then click "Apply content".

### Input
You can now go to the [Inputs page](http://localhost:9000/system/inputs) and see that the Docker GELF input has been entered to consume [logspout](https://github.com/gliderlabs/logspout) mesages from Docker (using the [GELF module](https://github.com/micahhausler/logspout-gelf)).

### Streams
Go to the [Streams page](http://localhost:9000/streams#) to see the example streams that have been created. Clock on each one to see past messages.

_[Hint: Open an incognito window and enter an invalid password in the Graylog login page. This will generate some content for you to see in your streams and dashboard.]_

### Dashboards
Go to the [Dashboards page](http://localhost:9000/dashboards) to see ~~an example dashboard with graphs based on the 2 preconfigured streams~~ something.

### Plugins
Go to the [Graylog Plugin page](https://marketplace.graylog.org/) to see available plugins. Simply drop them in the `plugin/` directory in the project, and they'll be loaded when you restart Graylog.
