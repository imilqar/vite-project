import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import Hero from '../template/hero'

import {
   Type,
   File,
   Star,
   Activity
} from 'react-feather'

export const components = [
  {
    id: "input",
    component: InputText,
    label: 'Input',
    icon: <Type />,
  },
  {
    id: "textarea",
    component: InputTextarea,
    label: 'TextArea',
    icon: <File />
  },
  {
    id: "button",
    component: Button,
    label: 'Button',
    icon: <Star />
  },
  {
    id: "hero",
    component: Hero,
    label: 'Hero',
    icon: <Activity />
  },
]