import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/*

if (document.location.href.includes('signup')) {
    hydrate(
        <BrowserRouter>
            <LoginMenu />
        </BrowserRouter>,
        document.getElementById('login_menu')
    );
    hydrate(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>,
        document.getElementById('sign_up')
    );
}
else if (document.location.href.includes('fsm')) {
    hydrate(
        <BrowserRouter>
            <FsmToolBar />
        </BrowserRouter>,
        document.getElementById('fsm_menu')
    );
}
else {
    //MENU BAR MUST BE AT THE TOP
    hydrate(
        <BrowserRouter>
            <GeminiMenu2 />
        </BrowserRouter>,
        document.getElementById('nav')
    );
    hydrate(
        <BrowserRouter>
            <ReportContainer />
        </BrowserRouter>,
        document.getElementById('reportContainer')
    );
}
*/