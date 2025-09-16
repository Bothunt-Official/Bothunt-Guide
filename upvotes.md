# Upvotes

Users can upvote a bot once every `12` hours. At the end of each month, any bot with more than 200 upvotes has its counter reset to 0.

## Schema

Currently, the API only supports the upvote event. Below is the schema for the payload sent via the request.

| Key            | Type     | Description                                              |
| -------------- | -------- | -------------------------------------------------------- |
| action         | `STRING` | The type of event [`upvote`]                             |
| user_id        | `STRING` | Discord ID of the user who cast the vote                 |
| bot_id         | `STRING` | Discord ID of the bot that received the upvote           |
| streak_count   | `NUMBER` | Number of consecutive votes by the user without skipping |
| last_vote_time | `DATE`   | ISO 8601 timestamp of when the vote was cast             |

:::tip
The `streak_count` resets to 0 if 24 hours pass after `last_vote_time` without a new upvote.
:::
