import './styles/global.css';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { App } from './ui/App';

const root = document.getElementById('root');
if (!root) throw new Error('No #root element');

createRoot(root).render(createElement(App));
