# Example of how to use BingChat with ExpressJS

Example for the issue https://github.com/transitive-bullshit/bing-chat/issues/55

## Usage

```bash
npm install 
npm start #or npm run dev
```

Make sure you're using `node >= 18` so `fetch` is available.

## Usage

**You need access to Bing Chat OR a valid cookie from someone who has access**.

The cookie you need from Bing is the `_U` cookie (or just all of the cookies concatenated together; both will work).

## Testing (http-local)

**Variant:** [Creative, Precise, Balanced] (opcional)

* http://localhost:3000/api?prompt=Create%20a%20poem%20about%20JavaScript%20loops&variant=Creative

* http://localhost:3000/api?prompt=Create%20a%20poem%20about%20JavaScript%20loops&variant=Precise

* http://localhost:3000/api?prompt=Create%20a%20poem%20about%20JavaScript%20loops&&variant=Balanced

# Thanks & Credit
 [Rahul Nallappa](https://github.com/rnz269), [waylaidwanderer](https://github.com/waylaidwanderer), [canfam](https://github.com/canfam) for helping to reverse-engineer the API 💪 and [Travis Fischer](https://transitivebullsh.it)