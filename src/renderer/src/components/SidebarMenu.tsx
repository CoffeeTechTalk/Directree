import React from 'react'
import { IconType } from 'react-icons'
import { FaFileCirclePlus, FaFolderTree } from 'react-icons/fa6'
import { MdFolderCopy, MdSettings } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'
import placeholder from '../../../../resources/placeholder.svg'

interface SidebarButtonProps {
  text: string
  Icon: IconType
  onClick: () => void
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ text, Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'flex items-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      )}
    >
      <Icon className="text-xl" />
      <span className="ml-2">{text}</span>
    </button>
  )
}

interface SidebarMenuProps {
  activeWindow: string | null
  setActiveWindow: (window: string | null) => void
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ setActiveWindow }) => {
  const handleImageClick = (): void => {
    setActiveWindow(null) // Reset to main menu or default state
  }

  const handleNewTemplateClick = (): void => {
    setActiveWindow('newTemplate')
  }

  const handleLoadTemplateClick = (): void => {
    setActiveWindow('loadTemplate')
  }

  const handleLoadDirectoryClick = (): void => {
    setActiveWindow('loadDirectory')
  }

  const handleSettingsClick = (): void => {
    setActiveWindow('settings')
  }

  return (
    <div className="flex flex-col space-y-2">
      <button onClick={handleImageClick} className="mb-4">
        <img src={placeholder} alt="Placeholder" className="w-full h-auto" />
      </button>
      <SidebarButton text="New Template" Icon={FaFileCirclePlus} onClick={handleNewTemplateClick} />
      <SidebarButton text="Load Template" Icon={FaFolderTree} onClick={handleLoadTemplateClick} />
      <SidebarButton text="Load Directory" Icon={MdFolderCopy} onClick={handleLoadDirectoryClick} />
      <SidebarButton text="Settings" Icon={MdSettings} onClick={handleSettingsClick} />
    </div>
  )
}

export default SidebarMenu
