import {
  Link,
  Outlet
} from "react-router-dom";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';


import { useAppStore } from "../store/app";
import { components } from "../data/components";
import { useState } from "react";
import { nanoid } from "nanoid";

function Main() {
  const [parentComponentIndex, setParentComponentIndex] = useState(null)
  const {pages, addPage} = useAppStore()
  const {
    control,
    register,
    handleSubmit
  } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'components',
  })

  const selectedComponents = useWatch({
    control,
    name: "components",
    defaultValue: []
  })

  const handleAddComponent = (component) => {
    if(!parentComponentIndex) {
      append({label: component.label, style: "", components: [], nanoid: nanoid()})
      return
    }
    
    const parentComponent = selectedComponents[parentComponentIndex]
    parentComponent.components = [...parentComponent.components, component]
    console.log(parentComponent.components)

    insert(parentComponentIndex, parentComponent)
  }

  return (
    <main className='main'>
      <header className="header">
        <nav className="navbar">
          {pages.map((page, index) => 
            <Link to={page.url} key={index}>Go to {page.url}</Link>)}
        </nav>
      </header>

      <section className="content">
        <section className='preview'>
          <Outlet />
        </section>
        <section className='editor-container'>
          <label>URL</label>
          <InputText {...register('url')} name="url" className="editor" />

          <label>Content</label>
          <InputText {...register('content')} name="content" className="editor" />



          <label>Style</label>
          <InputTextarea {...register('style')} name="style" className="editor" rows={5} cols={30}  />

          <label>Components</label>
      
          {components.map((component, index) => (
            <section key={index} >
            <Button
              icon={component.icon} 
              label={component.label}
              onClick={() => handleAddComponent(component)}
            />
            </section>
          ))}

          {selectedComponents.map((selectedComponent, index) => (
            <div className={parentComponentIndex == index ? "selected": ""} key={index} onClick={() => setParentComponentIndex(index)} > {selectedComponent.label}</div>
          ))}

          <Button label="Create" onClick={handleSubmit(addPage)} />
        </section>
      </section>
    </main>
  )
}

export default Main
