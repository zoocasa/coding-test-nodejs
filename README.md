# Exp Tech Team Coding Test (Node.js, Express API-only)

## Instructions

**Format:** a 45 min pair programming session followed by 15 minutes of discussion and feedback.

**Goal:** We'll be creating a new Node.js (Express) listing service with API endpoints, pairing with Test Driven Development principles using Jest. The listing data model will be:

Listing schema (as used in tests)
- `id`: integer
- `street_address`: string
- `price`: integer, 0..10_000_000_000
- `status`: `for_sale` | `sold` | `expired`
- `city`: string

**Preparation:** Candidate should have a Node.js 20+ development environment set up on their laptop (via `nvm`, see below) and be prepared to screen share as we work together.

> [!IMPORTANT]
> We're simulating a regular work day so the candidate is allowed to Google anything during the test (we don't expect you to have syntax memorized). If you use an AI assisted workflow (Claude, Cursor, Copilot, etc) be prepared to explain any generated code and why it does or does not work. The most successful candidates share their thoughts as they work, what ideas they have and what they're trying to do.

**Constraints:**
- 45 minutes of coding, 15 minutes of discussion
- Explain your solution as you go
- You may ask for hints if stuck
- API-only, smallest app possible

## Setup

**Prerequisites:**
- [`nvm`](https://github.com/nvm-sh/nvm) installed
- npm

```bash
nvm install
nvm use
npm install
```

Run server:
```bash
npm start
# then visit http://localhost:8080
# You should see "Express server running"
```

Run tests (they start failing by design):
```bash
npm test
```

### Starting state
- Request tests are red by design

> [!NOTE]
> Keep data in-memory for the exercise.

> [!TIP]
> Keep changes small and focused; write or update tests as you go.
