import express from 'express'

const app = express()
const daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get('/', (_req, res) => {
  res.send('healthy')
})

app.get('/api', (req, res) => {
  try {
      const { slack_name, track } = req.query
      const date = new Date()
      const current_day = daynames[date.getDay()]
      const utc_time = date.toISOString()
      const github_file_url = 'https://github.com/dopewevmond/hng-1/blob/main/server.js'
      const github_repo_url = 'https://github.com/dopewevmond/hng-1'
      res.json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code: 200
      })
  } catch (err) {
    res.status(500).json({ message: 'An error occurred' })
  }
})

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})