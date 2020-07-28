import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import bodyParser from 'body-parser';

import tcgClock, { calculcateAngleBetweenTwoClockHands } from './api/tcgClock';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TCG clock return the angle between two clock hands
app.get('/tcg/getClockAngle', (req, res, next) => {
    let calcAngle=calculcateAngleBetweenTwoClockHands(req.body);
    var jsonObj= {"clockAngle": calcAngle};

    res.send(jsonObj);
});

//RUN
app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
})