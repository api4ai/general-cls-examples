# API4AI general image classification / labelling sample

This directory contains a minimalistic sample that sends requests to the API4AI General Classification API.
The sample is implemented in `python` using [aiohttp](https://pypi.org/project/aiohttp/) module.


## Overview

The General Classification API offers a complete solution for image classification. Its algorithm is trained on about a thousand different types of objects covering a significant part of potential image themes from household tools to a wide variety of animals


## Getting started

Preinstall dependencies before use:

```bash
pip3 install -r requirements.txt
```

Try sample with default args:

```bash
python3 sample.py
```

Try sample with your local image:

```bash
python3 sample.py image.jpg
```


## About API keys

This demo by default sends requests to free endpoint at `demo.api4ai.cloud`.
Demo endpoint is rate limited and should not be used in real projects.

Use [RapidAPI marketplace](https://rapidapi.com/api4ai-api4ai-default/api/general-classification1/details) to get the API key. The marketplace offers both
free and paid subscriptions.

[Contact us](https://api4.ai/contacts) in case of any questions or to request a custom pricing plan
that better meets your business requirements.


## Links

📩 Email: hello@api4.ai
🔗 Website: https://api4.ai
🤖 Telegram demo bot: https://t.me/a4a_img_labelling_bot
🔵 Our API at RapidAPI marketplace: https://rapidapi.com/api4ai-api4ai-default/api/general-classification1/details