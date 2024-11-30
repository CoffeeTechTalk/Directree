import { Content, RootLayout, Sidebar } from './components'

const App = (): JSX.Element => {
  return (
    <RootLayout>
      <Sidebar className="p-2 bg-slate-100">Sidebar</Sidebar>
      <Content className="border-l bg-slate-200 border-zinc-700/20">Content</Content>
    </RootLayout>
  )
}

export default App
