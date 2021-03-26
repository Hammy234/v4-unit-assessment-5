require('dotenv').config();
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
const express = require('express'),
const massive = require('massive');
userCtrl = require('./controllers/user'),
postCtrl = require('./controllers/posts')
const session = require ('express-session');

const {CONNECTION_STRING, SESSION_SECRET} = process.env 

app.use(session({resave: true, saveUninitialized: false, secret: SESSION_SECRET}))
const app = express();
const PORT = 4747

app.use(express.json());

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Post Endpoints
app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
  }).then(db => {
    app.set('db', db);
    console.log('db connected');
  });

app.listen(PORT, _ => console.log(`running on ${PORT}`));


const App = () => (
    <React.StrictMode >
    <HashRouter>
      <div className="app">
        <Route exact path="/" component={Landing} />
      </div>
    </HashRouter>
    </React.StrictMode>
  );