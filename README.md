# mohammad.dev

## To pull docker app: 
`docker pull mohammaddev/mo_dev_web`

## To deploy to production:
1. make sure your kubectl config is set to the correct kubernetes cluster
2. clone deployment files: 

    `git clone git@github.com:MoTheNerd/mohammad_dev_deploy_files.git ~/@modev/deploy_files`

3. install dependencies:

    `yarn`

4. build the react app for production:

    `yarn build`

5. build a new docker image with name `mohammaddev/mo_dev_web`:

    `docker build -t mohammaddev/mo_dev_web .`

6. push the new docker image with name `mohammaddev/mo_dev_web`:

    `docker push mohammaddev/mo_dev_web:latest`

7. apply the kubernetes configuration again:

    `kubectl apply -f ~/@modev/deploy_files/prod-deployments.yaml`