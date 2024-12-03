import { useState } from 'react'
import { Content, RootLayout, Sidebar } from './components'
import SidebarMenu from './components/SidebarMenu'

const App = (): JSX.Element => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  return (
    <RootLayout>
      <Sidebar className="p-2 bg-slate-100">
        <SidebarMenu activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
      </Sidebar>
      <Content className="border-l bg-slate-200 border-zinc-700/20">
        {activeWindow === 'newTemplate' && <div>New Template Window</div>}
        {activeWindow === 'loadTemplate' && <div>Load Template Window</div>}
        {activeWindow === 'loadDirectory' && <div>Load Directory Window</div>}
        {activeWindow === 'settings' && <div>Settings Window</div>}
        {!activeWindow && <div>Main Content</div>}
      </Content>
    </RootLayout>
  )
}

export default App
