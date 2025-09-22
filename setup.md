# Webhook Setup

Submit a webhook URL in your bot’s settings. After that, generate an authentication token from the same page. This token is included in the Authorization header of every request sent to your endpoint.

:::info
Authentication token is `null` by default. The backend ignores all events if no token is available.
:::

## Responses

- The API expects an HTTP `200` response indicating a successful delivery. 
- Requests receiving a `4xx` response are immediately discarded.
- Requests receiving a `5xx` response are queued again and retried.

## Retries

Each request is retried up to 10 times with an exponential backoff of `2^N` seconds.