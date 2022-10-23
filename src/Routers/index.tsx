import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { Dashboard } from '../pages/Dashboard';

export function Routers() {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/payments' element={<Dashboard/>}/>
    </Routes>
  )
}