import { createWebHashHistory, createRouter } from 'vue-router';

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/Switch.vue';
import TabDemo from './components/Tab.vue';
import DialogDemo from './components/Dialog.vue';
import DocDemo from './components/Doc.vue';
import ButtonDemo from './components/Button.vue';

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    path: 'switch',
                    component: SwitchDemo
                },
                {
                  path: 'button',
                  component: ButtonDemo
                },
                {
                  path: 'Dialog',
                  component: DialogDemo
                },
                {
                  path: 'Tab',
                  component: TabDemo
                }
            ]
        }
    ]
})