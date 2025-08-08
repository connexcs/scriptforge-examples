# ConnexCS ScriptForge Examples

This repository contains a collection of simple and reusable [ScriptForge](https://docs.connexcs.com/apps/architecture/script/) scripts for use with the ConnexCS platform.

Each script can be copied directly into your ScriptForge environment inside the ConnexCS Admin Portal.

---

## 📚 Script Index

| Script Name | Description | View |
|-------------|-------------|-------|
| `ctx Example` | Example using ctx to answer call, speak and hang up | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-example.js) |
| `ctx.answer` | Answer Call | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-answer.js) |
| `ctx.hangup` | Hang up the call | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-hangup.js) |
| `ctx.tts` | Perform text-to-speech on the call | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-tts.js) |
| `ctx.bridge` | Bridge the call to another destination | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-bridge.js) |
| `ctx.echo` | Echo the call | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-echo.js) |
| `ctx.play` | Play an audio file | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-play.js) |
| `ctx.ivr` | Interactive voice response to collect DTMF input | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-ivr.js) |
| `ctx.blockDtmf` | Block DTMF | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/ctx-blockdtmf.js) |
| `ctx.set & ctx.get` | Sets a variable and then retrieves it | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/528bf1624f6d6a224396d1a0d43c106142bf3d39/ctx-set-get.js) |
| `simple-calling-card` | Class 5 Programmable Voice Application | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/simple-calling-card.js) |
| `account-jump.js` | Class 5 Account Jump (Pinless Calling Support) | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/account-jump.js) |
| `api.js` | Uses cxRest to authenticate and fetch customer data from the ConnexCS API. | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/api.js) |
| `add-header.js` | Add Custom SIP Headers to Outbound Call | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/add-header.js) |
| `asrplus-faster-call-fail.js` | ASRPlus Pre-Check for Faster Call Failure | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/asrplus-faster-call-fail.js) |
| `better-date-time-restriction.js` | Enforce calling schedules based on the day of the week and time | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/better-date-time-restriction.js) |
| `email.js` |  Send an email | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/email.js) |
| `random-cli-from-did.js` | Random CLI from DID | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/random-cli-from-did.js) |
| `random-cli-from-ranges.js` | Choose a random CLI from a range of number ranges passed in as a variable. | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/random-cli-from-ranges.js) |
| `rss-feed.js` | Add a job to ScriptForge job queue | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/3f892099c682bbe418904c9a74982976ae2c207c/rss-feed.js) |
| `pin-verification.js` | PIN Verification | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/master/pin-verification.js) |
| `simple-greeting.js` | Simple Greeting | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/master/simple-greeting.js) |
| `balance-announcer.js` | Customer Credit Balance Announcer Using SIP users | [📄 View](https://github.com/connexcs/scriptforge-examples/blob/master/balance-announcer.js) |

---

## 🔧 Usage

To use any script:

1. Log in to your [**ConnexCS Contol Panel**](https://app.connexcs.com)
2. Go to **IDE → ScriptForge **
3. Create or select a script file
4. Copy-paste contents of the chosen `.js` file
5. Save and assign it via  **routing**, or **DID**

---
