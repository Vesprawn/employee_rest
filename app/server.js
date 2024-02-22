import e, { default as express } from 'express';
import { v4 as uuid } from 'uuid';

const PORT = 9001;

const app = express();

app.use(express.json());

const employees = [{
  "id": "df35678b-3f0b-4fc9-9cbe-c40c99fd9d8f",
  "name": "Mario",
  "job_title": 'Plumber',
  "start_date": "1969-05-21"
}]

app.get('/employee/:id', (req, res) => {
  res.send(employees.find(a => a.id === req.params.id));
});

app.post('/employee', (req, res) => {
  const newEmployee = {
    ...req.body,
    id: uuid()
  };
  
  employees.push(newEmployee);

  res.send(newEmployee);
})


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});