import cn from 'classnames'
import { components } from '../data/components'
import { useAppStore } from '../store/app'
import { useLocation } from 'react-router'
import { useEffect, useRef } from 'react'

function PageTemplate({
  content,
  style
}) {
  const pageRef = useRef(null)

  const {pages} = useAppStore()
  const {pathname} = useLocation()
  const page = pages.find(page => page.url == pathname)


  const renderComponents = (componentsData) => {
    return componentsData?.map((component, index) => {
      const canditateComponent = components.find(comp => comp.label == component.label)
      
      if(component?.components?.length > 0) {
        renderComponents(component.components)
      }

      const Component = canditateComponent.component
      return <Component key={index} />
    })
  }

  useEffect(() => {
    pageRef.current.setAttribute("style", style)
  }, [style])

  return (
    <section ref={pageRef} className={cn('page')} >
      {content}
      {renderComponents(page.components)}
    </section>
  )
}


export default PageTemplate