# Getting Started with xlab-cli

This project was bootstrapped with [xlab-cli](https://aicarrier.feishu.cn/docx/Hs2bdnxBfoGbbIxDadjcQNgtnpc).

## Available Scripts

In the project directory, you can run:

`pnpm i`

Installs all the dependencies of the project.

`pnpm start`

Runs the app in the development mode.
The page will reload when you make changes.You may also see any lint errors in the console.

## Git Branch Rules

develop ====> development environment branch
release ====> staging environment branch
beta ===> beta environment branch

## Client Detector

The template has been integrated with the client-detector. According to the component requirements, you need to configure the serviceName in index.tsx. Please go to index.tsx to configure it.

## About SSO

Please refer to https://aicarrier.feishu.cn/docx/FYdedfGzEoV73Axi2lLcQdcrnzc for detailed guide.

## About deploy

⚠️⚠️⚠️ <strong style="color:red;">Important !!!</strong>

1. **you need to add CI/CD setting in gitlab code repository**:

   Settings ==> CI/CD ==> General pipelines ==> set `deploy/.gitlab-ci.yml` to "CI/CD configuration file" column

   Then, **push code to the branch mentioned above can be deployed to the corresponding environment directly**.

2. **If you want to support HTTPS**, make sure that your domain has https certification, then **check `secretName` in `values/dev.yml`、`values/release.yml` and `values/prod.yml`.**
