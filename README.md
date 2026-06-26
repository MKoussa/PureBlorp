# PureBlorp

Pure Blorp is the Blorp Browser Based Synthesizer created by Matthew Koussa.

It was built in p5 and is now hosted in Elixir!

## Running PureBlorp

PureBlorp is an Elixir/Phoenix application. To make things simple, this repo is setup for [DevBox](https://www.jetify.com/docs/devbox).

After installing DevBox, follow these steps to confirm PureBlorp runs locally.

Load the DevBox Shell
```
devbox shell
```
Deploy PureBlorp assets

```
mix assets.deploy
```
Clean all the extra stuff
```
mix phx.digest.clean --all
```
Start the server!
```
iex -S mix phx.server
```
Go to localhost:4000 in your browser.

## Docker

To run Pure Blorp in Docker, you'll need to create a .env file and set the SECRET_KEY_BASE variable.
You can generate your own number by using 'mix phx.gen.secret'.

Example contents of .env:

```
SECRET_KEY_BASE=wTDZ5wmf+yzJqSbyEClypiyOJt7Yd7EEDXkWd71r7ACNv1sFliPUSU0apXeMwOR2
```
Then build the image
```
sudo docker build -t pureblorpimage .
```
Docker Compose
```
sudo docker compose up
```
Go to localhost:4000 in your browser.