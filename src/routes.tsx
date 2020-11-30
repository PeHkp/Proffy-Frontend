import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import LadingPage from './pages/LadingPage';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
    <BrowserRouter>
        <Route path="/" exact component={LadingPage} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
    )
}
export default Routes;